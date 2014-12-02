requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '/js/app',
        galleryApp: '/js/app/galleryapp',
        css: '/css'
    }
});

loadCss('css/mainGallery.css');

requirejs(['galleryApp/app','galleryApp/controllers/fileGallery'],function(common){
    require(['app/init']);
});

function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}