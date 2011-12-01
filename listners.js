var events = require('events'), 
      util = require('util'),
        fs = require('fs');

Eventer = function(){
    events.EventEmitter.call(this);
    this.record = function(request, headers){
      var info = {"request": request, "headers": headers}
      this.emit("record", info);
    }
};

util.inherits(Eventer, events.EventEmitter);

var eventer = new Eventer();

exports.run = function(){
    return {
        'add' : function(){
             var modules = fs.readdirSync('./plugins');
             modules.forEach(function(mod) {
                 eventer.on('record', function(entry) {
                     setTimeout(function(){
                         require("./plugins/"+mod).hook(entry);
                     }, 10);
                 });
             });
        },
        'eventer' : function(){
            return eventer;
        }
    };
}

