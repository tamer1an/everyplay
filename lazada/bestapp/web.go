package web

import (
	"net"
	"net/http"
	"net/http/fcgi"
	"text/template"
	"time"

	"github.com/divan/tyco/interactive/db"
	"github.com/divan/tyco/interactive/xmlrpc"
	log "github.com/divan/tyco/vislog"
	goweb "github.com/gocraft/web"
)

// DataSource represents DB or other source for data needed by web handlers.
type DataSource interface {
	GetAllAlarms(unit string) ([]db.Alarm, error)
	GetAllAlerts(unit string) ([]db.Alert, error)
	GetAllEvents(unit string) ([]db.Event, error)
	GetAllCamerasNormal(unit string) ([]db.Camera, error)
	GetAllCamerasAlarm(unit string) ([]db.Camera, error)
	GetAllDetectors(unit string) ([]db.Detector, error)
	GetAllDevices(unit string) ([]db.Device, error)
	AlarmsHasVideo(unit string) (bool, error)
	EventsSince(unit string, timestamp time.Time) (int, error)
	AlertsSince(unit string, timestamp time.Time) (int, error)
	AlarmsSince(unit string, timestamp time.Time) (int, error)
	GetPin(unit string) (string, error)
	GetUnitFeatures(unit string) (map[string]bool, error)
	GetUnitTransport(unit string) (string, error)
	GetUnitState(unit string) (string, string, bool, error)
	GetPanelMemory(unit string) ([]string, error)
	GetPanelTroublesCount(unit string) (int64, error)
	GetPanelAlarmsCount(unit string) (int64, error)
	GetUnitAlarmsCount(unit string) (int64, error)
	UnitIsReady(unit string) (bool, error)
	UnitSerialByWebname(webname string) (string, error)
	GetCameraDataNormal(unit string, utz_id int64) (db.CameraDataNormal, error)
	GetCameraDataAlarm(evt_id int64) (db.CameraDataAlarm, error)
	GetCameraStatus(unit string, utz_id int64) (string, error)
	UnitZoneIdByUtzId(utz_id int64) (int64, error)
}

var (
	pmax      *xmlrpc.PmaxClient
	encryptor *xmlrpc.Client
	data      DataSource
)

func initDataSource(dsn string) {
	data = db.Init(dsn)
}
func initXMLRPC(uri string) {
	pmax = xmlrpc.NewPmaxClient(uri)
	encryptor = xmlrpc.NewClient(uri)
}

func startHTTPServer(address string, router http.Handler) error {
	return http.ListenAndServe(address, router)
}

func startFCGIServer(address string, router http.Handler) error {
	listener, err := net.Listen("tcp", address)
	if err != nil {
		return err
	}
	return fcgi.Serve(listener, router)
}

//
// Contexts
//

// Context is a basic context for any request
type Context struct {
	Auth Auth
}

// UnitContext is a context for every request for unit
type UnitContext struct {
	*Context
	Unit   string
	Serial string
}

// Auth represents auth info
type Auth struct {
	Logged   bool
	Username string
	Email    string
}

func initRouter() *goweb.Router {
	router := goweb.New(Context{})
	router.Middleware(goweb.StaticMiddleware("web/static"))
	router.Get("/", (*Context).IndexPage)
	return router
}

func Start(address, dsn, xmlrpcUri string, fcgi bool) {
	initDataSource(dsn)
	initXMLRPC(xmlrpcUri)

	router := initRouter()
	var startFunc func(string, http.Handler) error
	if fcgi {
		startFunc = startFCGIServer
	} else {
		startFunc = startHTTPServer
	}

	err := startFunc(address, router)
	if err != nil {
		log.Fatal(err)
	}
}

// Page handlers

type dataIndexPage struct {
	Title string
}

var templateDir = "./web/templates/"

// IndexPage renders main index page.
func (c *Context) IndexPage(w goweb.ResponseWriter, r *goweb.Request) {
	data := dataIndexPage{
		Title: "Test page",
	}
	t := template.Must(template.ParseFiles(templateDir + "/index.tpl"))
	err := t.Execute(w, data)
	if err != nil {
		log.Errorf("Template exec: %v", err)
	}
}
