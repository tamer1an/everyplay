requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '/js/app',
        galleryApp: '/js/app/galleryapp',
        galleryCtrl : '/js/app/galleryapp/controllers',
        css: '/css'
    }
});

loadCss('css/mainGallery.css');

require(['galleryApp/app'],function(common){
     require(['galleryCtrl/fileList','galleryCtrl/imagePreview'],function(common){
        require(['app/init']);
    });
});



function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}