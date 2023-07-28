$(function() {
    $('form').submit(function(event) {
      event.preventDefault();
  
      const name = $('#name').val();
      const email = $('#email').val();
      const password = $('#password').val();
  
      if (!isValidName(name)) {
        alert('Please enter a valid name');
        return;
      }
  
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
      }
  
      $.ajax({
        type: 'POST',
        url: '/login',
        data: { name, email, password },
        success: function(data) {
          console.log(data);
        },
        error: function(error) {
          console.error(error);
        }
      });
    });
  });
  
  function isValidName(name) {
    // Name should only contain alphabets and spaces
    const regex = /^[a-zA-Z ]+$/;
    return regex.test(name);
  }
  
  function isValidEmail(email) {
    // Email should have a valid format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }