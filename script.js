// Function to hide all sections on page load
window.onload = function() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('location').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('order').style.display = 'none';
}

// Function to show a specific section and hide others
function showSection(id) {
    var sections = ['menu', 'location', 'contact', 'order'];
    for (var i = 0; i < sections.length; i++) {
        if (sections[i] == id) {
            document.getElementById(sections[i]).style.display = 'block';
        } else {
            document.getElementById(sections[i]).style.display = 'none';
        }
    }
}

// Event listener for the order form submission
document.getElementById('orderForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();
    // Show an alert indicating the order has been submitted
    alert('Your order has been submitted!');
});
