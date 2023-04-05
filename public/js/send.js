const sendHandler = async (event) => {
    event.preventDefault();
  
    // // Collect values from the login form
    // const email = document.querySelector('#email-login').value.trim();
    // const password = document.querySelector('#password-login').value.trim();
  
    // if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/books/send', {
        method: 'POST',
        body: JSON.stringify({text: '' }),
        headers: { 'Content-Type': 'application/json' },
        });

    if (response.ok) {
        // If successful, redirect the browser to the profile page
        // document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    // }
  };
  document
    .querySelector('.rent-form')
    .addEventListener('submit', sendHandler);
  