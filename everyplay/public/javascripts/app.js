var Application = (function () {
    var App = {
        stores : {},
        views : {}
    };

    var videoSinglePage = Backbone.View.extend({
        el : 'body',
        events : {
            // "load" :function(e) { alert(e.type); },
        },
        initialize : function () {
            _.bindAll(this, 'buildPage');
            this.buildPage();
        },
        buildPage : function () {
            $(document).ready(function() {

                // disable vertical bounce on iOS
                document.ontouchmove = function(e){
                    e.preventDefault();
                };
            });
        }
    });

    /*** BasicPage Page Functionality */
    var videoListPage = Backbone.View.extend({
        client_id:'336d586b6e1b5e4a0f9eaa48e7e697d8cd51db40',
        defaultVideosQuery:{
            offset:0,
            limit:24
        },
        lastVideosQuery:{ },
        lastVideosQueryResult:[],
        selectors:{
            videos_thumb:'section[data-role="content"] div > img'
        },
        URL: 'https://everyplay.com/api/videos?',
        el : 'body',
        events : {
            "click" : "test"
        },
        initialize : function () {
            _.bindAll(this, 'test', 'videos');
            this.videos();
        },
        videos : function () {

        },
        test : function () {

        },
        getDefaultVideosQuery:function(){
            return this.defaultVideosQuery;
        },
        setLastVideosQueryResult:function(arr){
            this.lastVideosQueryResult=arr;
        },
        setLastVideosQuery:function(options){
            this.lastVideosQuery=options;
        },
        getClientId:function(){
            return this.client_id;
        },
        getURL:function(options){
            return this.URL+options;
        }
    });

    //APP CONSTRUCTOR:
    $(function () {
//        App.views.videoSinglePage = new videoSinglePage;
        App.views.videoPage       = new videoListPage;
    });

    return App;
})();