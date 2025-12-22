const scriptURL = "https://script.google.com/macros/s/AKfycbxaV9h1Se1jKC5hmLgAx65AzZ7Nw33YVbyZ-ABQIawZ7zi0kzLHdAQIT6-yrr8sfgwIIA/exec";
const form = document.getElementById("contactForm");

form.addEventListener("submit", e => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    alert("Message sent successfully!");
    form.reset();
  })
  .catch(error => {
    alert("Error sending message");
    console.error(error);
  });
});
