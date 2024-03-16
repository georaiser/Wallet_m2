function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm() {
    // Get the values from the input fields
    const name = document.getElementById('inputName').value.trim();
    const email = document.getElementById('inputEmail').value.trim();
    const phone = document.getElementById('inputPhone').value.trim();

    // Check if any field is empty
    if (name === '' || email === '' || phone === '') {
        alert('Please fill in all fields.');
        return; // Stop further execution
    }

    // Check if email is valid
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return; // Stop further execution
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);

    // Create a unique key for the contact using the current timestamp
    const contactKey = `contact_${Date.now()}`;

    // Create an object to store the contact details
    const contact = {
        name: name,
        email: email,
        phone: phone
    };

    // Convert the contact object to a JSON string
    const contactJSON = JSON.stringify(contact);

    // Save the contact in local storage with the unique key
    localStorage.setItem(contactKey, contactJSON);

    alert('Contact saved successfully.');

    // Clear the form fields after saving the contact
    document.getElementById('inputName').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputPhone').value = '';
}
