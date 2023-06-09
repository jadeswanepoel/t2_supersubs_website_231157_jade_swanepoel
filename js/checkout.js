// Function to handle form submission
function placeOrder(event) {
    event.preventDefault();
  
    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const sandwich = document.getElementById('sandwich').value;
  
    // Perform validation (e.g., check if all fields are filled)
    if (name && email && sandwich) {
      // Perform further processing (e.g., send data to server)
      alert('Order placed successfully!');
      document.getElementById('checkoutForm').reset();
    } else {
      alert('Please fill in all fields.');
    }
  }
  
  // Add event listener to the form
  const form = document.getElementById('checkoutForm');
  form.addEventListener('submit', placeOrder);