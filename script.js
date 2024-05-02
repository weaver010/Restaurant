window.onload = function() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('location').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('order').style.display = 'none';
}

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

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your order has been submitted!');
});
