document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.createElement('div');
    const navList = document.querySelector('.nav-list');
    const middleSection = document.querySelector('.middle');

    // Responsive Navigation Bar Toggle
    toggleButton.classList.add('toggle-button');
    toggleButton.innerHTML = '&#9776;';
    document.querySelector('.navbar').appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Smooth Scrolling for Internal Links
    const smoothScroll = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    };

    smoothScroll();

    // Responsive Design Adjustments
    const resizeHandler = () => {
        if (window.innerWidth <= 768) {
            middleSection.style.display = 'none';
        } else {
            middleSection.style.display = 'block';
        }
    };

    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    // Dark Mode Toggle
    const toggleModeButton = document.createElement('button');
    toggleModeButton.classList.add('toggle-mode');
    toggleModeButton.textContent = 'Toggle Dark Mode';
    document.body.appendChild(toggleModeButton);

    toggleModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Inject Dark Mode Styles
    const style = document.createElement('style');
    style.textContent = `
        .dark-mode {
            background-color: #121212;
            color: white;
        }
        .dark-mode .navbar {
            background-color: #1f1f1f;
        }
        .dark-mode a {
            color: #bb86fc;
        }
        .dark-mode .toggle-mode {
            background-color: #bb86fc;
            color: #121212;
            border: none;
            padding: 10px;
            cursor: pointer;
            position: fixed;
            bottom: 10px;
            right: 10px;
        }
        .dark-mode .toggle-mode:hover {
            background-color: #3700b3;
        }
    `;
    document.head.appendChild(style);
});
