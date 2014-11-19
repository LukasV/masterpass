(function ($) {
    $( document ).ready(function() {
        var bluetoothSerial = bluetoothSerial || null;
//        alert($("#base").html())
        if(bluetoothSerial){
            $("#base").append("<p>Bluetooth ready!</p>");
//            alert("Bluetooth ready!");
        } else {
            $("#base").append("<p>Bluetooth unavailable!</p>");
//            alert("Bluetooth unavailable!");
        }
    });
/*    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
//        var element = document.getElementById('base');
//        element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
//                            'Device Cordova: '  + device.cordova  + '<br />' +
//                            'Device Platform: ' + device.platform + '<br />' +
//                            'Device UUID: '     + device.uuid     + '<br />' +
//                            'Device Version: '  + device.version  + '<br />';
//        var btstatus = document.getElementById('status');
//        btstatus.innerHTML = "Getting bluetooth information";
//        window.bluetooth.isEnabled(isEnabledSuccess, isEnabledError);
        alert("Device Ready!")
//        console.log($("html").html())
        var bluetoothSerial = bluetoothSerial || null;
        if(bluetoothSerial){
            $("#base").append("<p>Device ready<br>Bluetooth ready!</p>");
        } else {
            $("#base").append("<p>Device ready<br>Bluetooth unavailable!</p>");
        }
    }*/
    var macAddress = "00:13:EF:00:08:8B";
    var app = {
        initialize: function() {
        this.bindEvents();
        },
        bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        },
        onDeviceReady: function() {
        bluetoothSerial.connect(macAddress, app.onConnect, app.onDisconnect);
        },
        onConnect: function() {
        bluetoothSerial.subscribe("\n", app.onMessage, app.subscribeFailed);
        statusDiv.innerHTML="Connected to " + macAddress + ".";
        },
        onDisconnect: function() {
        alert("Disconnected");
        statusDiv.innerHTML="Disconnected.";
        },
        onMessage: function(data) {
        counter.innerHTML = data;
        },
        subscribeFailed: function() {
        alert("subscribe failed");
        }
    };

}(jQuery));