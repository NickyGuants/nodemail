const ical = require('ical-generator')
const moment = require('moment')

const sourceEmail = 'gnmutembei99@gmail.com';
const eventStart = moment('11-23-2021 11:40 PM', 'MM-DD-YYYY hh:mm A');
const eventStop = eventStart.add(1, 'hour');

const content = ical({
    domain: 'google.com',
    method: 'REQUEST',
    prodId: '//Google Inc//Google Calendar 70.9054//EN',
    events: [{
        start: eventStart,
        status: 'CONFIRMED',
        end: eventStop,
        summary: 'Nodemailer',
        transparency: 'OPAQUE',
        organizer: {
            name: 'Guantai Nicholas',
            email: sourceEmail,
            mailto: sourceEmail,
        },
        location: 'Boardroom',
        attendees: [{
                email: 'nick@gmail.com',
                name: 'Nick',
                status: 'ACCEPTED',
                rsvp: true,
                type: 'INDIVIDUAL',
                role: 'REQ-PARTICIPANT'
            },
            {
                email: 'james@gmail.com',
                name: 'James Dean',
                status: 'NEEDS-ACTION',
                type: 'INDIVIDUAL',
                role: 'REQ-PARTICIPANT'
            },

        ]
    }]
}).toString();

module.exports = content;