const content = require('../helpers/content')

const message = {
    from: {
        name: 'Guantai',
        address: 'gnmutembei99@gmail.com'
    },
    to: 'nicholasguantai528@gmail.com',
    subject: "CALENDAR INVITATION",
    text: "We hereby invite you to the above mentioned meeting.",
    icalEvent: {
        content: content
    },
    html: `
    <head> 
    <body>
    <div class="email">
        <h4 style="color: blue; text-align:center;">Calendar Invitation</h4>
        <p>Allow us to take this early opportunity to invite you to the above mentioned meeting to discuss the agenda in question.</p>
        <br>
        <p></p>
    </div>
    </body>
    `,
}
module.exports = message;