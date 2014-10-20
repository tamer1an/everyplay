Utils = {
    constructor:function(){

    },
    dqAll : function (sel){
        return document.querySelectorAll(sel);
    },
    elemHasAttribute:function(elementName,attribute){
        var element = document.createElement(elementName);
        return attribute in element;
    },
    addEventHandler:function(oNode, evt, oFunc,bCaptures,onlyRootElement){
        if (oNode.length>0 && onlyRootElement!==true) {
            for (var idx in oNode){
                if (typeof(oNode[idx]) == "object")
                    oNode[idx].addEventListener(evt, oFunc, bCaptures);
            }
            return;
        }
        oNode.addEventListener(evt, oFunc, bCaptures);

        //TODO: support ie
        //if (typeof(window.event) != "undefined")
        //oNode.attachEvent("on"+evt, oFunc);
    },
    requestGET:function(options,callback){
        var strParams = this.createGETString(options);
        var xmlhttp = this.requestStart(strParams,function() {
            if (xmlhttp.readyState == 4) {
                if(xmlhttp.status == 200) {
                    callback(xmlhttp.responseText);
                }
            }
        });
    },
    requestStart:function(options,callback){
        var xmlhttp = this.getRequestObj();
        xmlhttp.open('GET', this.getURL(options) , true);
        xmlhttp.onreadystatechange = callback;
        xmlhttp.send(null);

        return xmlhttp;
    },
    getRequestObj:function(){
        var xmlhttp;
        try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (E) {
                xmlhttp = false;
            }
        }
        if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
            xmlhttp = new XMLHttpRequest();
        }
        return xmlhttp;
    },
    createGETString:function(options){
        var requestString = '';
        for (var item in options){
            requestString += [item,'=',options[item],'&'].join("")
        }
        return requestString;
    }
};