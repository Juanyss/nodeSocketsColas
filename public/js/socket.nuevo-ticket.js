var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor - Bienvenido');
});

socket.on('disconnect', function() {
    console.log('Desonectado del servidor - Adios');
});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket)
    });

});