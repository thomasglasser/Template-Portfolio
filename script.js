document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    function toggleTheme() {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = '☀️'; // TODO: change to better sun emoji
        }
        else {
            themeToggle.textContent = '🌙';
        }
    }

    themeToggle.addEventListener('click', toggleTheme);
});
