// Create floating particles
function createFloatingParticles() {
  const particleContainer = document.querySelector(".hero-particles");
  if (!particleContainer) return;

  const colors = [
    "#0066FF",
    "#FF6600",
    "#00CC66",
    "#FF3366",
    "#9966FF",
    "#00CCCC",
  ];

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 20 + "s";
    particle.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    particle.style.width = Math.random() * 4 + 2 + "px";
    particle.style.height = particle.style.width;
    particleContainer.appendChild(particle);
  }
}

// Start animations
function startAnimations() {
  document.querySelectorAll(".fade-in").forEach((element, index) => {
    setTimeout(() => {
      element.classList.add("visible");
    }, index * 100);
  });
}

// Ripple effect
function createRippleEffect(event, button) {
  const ripple = document.createElement("span");
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    background: radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s ease-out;
    pointer-events: none;
  `;

  button.style.position = "relative";
  button.style.overflow = "hidden";
  button.appendChild(ripple);

  const style = document.createElement("style");
  style.textContent = `
    @keyframes ripple {
      0% { transform: scale(0); opacity: 1; }
      100% { transform: scale(2); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  setTimeout(() => {
    ripple.remove();
    style.remove();
  }, 600);
}

// Celebration effect (top-right)
function createCelebrationEffect() {
  const colors = [
    "#0066FF",
    "#FF6600",
    "#00CC66",
    "#FF3366",
    "#9966FF",
    "#00CCCC",
  ];
  const container = document.createElement("div");

  container.style.cssText = `
    position: fixed;
    top: 60px;
    right: 20px;
    width: 200px;
    height: 300px;
    pointer-events: none;
    z-index: 9999;
    overflow: visible;
  `;
  document.body.appendChild(container);

  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.style.cssText = `
      position: absolute;
      width: 10px;
      height: 10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}%;
      top: -10px;
      border-radius: 50%;
      animation: confetti-small 2.5s ease-out forwards;
    `;
    container.appendChild(confetti);
  }

  const style = document.createElement("style");
  style.textContent = `
    @keyframes confetti-small {
      0% {
        transform: translateY(0px) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(200px) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  setTimeout(() => {
    container.remove();
    style.remove();
  }, 3000);
}

// Notification
function showNotification(message, type = "success") {
  const container = document.querySelector(".notification-container");
  if (!container) return;

  container.innerHTML = "";

  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;

  container.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease forwards";
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// Email validation
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Slide-out animation
const slideOutStyle = document.createElement("style");
slideOutStyle.textContent = `
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(slideOutStyle);

// Performance optimization
function optimizePerformance() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReducedMotion) {
    document.documentElement.style.setProperty("--animation-duration", "0ms");
    document.querySelectorAll(".shape").forEach((shape) => {
      shape.style.animation = "none";
    });
  }
}
optimizePerformance();

// Dynamic theming
function initializeDynamicTheming() {
  const root = document.documentElement;
  const colors = [
    "#0066FF",
    "#FF6600",
    "#00CC66",
    "#FF3366",
    "#9966FF",
    "#00CCCC",
  ];
  let colorIndex = 0;

  root.style.setProperty("--current-primary", "#0066FF");
  root.style.setProperty("--current-secondary", "#FF6600");

  setInterval(() => {
    colorIndex = (colorIndex + 1) % colors.length;
    root.style.setProperty("--current-accent", colors[colorIndex]);
  }, 3000);
}
initializeDynamicTheming();

// ✅ Make your tools available globally
window.AwsApp = {
  showNotification,
  createRippleEffect,
  createCelebrationEffect,
  isValidEmail,
};

// On load
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// 👋 Fun console message
console.log(`
🌟 Aws Infotech - Web Application Loaded Successfully! 🌟
Built with:
- Vanilla JavaScript ES6+
- Modern CSS with animations
- Responsive design
© 2025 Aws Infotech. All rights reserved.
`);
