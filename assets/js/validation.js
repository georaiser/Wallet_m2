
function validateForm(event) {
    event.preventDefault(); // Prevent default form submission
    // Retrieve the values from the input fields
    const username = document.getElementById('inputUsername').value;
    const password = document.getElementById('inputPassword').value;
  
    // Simple validation example (you can replace this with your own logic)
    if (username === 'jorge.survey@gmail.com' && password === '123') {
      // Redirect to another HTML page (replace 'target.html' with your target page)
      window.location.href = 'assets/html/transactions_main.html';
    } else {
      // Display an error message or handle the invalid login
      alert('Invalid username or password. Please try again.');
    }
  }

  