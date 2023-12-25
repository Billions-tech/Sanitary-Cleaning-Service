const form = document.getElementById("contact-form"); // Replace 'contact-form' with your form ID
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Your EmailJS User ID
  const userID = "7wFvlljq89OycMcjw";

  // Send the email
  emailjs.sendForm("service_ywbwv1e", "template_t2q8grg", this, userID).then(
    function (response) {
      console.log("Email sent:", response);
      alert("Form submitted successfully!"); // Show a success message
      form.reset(); // Optionally reset the form after successful submission
    },
    function (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again."); // Show an error message
    }
  );
});
