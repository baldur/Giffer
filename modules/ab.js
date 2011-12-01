var redis = require('redis');
var client = redis.createClient();

exports['hook'] = function(entry) {
    var req = entry.request;
    if(req.query.exp == null) {
        return;
    }

    // take the name of the gif and create friendly name out of it
    // /pageload.gif becomes => pageload
    var event_type = req.pathname.substring(1, req.pathname.length - 4);
    var experiments = req.query.exp.split(/(\w\w\d)/).filter(function(exp) {
        if(exp){
            client.hincrby('ab:experiments', event_type + "|" + exp, 1);
            return true
        }
    });
};

