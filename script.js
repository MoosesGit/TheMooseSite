// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent default form submission

  const form = event.target; // The form element
  const formData = new FormData(form); // Collect form data

  // Send form data to Formspree
  try {
    const response = await fetch("https://formspree.io/f/xgvoerpn", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (response.ok) {
      // On successful submission, transition out the form
      form.classList.add("hidden"); // Add a CSS class for fade-out effect

      // Wait for the fade-out animation to finish, then hide the form and show the message
      setTimeout(() => {
        form.style.display = "none"; // Hide the form completely
        document.getElementById("thankYouMessage").style.display = "block"; // Show the thank-you message
      }, 500); // Match the CSS transition duration (0.5s)
    } else {
      // Handle unsuccessful form submission
      alert("Oops! Something went wrong. Please try again.");
    }
  } catch (error) {
    // Handle network or other errors
    alert("Network error. Please try again later.");
  }
});

// Smooth Scrolling for Internal Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');

    // Only prevent default for internal links (starting with #)
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Close sidebar if applicable
        const sidebarCheckbox = document.getElementById('sidebar-active');
        if (sidebarCheckbox?.checked) {
          sidebarCheckbox.checked = false;
        }
      }
    }
  });
});


