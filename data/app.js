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
}(jQuery));