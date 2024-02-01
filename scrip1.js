const form=document.querySelector("form");
const fullname=document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const subject=document.getElementById("subject");
const mess=document.getElementById("message");
function sendEmail(){
    const bodyMessage=`Full Name:${fullname.value}<br> Email:${email.value}
    <br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;
    Email.send({
       SecureToken:'6ea09ca1-cbbd-4e3c-a7b5-6ceb9a6861c8',
        To : 'bharathsenthil34@gmail.com',
        From : "bharathsenthil34@gmail.com",
        Subject : "This is the subject",
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sendEmail();
});