// Get the toggle button element
const toggleButton = document.getElementById('dark-mode-toggle');

// Check if dark mode is already enabled in localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Add an event listener to toggle dark mode
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Save the user's preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
