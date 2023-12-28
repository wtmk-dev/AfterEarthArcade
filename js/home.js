function navigateToPage(page) {
    window.location.href = page; // Redirects to the specified page
}

function handlePurchaseClick() {
    var quantityValue = document.getElementById('quantity').value;
    var checkoutURL = 'checkout.html?quantity=' + encodeURIComponent(quantityValue);
    navigateToPage(checkoutURL); // Call the function with the page name
}

document.addEventListener('DOMContentLoaded', function() {
    var purchaseButton = document.getElementById('purchase');
    if (purchaseButton) {
        purchaseButton.addEventListener('click', handlePurchaseClick);
    }
});