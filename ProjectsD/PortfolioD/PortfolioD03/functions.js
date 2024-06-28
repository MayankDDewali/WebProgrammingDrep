/*                                                 For Navigating between sections                                                 */
window.onload = function() {
    // By default, scroll to the Home page on page load
    document.getElementById('HomePage').scrollIntoView({behavior: "smooth"});

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

const Hov = document.querySelectorAll('nav ul li a');

Hov.forEach(link => {
    link.addEventListener('mouseover', function(){

        const hovtext = link.textContent;

        const gifname = hovtext + 'Hover.gif';

        console.log(gifname)

        displayGIF(gifname);
    });

    link.addEventListener('mouseout', function() {
        hideGIF();
    });
})

function displayGIF(gifname){

    const ImgDiv = document.getElementById('HovImg');
    ImgDiv.src = gifname; 
}

function hideGIF(){

    const ImgDiv = document.getElementById('HovImg')
    ImgDiv.src = ''
}