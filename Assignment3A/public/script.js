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

    // Use local storage to save user data
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if the user already exists
    const userExists = users.some(existingUser => existingUser.email === email);
    if (userExists) {
        alert("User with this email already exists!");
        return;
    }

    // Add user to users list and save to localStorage
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to the user list page (data.html) to show the registered users
    window.location.href = 'index.html';
});
