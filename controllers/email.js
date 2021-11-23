const sendMail = require('../helpers/email')
const message = require('../helpers/message')

exports.sendEmail = async (req, res) => {
    try {
        await sendMail(message)
        res.send("Email sent")
    } catch (error) {
        console.log(error)
    }
}