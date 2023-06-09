// Sample sandwich prices
const sandwichPrices = {
  turkey: 5.99,
  ham: 4.99,
  veggie: 3.99
};

// Sample coupon codes and discounts
const coupons = {
  10OFF: 0.1,
  20OFF: 0.2,
  30OFF: 0.3
};

// Get the order list element
const orderList = document.getElementById('order-list');

// Add items to the order list
function addItemToOrder(item) {
  const li = document.createElement('li');
  li.textContent = item;
  orderList.appendChild(li);
}

// Calculate and display the total amount
function calculateTotal() {
  let total = 0;
  const orderItems = orderList.children;
  for (let i = 0; i < orderItems.length; i++) {
    const itemName = orderItems[i].textContent;
    total += sandwichPrices[itemName];
  }

  // Update the total amount
  const totalAmount = document.getElementById('total-amount');
  totalAmount.textContent = `$${total.toFixed(2)}`;
}

// Apply the coupon code and update the total amount
function applyCoupon() {
  const couponInput = document.getElementById('coupon-input');
  const couponCode = couponInput.value;
  const discount = coupons[couponCode];

  if (discount) {
    const totalAmount = document.getElementById('total-amount');
    const currentTotal = parseFloat(totalAmount.textContent.slice(1));