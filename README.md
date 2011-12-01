# Giffer

## dependencies 
1. redis
2. redis client 

## howto
start app with
    node server.js <port>

if you want to track things place a file in the modules directory and implement exports['hook'] which gets called with the request and you can manipulate it

## example 
filename: plugins/ab.js
      
    export['hook'] = function(entry) {
        console.log('look I have an entry', entry);
        // do something more useful
    }

