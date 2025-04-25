let cart = [];

function addToCart(flavor, price) {
  const item = cart.find(i => i.name === flavor);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ name: flavor, price, quantity: 1 });
  }
  alert(`${flavor} added to cart!`);
  renderCart();
}

function openCart() {
  document.getElementById('cartModal').style.display = 'block';
  renderCart();
}

function closeCart() {
  document.getElementById('cartModal').style.display = 'none';
}

function openOrderForm() {
  document.getElementById('cartModal').style.display = 'none';
  document.getElementById('orderModal').style.display = 'block';
}

function closeOrderForm() {
  document.getElementById('orderModal').style.display = 'none';
}

  
// EmailJS Initialization
(function() {
  emailjs.init("NAzC-YRqZ49imKfBx");
})();

// Contact Form Submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      };

      emailjs.send("service_6supnnl", "template_ala1u6q", formData)
        .then(() => {
          alert("Message sent successfully! 🍦 We'll get back to you soon.");
          form.reset();
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          alert("Oops! Something went wrong. Please try again.");
        });
    });
  }
});
