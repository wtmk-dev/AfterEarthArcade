function navigateToPage(page) {
    window.location.href = page;
}

function onclick_sighIn() {
        var url = 'checkout.html';
        navigateToPage(url);
}

document.addEventListener('DOMContentLoaded', function() {
    var purchaseButton = document.getElementById('signin');
    if (purchaseButton) {
        purchaseButton.addEventListener('click', onclick_sighIn);
    }
});