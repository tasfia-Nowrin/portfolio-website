const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  fetch("https://script.google.com/macros/s/AKfycby32rIASSfYGoR2LUv33-C5gtzEN0SEcJi2Ioa60Y9peK8LiJiXYI4knkKqswYZDDmazQ/exec", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: email,
      message: message
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.text())
  .then(data => {
    alert("Message sent successfully!");
    form.reset();
  })
  .catch(err => {
    alert("Error sending message");
    console.error(err);
  });
});
