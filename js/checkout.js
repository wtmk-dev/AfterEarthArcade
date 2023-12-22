function getQueryParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

function onclick_purchase(quantity) {
    const checkoutForm = document.getElementById('checkoutForm');
    checkoutForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Fetch POST request to your endpoint or URL
        fetch('https://aea-cmd-d3d2a4510890.herokuapp.com/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // Add any additional headers if required
            },
            body: JSON.stringify({
                quantity: quantity // Sending the quantity in the request body
                // You can add more data if needed
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to place the order.');
            }
            return response.json();
        })
        .then(data => {
            // Handle success response
            console.log('Order placed:', data);
            // Add any UI updates or actions after a successful order placement
        })
        .catch(error => {
            // Handle error
            console.error('Order placement failed:', error);
            // Add error handling or display error messages to the user
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const quantity = getQueryParam('quantity');
    console.log('Quantity:', quantity);

    const totalXP = quantity * 100; // Calculate total XP
    const totalPrice = quantity * 1;
