document.querySelector('#toggle-pricing').addEventListener('click', function() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        const priceElement = card.querySelector('.price');
        if (priceElement.innerHTML.includes('/month')) {
            priceElement.innerHTML = priceElement.innerHTML.replace('/month', '/year');
        } else {
            priceElement.innerHTML = priceElement.innerHTML.replace('/year', '/month');
        }
    });
});
