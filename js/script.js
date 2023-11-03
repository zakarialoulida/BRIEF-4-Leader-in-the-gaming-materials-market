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

})

