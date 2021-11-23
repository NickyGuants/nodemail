const content = require('../helpers/content')

const message = {
    from: {
        name: 'Guantai',
        address: 'gnmutembei99@gmail.com'
    },
    to: 'mustafa.mohamed.m@outlook.com',
    subject: "CALENDAR INVITATION",
    text: "We hereby invite you to the above mentioned meeting.",
    icalEvent: {
        content: content
    },
    html: `
    <head> 
    <body>
    <div class="email">
        <h4 style="color: blue; text-align:center;font-size: 35px">Calendar Invitation</h4>
        <p style="color: green;;">We are delighted to invite you to the above mentioned meeting to discuss the agenda in question.</p>
        <p>Come prepared to eat, drink and sleep. </p>
    </div>
    </body>
    `,
}
module.exports = message;