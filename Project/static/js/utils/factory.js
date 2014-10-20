//Object factory
var Factory = function(){
    this.constructor=function(){};
    this.objType = {};
    this.createNewObj = function (obj) {
        obj = (typeof(window[obj])=='object') ? window[obj] : { error: 'no such class name in global space' };

        this.setObjType(obj);
        var func = this.getObjConstructor();

        if (obj.extend){
            var f = new Factory();
            func.prototype = f.createNewObj(obj.extend);
        }

        for (var prop in obj){
            func.prototype[prop] = obj[prop];
        }
        return new func();
    };
    this.getObjType = function(){
        return this.objType;
    };
    this.setObjType = function(obj){
        this.objType = obj
    };
    this.getObjConstructor = function(obj){
        return this.getObjType().constructor;
    }
};