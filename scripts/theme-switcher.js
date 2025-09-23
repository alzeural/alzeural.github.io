// Theme switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;
    
    // Check for saved theme preference or default to dark
    const currentTheme = localStorage.getItem('theme') || 'dark-theme';
    body.className = currentTheme;
    updateButtonText(currentTheme);
    
    // Toggle theme on button click
    themeSwitcher.addEventListener('click', function() {
        if (body.classList.contains('dark-theme')) {
            body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
        updateButtonText(body.className);
    });
    
    function updateButtonText(theme) {
        themeSwitcher.textContent = theme === 'dark-theme' ? 'Light Mode' : 'Dark Mode';
    }
});
