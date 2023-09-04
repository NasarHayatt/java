document.addEventListener("DOMContentLoaded", function() {
  const addToCartButton = document.querySelector('.add-to-cart-button-selector');
  if (addToCartButton) {
    const myButton = document.createElement('button');
    myButton.innerText = 'My Custom Button';
    myButton.addEventListener('click', function() {
      // Custom button logic here
    });
    addToCartButton.parentNode.insertBefore(myButton, addToCartButton.nextSibling);
  }
});
