document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('form');
  form.addEventListener('submit', function (event) {
    var name = document.getElementById('name').value;
    var tel = document.getElementById('tel').value;
    var email = document.getElementById('email').value;

    var fullNameRegex = /^[A-Za-z\s']{3,}$/;
    var emailRegex = /^\S+@\S+.\S+$/;
    var telRegex = /^\d{10}$/;

    if (!fullNameRegex.test(name)) {
      alert("Please enter a valid full name (minimum 3 characters).");
      event.preventDefault();
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
      return;
    }

    if (!telRegex.test(tel)) {
      alert("Please enter a valid phone number.");
      event.preventDefault();
      return;
    }
  });
});