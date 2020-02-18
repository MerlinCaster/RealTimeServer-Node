var now = require('performance-now');
var _ = require('underscore');

module.exports = function() {

    //These objects will be added at runtime...
    //this.socket = {}
    //this.user = {}

    this.initiate = function() {
        var client = this;
        
        //Send the connection handshake packet to the client
        client.socket.write(packet.build(["HELLO", now().toString()]))

        console.log('client init');
    }

    this.data = function(data) {
        console.log("socket data " + data.toString());
    }

    this.error = function(err) {
        console.log("socket error " + err.toString());
    }

    this.end = function() {
        console.log("socket closed");
    }
}