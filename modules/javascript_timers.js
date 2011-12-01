var redis = require('redis');
var client = redis.createClient();

exports['hook'] = function(entry, headers) {
    var req = entry.request;
    msg = {
        query: req.query,
        path: req.pathname,
        headers: headers
    };
    client.publish('javascript:timers', JSON.stringify(msg));
};

