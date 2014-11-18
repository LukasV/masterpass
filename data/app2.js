//var macAddress = "00:13:EF:00:08:8B";
var macAddress = "E0.63:E5:9E:5E:26";
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
        $("#statusDiv").html("<p>Device Ready</p>");
//        alert("onDeviceReady")
        $("#statusDiv").append("<p>"+bluetoothSerial+"</p>");
		bluetoothSerial.connect(macAddress, app.onConnect, app.onDisconnect);
	},
	doConnect: function() {
        $("#statusDiv").html("<p>Trying to connect...</p>");
		bluetoothSerial.connect(macAddress, app.onConnect, app.onDisconnect);
	},
	onConnect: function() {
		bluetoothSerial.subscribe("\n", app.onMessage, app.subscribeFailed);
		$("#statusDiv").append("Connected to " + macAddress + ".");
	},
	onDisconnect: function() {
//		alert("Disconnected");
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
