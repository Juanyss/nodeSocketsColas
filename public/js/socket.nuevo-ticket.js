var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor - Bienvenido');
});

socket.on('disconnect', function() {
    console.log('Desonectado del servidor - Adios');
});

socket.on('estadoActual', function(resp) {
    label.text(resp.actual)
})

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket)
    });

});