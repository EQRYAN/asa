 // Simulate a 4-second loading time
 setTimeout(function() {
    // Fade out the loader
    var loader = document.getElementById("loader");
    loader.style.opacity = 0;

    // Enable the scrollbar
    document.body.style.overflow = "visible";
    document.body.style.overflowX = "Hidden";

    // Show the website content
    document.getElementById("content").style.display = "block";

    // Remove the loader from the DOM after the animation
    setTimeout(function() {
        loader.style.display = "none";
    }, 400);
}, 4000);

function revealOnScroll() {
    const elementsToReveal = document.querySelectorAll('.hidden-element');
    
    elementsToReveal.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
// Initial call in case elements are already in the viewport when the page loads.
revealOnScroll();