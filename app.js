
        // Get all accordion section titles
        var titles = document.querySelectorAll('.accordion-section-title');

        // Add an event listener to each title
        titles.forEach(function (title) {
            title.addEventListener('click', function () {
                // Toggle the "active" class on the title and corresponding content
                this.classList.toggle('active');
                var content = this.nextElementSibling;
                content.classList.toggle('active');
            });
        });

// Define the message
var message = "This feature will be available soon!";

// Attach a click event listener to the first link
document.getElementById("link1").addEventListener("click", function() {
  // Display the message
  alert("This feature will be available soon!");
});

// Attach a click event listener to the second link
document.getElementById("link2").addEventListener("click", function() {
  // Display the message
  alert("This feature will be available soon!");
});
document.getElementById("link3").addEventListener("click", function() {
  // Display the message
  alert("This feature will be available soon!");
});
document.getElementById("link4").addEventListener("click", function() {
  // Display the message
  alert("This feature will be available soon!");
});

// Define a function to display the message
function displayMessage(message) {
  // Add a class to the message element
  document.getElementById("message").classList.add("message-style");
  // Set the inner HTML of the message element
  document.getElementById("message").innerHTML = message;
}

const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) { // Show back to top button if user scrolls down 300px
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function myFunction(x) {
    x.classList.toggle("change");
  }

