const { io } = require('../server');

const { TicketControl } = require('../classes/ticket-control')

const ticketControl = new TicketControl();

io.on('connection', (client) => {

    console.log('Usuario conectado');


    client.on('siguienteTicket', (data, callback) => {
        let siguiente = ticketControl.siguienteTicket();
        console.log(`El siguiente ticket es el ${siguiente}`);
        callback(siguiente);
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.emit('estadoActual', { actual: ticketControl.getUltimoTicket() })

    client.on('atenderTicket', (data, callback) => {
        if (!data.escritorio) {
            return callback({
                err: true,
                message: 'El escritorio es necesario'
            })
        }

        let atenderTicket = ticketControl.atenderTicket(data.escritorio);

        callback(atenderTicket)
    })
});