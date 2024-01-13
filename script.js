document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the values from the form fields
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Display the success message
  var successMessage = "Your information has been successfully filled. We will contact you soon.";
  alert(successMessage);

  // Reset the form fields
  document.getElementById("myForm").reset();
});