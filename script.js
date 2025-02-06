document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create a user object
    const user = {
        name: name,
        email: email,
        password: password
    };

    // Use AJAX to POST data (simulated via local storage)
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to data.html to show list of users
    window.location.href = 'data.html';
});
