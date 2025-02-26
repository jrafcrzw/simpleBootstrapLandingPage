document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Update button text/icon
    const themeToggle = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '🌞'; // Sun icon for light mode
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '🌙'; // Moon icon for dark mode
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved user preference on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-toggle').innerHTML = '🌞'; // Set icon to sun
}