# Giffer

## dependencies 
1. redis
2. redis client 

## How to start server
start app with
    node server.js <port>


## What is this thing

Basically this is a utility that will serve up a gif file so you can call any
uri on this and it will send you a pixel gif. Then you can drop in plugins
that implement exports['hook'] and in there you will have access to the
request where you can do all the parsing you want for that pixel request. 

### example

filename: plugins/ab.js
      
    export['hook'] = function(entry) {
        console.log('look I have an entry', entry);
        // do something more useful
    }

## TODO
Provide a javascript utility that provides a nice javascript api to initiate
the tracking

