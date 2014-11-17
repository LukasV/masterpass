(function ($) {
    $( document ).ready(function() {
        console.log($("html").html())
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
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
/*        var element = document.getElementById('base');
        element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                            'Device Cordova: '  + device.cordova  + '<br />' +
                            'Device Platform: ' + device.platform + '<br />' +
                            'Device UUID: '     + device.uuid     + '<br />' +
                            'Device Version: '  + device.version  + '<br />';
        var btstatus = document.getElementById('status');
        btstatus.innerHTML = "Getting bluetooth information";
        window.bluetooth.isEnabled(isEnabledSuccess, isEnabledError);*/
        console.log($("html").html())
        var bluetoothSerial = bluetoothSerial || null;
        if(bluetoothSerial){
            $("#base").append("<p>Bluetooth ready!</p>");
        } else {
            $("#base").append("<p>Bluetooth unavailable!</p>");
        }
    }

}(jQuery));