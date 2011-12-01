var redis = require('redis');
var client = redis.createClient();

exports['hook'] = function(entry) {
    msg = {
        request: entry.request,
        headers: entry.headers
    };
    client.publish('eventstream', JSON.stringify(msg));
};

