let titleText = "Sam Otten | Resume";
let titleIndex = 0;
let currentTitle = "";
let isTyping = true;
let delay = 100; // Initial typing delay

function updateTitle() {
  if (isTyping) {
    if (titleIndex <= titleText.length) {
      currentTitle = titleText.substring(0, titleIndex);
      document.title = currentTitle;
      titleIndex++;
      setTimeout(updateTitle, delay);
    } else {
      isTyping = false;
      delay = 20; // Quicker backspacing
      setTimeout(updateTitle, 1000); // Pause before backspacing
    }
  } else {
    if (titleIndex > 1) { // Stop at one letter
      currentTitle = titleText.substring(0, titleIndex);
      document.title = currentTitle;
      titleIndex--;
      setTimeout(updateTitle, delay);
    } else {
      isTyping = true;
      delay = 100; // Reset typing delay
      setTimeout(updateTitle, 500); // Pause before re-typing
    }
  }
}

updateTitle();
// myscripts.js
// ... (rest of your existing code) ...

// Function to send contact data to the server
function sendContactData(data, form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;

    fetch('submit_contact.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            // Handle HTTP errors
            response.text().then(text => {
                alert('HTTP Error: ' + response.status + '\nResponse: ' + text);
            });
            throw new Error('Network response was not ok.');
        }
    })
    .then(responseData => {
        // Handle successful response
        form.reset();
        submitBtn.innerHTML = 'Message Sent!';
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    })
    .catch(error => {
        // Handle fetch errors
        alert('Fetch Error: ' + error.message);
        submitBtn.innerHTML = 'Error Sending!';
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}
