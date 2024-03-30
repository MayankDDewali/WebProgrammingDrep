window.onload = function() {
    // By default, scroll to the Home page on page load
    document.getElementById('HomePage').scrollIntoView();

    // Get all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    // Add click event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent the default behavior of the anchor tag
            event.preventDefault();
            
            // Get the ID of the section to navigate to
            const sectionId = link.getAttribute('href').substring(1);
            
            // Scroll to the corresponding section
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });
};
