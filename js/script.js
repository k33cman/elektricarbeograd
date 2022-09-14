function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "lukakecman377@gmail.com",
        Password : "Srbija2008",
        To : 'flumeflame@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name:" + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone no: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("USKORO")
    );
}


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
