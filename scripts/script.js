let myCard = document.getElementById('mainCard');
let myModal = document.getElementById('mainModal');
let myDismissBtn = document.getElementById('dismissBtn');

function validateForm() {
  var emailInput = document.getElementById('email').value;

  // Check if the email field is empty
  if (emailInput === '') {
    alert('Email address must be filled out');
    return false; // Prevent the form from submitting
  }

  // If all checks pass, show the modal
  myCard.style.opacity = '0';
  myModal.style.display = 'flex'; // Make the modal display as flex
  myModal.style.opacity = '1';
  return false; // Stop form submission since this is a test scenario
}

// Dismiss the modal
myDismissBtn.addEventListener('click', (e) => {
  myModal.style.opacity = '0';
  myModal.style.display = 'none'; // Hide the modal fully
  myCard.style.opacity = '1';
});

//-------- OLD VERSION -------
// no nee of loops ad formData
/* const form = document.getElementById('form');

function handleSubmit(e) {
  e.preventDefault();

  const data = {};
  const fields = e.target.querySelectorAll('input, select, textarea');

  for (const field of fields) {
    data[field.name] = field.value;
  }

  console.log(data);
}
 */
