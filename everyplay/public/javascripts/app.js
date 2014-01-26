var Application = (function ($) {
    var App = {
        stores : {},
        views : {},
        presenters : {}
    };

    //VIDEO LIST PAGE VIEW
    var videoListPage = Backbone.View.extend({
        el : '#videos',
        selectors:{
            videos_thumb:'section[data-role="content"] div > img'
        },
        events : {
            'click button#add': 'addItem'
        },
        initialize : function () {
            _.bindAll(this, 'render','addItem','appendItem');

            this.collection = App.stores.videoList;
            this.collection.bind('add', this.appendItem);

            this.render();
        },
        render : function () {
            var self = this;
            $(this.el).append("<button id='add'>Add list item</button>");
            $(this.el).append("<ul></ul>");
            _(this.collection.models).each(function(item){ // in case collection is not empty
                self.appendItem(item);
            }, this);
        },
        //Model Event Handlers
        addItem: function(){
            var item = new videoItem();
            item.set({
                part2: item.get('part2') // modify item defaults
            });
            this.collection.add(item); // add item to collection; view is updated via event 'add'
        },
        appendItem: function(model){
            var itemView = new ItemView({
                model: model
            });
            $('ul', this.el).append(itemView.render().el);
        }
    });


//// MODEL & COLLECTIONS
    var videoItem = Backbone.Model.extend({
//        url:'https://everyplay.com/api/videos',
        defaults:function(){

            return  { // video Entity
                part1: 'hello',
                part2: 'world',

                base_url: "url",
                camera_crop: true,
                comment_count: 0,
                content_rating: 0,
                copied_from_user_id: 0,
                copied_from_video_id: 0,
                copied_to: 0,
                created_at: "",
                device_type: "",
                duration: 0,
                encoding_job_id: "",
                game: {},             // id:23, name:Bad Piggies, profile_id:4435, user_id:113, external_id:533451786, has_external_url:true,…
                game_id: 0,
                height: 0,
                hidden: false,
                kind: "video",
                legend: "",
                likes_count: 0,
                moderation_flag: "",
                not_listed: false,
                permalink: "",
                preview_thumbnail: "thumb.jpg",
                session_id: "",
                share_count: 0,
                shared_to_count: 0,
                status: "draft",
                tag_list: "",
                thumbnail_files: {},    // {high:thumbnail_big.jpg, medium:thumbnail_medium.jpg, low:thumbnail.jpg},
                thumbnail_url: "http://static.everyplay.com/everyplay/videos/231552/141456/thumbnail.jpg",
                title: "test",
                user:{username:'user'}, // {id:154746, admin:false, username:NerdyBird, permalink:nerdybird,…}
                user_id: 0,
                video_files:{},         // {high:m31-1500.mp4, medium:m31-1000.mp4, low:b30-600.mp4, hls:playlist.m3u8}
                video_url: "",
                views: 0,
                width: 0
            }
        }
    });

    var videoListStore = Backbone.Collection.extend({
        url:'https://everyplay.com/api/videos?',
        initialize: function(){
            this.dropdown = $('#video-filter');
            this.url += this.createGETString();
        },
        model: videoItem,

        URL: 'https://everyplay.com/api/videos?',
        client_id:'336d586b6e1b5e4a0f9eaa48e7e697d8cd51db40',
        defaultVideosQuery:{
            offset:0,
            limit:24
        },
        lastVideosQuery:{ },
        lastVideosQueryResult:[],

        createGETString:function(){
            var options = this.getDefaultVideosQuery();
            options.client_id = this.getClientId();
            options.order = this.dropdown.val();

            var requestString = '';
            for (var item in options){
                requestString += [item,'=',options[item],'&'].join("")
            }
            return requestString;
        },

        //list history
        getDefaultVideosQuery:function(){
            return this.defaultVideosQuery;
        },
        setLastVideosQueryResult:function(arr){
            this.lastVideosQueryResult=arr;
        },
        setLastVideosQuery:function(options){
            this.lastVideosQuery=options;
        },

        //Prop Getters
        getClientId:function(){
            return this.client_id;
        },
        getURL:function(options){
            return this.URL+options;
        }
    });

    var ItemView = Backbone.View.extend({
        tagName: 'li',
        initialize: function(){
            _.bindAll(this, 'render');
        },
        render: function(){
            var p   = $(['<div>','<p>',this.model.get('title') ,'</p>','<p>', this.model.get('user').username ,'</p>','</div>'].join("")),
                img = $('<img>',{
                    'id'          : 'videoModelItem-'+ this.model.get('id'),
                    'src'         : this.model.get('thumbnail_url'),
                    'data-src'    : this.model.get('video_url'),
                    'data-user'   : this.model.get('user').username,
                    'data-date'   : this.model.get('created_at'),
                    'data-title'  : this.model.get('title'),
                    'data-avatar' : this.model.get('avatar_url_small')
                });

            $(this.el).append([img,p]);

            return this;
        }
    });

    //Single Video Page
    var videoSinglePage = Backbone.View.extend({
        el : 'footer',
        events : {
            // "load" :function(e) { alert(e.type); },
        },
        initialize : function () {
            _.bindAll(this,'render');
            this.render();
        },
        render : function () {
        }
    });

    //AppControler
    var AppControler = Backbone.View.extend({
        el : 'body',
        events : {
            "change #video-filter" : "updateVideolist"
        },
        initialize : function () {
            _.bindAll(this,'updateVideolist', 'render');
           this.videoListStore  = App.stores.videoList = new videoListStore();
           this.videoListPage   = App.views.videoList  = new videoListPage;

           this.videoListStore.fetch();

           this.render();
        },
        render : function () {

        },
        updateVideolist : function () {
            alert(1)
        }
    });

    //APP CONSTRUCTOR:
    $(document).ready(function() {
        document.ontouchmove = function(e){
            e.preventDefault();
        };

        App.presenters.AppControler = new AppControler;

    });

    return App;
})(jQuery);
