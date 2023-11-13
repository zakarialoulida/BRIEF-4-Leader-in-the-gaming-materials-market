const faq = document.querySelectorAll("h4");

faq.forEach((faq) => {
  faq.addEventListener('click', () => {
    const answer = faq.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  })
})


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const dataFaq = item.querySelector("h4").getAttribute("data-faq");
    const answer = document.querySelector(`.faq-item[data-faq="${dataFaq}"] [data-answer="${dataFaq}"]`);

    if (answer.classList.contains("hidden")) {
      answer.classList.remove("hidden");
      answer.style.paddingTop = "10px"; // Adjust padding as needed
    } else {
      answer.classList.add("hidden");
      answer.style.paddingTop = "0";
    }
  });
});



document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('form');
  var nameValue = document.getElementById('nameValue');
  var emailValue = document.getElementById('emailValue');
  var telValue = document.getElementById('telValue');
  var confirmationMessage = document.getElementById('confirmationMessage');

  form.addEventListener('submit', function (event) {
    var name = document.getElementById('name').value;
    var tel = document.getElementById('tel').value;
    var email = document.getElementById('email').value;

    var fullNameRegex = /^[A-Za-z\s']{3,}$/;
    var emailRegex = /^\S+@\S+\.\S+$/;
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
      alert("Please enter a valid phone number (starts with +212 and followed by 9 digits).");
      event.preventDefault();
      return;
    }



    nameValue.textContent = name;
    emailValue.textContent = email;
    telValue.textContent = tel;

    confirmationMessage.classList.remove('hidden');
    form.classList.add('hidden');

    event.preventDefault();
  });
});