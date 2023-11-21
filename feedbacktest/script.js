function submitForm() {
    // Get form data
    var date = document.getElementById('date').value;
    var feedback = document.getElementById('feedback').value;

    // Validate form data (you can add more validation as needed)

    // Create a data object
    var formData = {
        date: date,
        feedback: feedback
    };

    // Send data to server
    fetch('submit_form.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Handle response from the server
        console.log(data);
        if (data.status === 'success') {
            // Show confirmation message
            document.getElementById('confirmationMessage').classList.remove('hidden');
            // Reset form
            document.getElementById('feedbackForm').reset();
        } else {
            alert('Failed to send feedback. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An unexpected error occurred. Please try again later.');
    });
}
