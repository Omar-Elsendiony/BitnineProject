const form = document.getElementsByTagName('form')
console.log(form)

window.addEventListener("DOMContentLoaded", (event) => {
  form[0].addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("tktykjr")
    console.log("tktykjr")
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    
    console.log(email)
    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => console.log(data))
  });

});