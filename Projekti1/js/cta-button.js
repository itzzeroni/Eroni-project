document.querySelectorAll('.cta-btn').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        alert('You clicked the button! Link would go to project page.');
    });
});