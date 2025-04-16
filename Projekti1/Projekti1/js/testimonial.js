let index = 0;
const testimonials = document.querySelectorAll('.testimonial-item');

function showNextTestimonial() {
    testimonials[index].style.opacity = 0;
    testimonials[index].style.transform = 'translateX(100%)';
    
    index = (index + 1) % testimonials.length;
    
    testimonials[index].style.opacity = 1;
    testimonials[index].style.transform = 'translateX(0)';
}

setInterval(showNextTestimonial, 3000); 
