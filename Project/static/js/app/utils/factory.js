'use strict'

// window.performance.mark('mark_start');

window.onload = function (){
    var ready = true;
    
    if ('getBattery' in window.navigator){ //TODO: JS can work in another mode if user has low battery on his device
         window.navigator.getBattery().then(function(batteryManager){
             ready = batteryManager.charging;
             console.log('batteryManager',batteryManager)
         });
    }
    
    if (ready){
        var objArr = [], Factory = new NFactory({
            "title": "Nexus 5",
            "frontCamera": "15mpx",
            "width" : "50mm",
            "height": "200mm",
            "weight": "300gr"
        });
        // androidNexus5Factory.createNewObj() // - return single Nexus 5 object
        Factory.createNewObjArray(50); // - - return Array of Nexus 5 objects
    } else {
         alert('Device on battery mode')
    } 
    // window.performance.mark('mark_fully_loaded');
    // console.log(window.performance.getEntriesByName('mark_fully_loaded'));
}

/**
 *  @name {AbstractFactory}
 *  @description {AbstractFactory functionality}
 *  @module {Factory}
 */
AbstractFactory.prototype._privateStore = function (JSONObj,methodArr){
    this.JSObj = {}; this._defineProp(this,'blueprint',JSONObj);

    for (var prop in JSONObj){
       this._defineReadOnlyProp(this.JSObj,prop,JSONObj[prop]);
    }
    
    var count = methodArr.length;
    for (var i=0;i<count;i++){
      this._defineMethod(this.blueprint, methodArr[i]);
    }
}
function AbstractFactory () {
    this._privateStore.prototype._defineReadOnlyProp = function(obj,prop,val){
      Object.defineProperty(obj, prop, {
          enumerable: false,
          configurable: false,
          writable: false,
          value: val
        });
     }
     
     this._privateStore.prototype._defineProp = function(obj,prop,val){
        Object.defineProperty(obj, prop, {
          enumerable: true,
          configurable: true,
          writable: true,
          value: val
        });
    }
    
    this._privateStore.prototype._defineSetter = function(obj,prop,func){
      Object.defineProperty(obj, prop, { 'set': func });
    }
    
    this._privateStore.prototype._defineGetter = function(obj,prop,func){
      Object.defineProperty(obj, prop, { 'get': func });
    }
    
    this._privateStore.prototype._defineMethod = function(obj,protoMethod){
         switch (protoMethod.type) {
            case 'set':
               this._defineSetter(obj,protoMethod.name,protoMethod.func)
                break;
                
             case 'get':
               this._defineGetter(obj,protoMethod.name,protoMethod.func)
                break;
            
            default:
             this._defineProp(obj,protoMethod.name,protoMethod.func)       
        }
    }
    
    if (typeof arguments[0] === 'object'){
        return  new this._privateStore(arguments[0],arguments[1])
    }
}

/**
 *  @name {NFactory}
 *  @description {NFactory functionality}
 *  @extend {AbstractFactory}
 *  @module {Factory}
 */
function NFactory(JSONObj){
   this.store = AbstractFactory.call(this,JSONObj,this.getMethods());
}
NFactory.prototype = new AbstractFactory();
NFactory.prototype.constructor = NFactory;

NFactory.prototype.createNewObjArray = function (count) { 
    if (!count || count<0)
        return
        
    count = count>100?100:count;
    
    this.collection = [];
    
    for (var i=count;i>0;i--){
            this.collection.push(this.createNewObj());
    }
    
    console.log('fullstack '+this.collection.length,this.collection);
    console.log('before',this.collection[0]);
    console.log('Object getter',this.collection[0].getDimensions);
    console.log('Object setter',this.collection[0].setPowerSaveMode = "off");
    console.log('after',this.collection[0]);
};

NFactory.prototype.createNewObj = function () { 
    return Object.create(this.store.blueprint); 
};
NFactory.prototype.getMethods = function () {
    return [{ 
            type:"function", 
            func: function(){ return 'beep' },
            name:'call'
        },{ 
            type:"function", 
            func:function(){  return 'squack' },
            name:'takePhoto'
        },{ 
            type:"get", 
            func:function(){ return this.width+"X"+this.height; },
            name:'getDimensions'
        },{ 
            type:"set", 
            func: function(str){  this.screen = str; return this.power  = str; },
            name:'setPowerSaveMode'
        }];
}