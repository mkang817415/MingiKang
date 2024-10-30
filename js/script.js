require('dotenv').config();

EMAIL_ADDRESS = process.env.EMAIL_ADDRESS
EMAIL_PASSWORD = process.env.EMAIL_PASSWORD



function sendMessage(Name, Email, Message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: EMAIL_ADDRESS,
        Password: EMAIL_PASSWORD,
        To: EMAIL_ADDRESS,
        From: EMAIL_ADDRESS,
        Subject: "New Message from Portfolio",
        Body: "Name: " + Name + "<br> Email: " + Email + "<br> Message: " + Message
    }).then(
        message => alert("Message Sent Successfully")
    ).catch(
        error => alert(error)
    )
}

function game(){
    
}