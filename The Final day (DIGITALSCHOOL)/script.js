// Logo Interactive Feature
const logoContainer = document.querySelector('.logo-container');

// Add a click event to the logo for an extra interactive effect
logoContainer.addEventListener('click', () => {
  const logoImage = document.querySelector('.logo-image');
  const logoText = document.querySelector('.logo-text h1');

  // Add a temporary animation on click
  logoImage.style.transform = 'scale(1.5)';
  logoText.style.color = '#ff6600';

  setTimeout(() => {
    logoImage.style.transform = 'scale(1)';
    logoText.style.color = '#ff6600';
  }, 500);
});

// Add a glow effect to the logo on hover
logoContainer.addEventListener('mouseenter', () => {
  const logoImage = document.querySelector('.logo-image');
  logoImage.style.filter = 'drop-shadow(0 0 10px rgba(255, 102, 0, 0.8))';
});

logoContainer.addEventListener('mouseleave', () => {
  const logoImage = document.querySelector('.logo-image');
  logoImage.style.filter = 'none';
});// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Dynamic Typing Effect for Services
const services = ["Custom PC Builds", "Expert Repairs", "24/7 Online Support"];
let serviceIndex = 0;
let charIndex = 0;
const typedTextElement = document.querySelector(".typed-text");
const cursorElement = document.querySelector(".cursor");

function typeService() {
  if (charIndex < services[serviceIndex].length) {
    typedTextElement.textContent += services[serviceIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeService, 100);
  } else {
    setTimeout(eraseService, 2000);
  }
}

function eraseService() {
  if (charIndex > 0) {
    typedTextElement.textContent = services[serviceIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseService, 50);
  } else {
    serviceIndex = (serviceIndex + 1) % services.length;
    setTimeout(typeService, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeService, 1000);
});

// Parallax Background Effect
window.addEventListener("scroll", () => {
  document.querySelector(".hero").style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});

// Service Hover Effects
document.querySelectorAll(".service").forEach((service) => {
  service.addEventListener("mouseover", () => {
    service.style.transform = "scale(1.1) rotate(2deg)";
  });

  service.addEventListener("mouseout", () => {
    service.style.transform = "scale(1)";
  });

  service.addEventListener("click", () => {
    service.style.transform = "scale(1.2)";
    setTimeout(() => {
      service.style.transform = "scale(1)";
    }, 200);
  });
});

// Function to update total price
function updatePrice() {
  let cpuPrice = parseInt(document.getElementById("cpu").value);
  let gpuPrice = parseInt(document.getElementById("gpu").value);
  let ramPrice = parseInt(document.getElementById("ram").value);
  let storagePrice = parseInt(document.getElementById("storage").value);

  let totalPrice = cpuPrice + gpuPrice + ramPrice + storagePrice;

  // Apply Discount for High-End PCs
  if (cpuPrice + gpuPrice > 800) {
    totalPrice *= 0.9; // 10% Discount
  }

  // Smooth Price Update Animation
  let priceElement = document.getElementById("total-price");
  priceElement.style.transform = "scale(1.2)";
  setTimeout(() => {
    priceElement.style.transform = "scale(1)";
  }, 200);

  // Display Updated Price
  priceElement.textContent = `$${totalPrice.toFixed(2)}`;

  // Show Component Recommendations
  showRecommendations(cpuPrice, gpuPrice);
}

// Function to suggest better components
function showRecommendations(cpu, gpu) {
  let recommendation = document.getElementById("recommendation");

  if (cpu < 300 && gpu < 500) {
    recommendation.textContent = "🔹 Upgrade to AMD Ryzen 9 & RTX 3070 for better performance!";
  } else if (gpu >= 600) {
    recommendation.textContent = "🔥 Your setup is high-end! Enjoy maximum FPS!";
  } else {
    recommendation.textContent = "";
  }
}
// Confetti Effect on Add to Cart
function triggerConfetti() {
  const confettiSettings = { 
    target: 'confetti-canvas', // Target the canvas element
    max: 200, // Maximum number of confetti particles
    size: 1.5, // Size of the confetti particles
    animate: true // Enable animation
  };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render(); // Render the confetti

  setTimeout(() => {
    confetti.clear(); // Clear the confetti after 3 seconds
  }, 3000);
}

