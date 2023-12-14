function getQueryParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', function() {
    // Function to extract query parameter from URL
    function getQueryParam(param) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get(param);
    }

    const quantity = getQueryParam('quantity');
    console.log('Quantity:', quantity);

    const totalXP = quantity * 100; // Calculate total XP
    const totalPrice = quantity * 1; // Calculate total price ($1 per quantity)

    const message = `You are about to purchase ${quantity} of 100xp, totaling $${totalPrice}`;
    const messageElement = document.createElement('p');
    messageElement.textContent = message;

    const checkoutForm = document.getElementById('checkoutForm');
    checkoutForm.insertAdjacentElement('afterend', messageElement);
});
