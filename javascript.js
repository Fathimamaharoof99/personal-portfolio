
document.addEventListener("DOMContentLoaded", function () {
  // Get form elements
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  // ✅ Initialize EmailJS safely
  if (typeof emailjs !== "undefined") {
    emailjs.init("9Da4412JZ7Vj8MXsU"); // your public key
  }

  // ✅ On form submit
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    // Hide old errors
    nameError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";

    // Validate Name
    if (nameInput.value.trim() === "") {
      nameError.style.display = "block";
      valid = false;
    }

    // Validate Email with correct regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.style.display = "block";
      valid = false;
    }

    // Validate Message
    if (messageInput.value.trim() === "") {
      messageError.style.display = "block";
      valid = false;
    }

    // ✅ If valid, send email
    if (valid) {
      const templateParams = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
      };

      emailjs
        .send("service_yilapel", "template_fx6da5u", templateParams)
        .then(
          function (response) {
            alert("✅ Email sent successfully!");
            form.reset();
          },
          function (error) {
            alert("❌ Failed to send email. Please try again later.");
            console.error("EmailJS error:", error);
          }
        );
    }
  });
});