// Add confetti effect to "Add to Cart" buttons
document.querySelectorAll('.product button').forEach(button => {
  button.addEventListener('click', () => {
    triggerConfetti(); // Trigger confetti when the button is clicked
  });
});

// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Save Configuration
document.getElementById("save-config").addEventListener("click", function () {
  let config = {
    cpu: document.getElementById("cpu").value,
    gpu: document.getElementById("gpu").value,
    ram: document.getElementById("ram").value,
    storage: document.getElementById("storage").value
  };
  localStorage.setItem("pcConfig", JSON.stringify(config));
  alert("✅ Configuration saved!");
});

// Load Saved Configuration
document.addEventListener("DOMContentLoaded", function () {
  let savedConfig = localStorage.getItem("pcConfig");
  if (savedConfig) {
    savedConfig = JSON.parse(savedConfig);
    document.getElementById("cpu").value = savedConfig.cpu;
    document.getElementById("gpu").value = savedConfig.gpu;
    document.getElementById("ram").value = savedConfig.ram;
    document.getElementById("storage").value = savedConfig.storage;
    updatePrice();
  }
});

// Cart Variables
let cart = [];
let totalPrice = 0;

// Function to Add Product to Cart
function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  totalPrice += productPrice;
  updateCartUI();
}

// Function to Update Cart UI
function updateCartUI() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = ""; // Clear previous items
  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = function () {
      removeFromCart(index);
    };
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });

  cartTotal.textContent = totalPrice;
}

// Function to Remove Product from Cart
function removeFromCart(index) {
  totalPrice -= cart[index].price;
  cart.splice(index, 1);
  updateCartUI();
}

// Function to Clear Cart
function clearCart() {
  cart = [];
  totalPrice = 0;
  updateCartUI();
}

// Function to Filter Products Based on Search Input
function filterProducts() {
  let input = document.getElementById("searchBar").value.toLowerCase();
  let products = document.querySelectorAll(".product");

  products.forEach(product => {
    let name = product.getAttribute("data-name").toLowerCase();
    if (name.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
// Blog Section Features

// 1. Like Button Functionality
document.querySelectorAll('.like-button').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default behavior
    button.classList.toggle('liked');
    button.innerHTML = button.classList.contains('liked') ? '<i class="fas fa-heart"></i> Liked' : '<i class="fas fa-heart"></i> Like';
  });
});

// 2. Share Button Functionality
document.querySelectorAll('.share-button').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default behavior
    const postTitle = button.closest('.post').querySelector('h3').innerText;
    alert(`Share "${postTitle}" on social media!`);
  });
});

// 3. Load More Posts
const loadMoreButton = document.getElementById('load-more');
const blogPosts = document.querySelector('.blog-posts');

loadMoreButton.addEventListener('click', () => {
  const newPosts = [
    {
      img: 'blog4.jpg',
      title: 'Best RAM for Gaming in 2023',
      content: 'Find out which RAM is best for your gaming setup.'
    },
    {
      img: 'blog5.jpg',
      title: 'Top 10 PC Cases for 2023',
      content: 'Discover the best PC cases for your build.'
    },
    {
      img: 'blog6.jpg',
      title: 'How to Build a Budget Gaming PC',
      content: 'A step-by-step guide to building a budget gaming PC.'
    }
  ];

  newPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <img src="${post.img}" alt="${post.title}">
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <div class="post-actions">
        <button class="like-button"><i class="fas fa-heart"></i> Like</button>
        <button class="share-button"><i class="fas fa-share"></i> Share</button>
      </div>
    `;
    blogPosts.appendChild(postElement);
  });

  loadMoreButton.style.display = 'none'; // Hide the button after loading
});// Footer Features

// 1. Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Show/hide back-to-top button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// 2. Newsletter Subscription Form
const newsletterForm = document.getElementById('newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = newsletterForm.querySelector('input');
  const email = emailInput.value;

  if (email) {
    alert(`Thank you for subscribing, ${email}!`);
    emailInput.value = ''; // Clear the input field
  } else {
    alert('Please enter a valid email address.');
  }
});

// 3. Smooth Scroll for Footer Links
document.querySelectorAll('.footer-section ul li a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});