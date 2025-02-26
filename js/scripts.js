// Initialize tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// Dark mode toggle logic
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Update button icon and tooltip text
    const themeToggle = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '🌞';
        themeToggle.setAttribute('title', 'Switch to Light Mode');
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '🌙';
        themeToggle.setAttribute('title', 'Switch to Dark Mode');
        localStorage.setItem('theme', 'light');
    }

    // Update the tooltip instance
    const tooltip = bootstrap.Tooltip.getInstance(themeToggle);
    tooltip.setContent({ '.tooltip-inner': themeToggle.getAttribute('title') });
});