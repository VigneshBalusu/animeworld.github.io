// Video handling
const backgroundVideo = document.getElementById('backgroundVideo');
const playButton = document.getElementById('playButton');

// Show the play button on load
window.addEventListener('load', () => {
    playButton.style.display = 'block';
});

// Play video with sound and hide play button after user interaction
playButton.addEventListener('click', () => {
    backgroundVideo.muted = false;
    backgroundVideo.play().then(() => {
        playButton.style.display = 'none';
    }).catch(error => {
        console.error('Error playing video:', error);
    });
});

// Add error handling for the video
backgroundVideo.addEventListener('error', (error) => {
    console.error('Video error:', error);
});

// Sample user data for demonstration purposes
const users = [];

// Function to simulate signup
function signup(email, password) {
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert('User already exists');
    } else {
        users.push({ email, password });
        alert('Signup successful');
    }
}

// Function to simulate login
function login(email, password) {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert('Login successful');
    } else {
        alert('User not found');
    }
}

// Get the modal elements
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeLogin = document.getElementById('closeLogin');
const closeSignup = document.getElementById('closeSignup');

// Open the login modal
document.getElementById('loginButton').addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Open the signup modal
document.getElementById('signupButton').addEventListener('click', () => {
    signupModal.style.display = 'block';
});

// Close the login modal
closeLogin.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close the signup modal
closeSignup.addEventListener('click', () => {
    signupModal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

// Handle login submit button click
document.getElementById('loginSubmit').addEventListener('click', () => {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    login(email, password);
    loginModal.style.display = 'none';
});

// Handle signup submit button click
document.getElementById('signupSubmit').addEventListener('click', () => {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    signup(email, password);
    signupModal.style.display = 'none';
});
