//var macAddress = "00:13:EF:00:08:8B"; // Nevim
//var macAddress = "8C:3A:E3:6C:32:31"; // Ja
var macAddress = "E0:63:E5:9E:5E:26"; // Lin - almost working! (it thinks for a while)
//var macAddress = "20:54:76:9C:9A:64"; // Lin BT
//var macAddress = "40:0E:85:56:CF:FC"; // Burt
//var macAddress = "34:51:C9:39:D9:43"; // Standovo iPad
//var macAddress = "2c1fe0f635c3a96f38324794a8959d8f2ba4df14"; // Standovo iPad


var app = {
    initialize: function() {
//        alert("initialize")
        this.bindEvents();
    },
    bindEvents: function() {
//        alert("bindEvents")
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        $("#statusDiv").html("<p>Device ready</p>");
        $("#statusDiv").append("<p> "+bluetoothSerial+"</p>");
        bluetoothSerial.connect(macAddress, app.onConnect, app.onDisconnect);
//        bluetoothSerial.connectInsecure(macAddress, app.onConnect, app.onDisconnect);
    },
    doConnect: function() {
        $("#statusDiv").html("<p>Trying to connect...</p>");
        bluetoothSerial.connect(macAddress, app.onConnect, app.onDisconnect);
    },
    onConnect: function() {
        $("#statusDiv").append("Connected!");
        $("#statusDiv").append("Connected to " + macAddress + ".");
        bluetoothSerial.subscribe("\n", app.onMessage, app.subscribeFailed);
    },
    onDisconnect: function() {
//      alert("Disconnected");
        $("#statusDiv").append("Disconnected.");
    },
    onMessage: function(data) {
        counter.innerHTML = data;
    },
    subscribeFailed: function() {
        alert("subscribe failed");
    }
};

$( document ).ready(function() {
    $("#connect").click(app.doConnect);
});
