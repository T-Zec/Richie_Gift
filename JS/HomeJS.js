let slideIndex = 1;

// Function to show slides
function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slides[slideIndex-1].style.display = 'block';  
}

// Function to navigate to previous or next slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Initial call to show first slide
showSlides(slideIndex);
