const toggleButton = document.getElementById('theme-toggle');
const html = document.documentElement;
toggleButton.addEventListener('click', () => {
    const newTheme = html.dataset.theme === 'light' ? 'dark' : 'light';
    html.dataset.theme = newTheme;
    toggleButton.textContent = newTheme === 'light' ? '🌙' : '☀️';
    localStorage.setItem('theme', newTheme);
});
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.dataset.theme = savedTheme;
    toggleButton.textContent = savedTheme === 'light' ? '🌙' : '☀️';
}
