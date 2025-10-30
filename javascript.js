function sendEmail(){
    const templateParams = {
        name:document.querySelector("#name").value,
         email:document.querySelector("#email").value, 
         message:document.querySelector("#message").value,
         
    };
   emailjs.send("service_yilapel", "template_fx6da5u", templateParams)
   .then(()=> alert("Email sent!!").catch(()=> alert("Email not sent!!")));
}
    // Bootstrap validation script
    (() => {
      'use strict';
      const form = document.getElementById('contactForm');

      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault(); // Prevent default form submission for demo
          alert('Thank you! Your message has been sent successfully.');
          form.reset();
          form.classList.remove('was-validated');
        }

        form.classList.add('was-validated');
      });
    })();