/* ========== script.js ========== */

/* Typing Effect */
const typedPhrases = ["Invest Together.", "Own Real Assets.", "Earn On-Chain."];
let typedIndex = 0;
let charIndex = 0;

function initTypingEffect() {
  const typedText = document.getElementById("typed-text");
  if (!typedText) return;

  function typeText() {
    if (charIndex < typedPhrases[typedIndex].length) {
      typedText.textContent += typedPhrases[typedIndex].charAt(charIndex++);
      setTimeout(typeText, 100);
    } else {
      setTimeout(eraseText, 2000);
    }
  }

  function eraseText() {
    if (charIndex > 0) {
      typedText.textContent = typedPhrases[typedIndex].substring(0, --charIndex);
      setTimeout(eraseText, 50);
    } else {
      typedIndex = (typedIndex + 1) % typedPhrases.length;
      setTimeout(typeText, 200);
    }
  }

  typeText();
}

/* Newsletter Form */
function initNewsletterForm() {
  const form = document.getElementById("newsletter");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = form.querySelector("input[type=email]");
    const email = emailInput.value.trim();
    if (email) {
      const feedback = document.createElement("p");
      feedback.textContent = "Thank you! You've been subscribed.";
      feedback.style.color = "#D1D1D1";
      form.appendChild(feedback);
      form.reset();
      setTimeout(() => feedback.remove(), 3000);
    }
  });
}

/* FAQ Accordion */
function initFAQAccordion() {
  const faqContainer = document.querySelector(".faq");
  if (!faqContainer) return;

  faqContainer.addEventListener("click", (e) => {
    const button = e.target.closest(".faq-question");
    if (!button) return;
    const answer = button.nextElementSibling;
    answer.classList.toggle("open");
  });
}

/* Waitlist Buttons */
function initWaitlistButtons() {
  const waitlistButtons = document.querySelectorAll("#joinWaitlist, #joinWaitlist2");
  if (!waitlistButtons.length) return;

  waitlistButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const email = prompt("Enter your email to join the waitlist:");
      if (email) {
        const feedback = document.createElement("p");
        feedback.textContent = "Thank you! We will notify you soon.";
        feedback.style.color = "#D1D1D1";
        btn.after(feedback);
        setTimeout(() => feedback.remove(), 3000);
      }
    });
  });
}

/* Three.js Particle Sphere */
function initThreeJS() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Particle Sphere
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 5000;
  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i += 3) {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos((Math.random() * 2) - 1);
    const radius = 10 + Math.random() * 2;
    posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
    posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    posArray[i + 2] = radius * Math.cos(phi);
  }

  particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    color: 0xD1D1D1,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
  });
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);

  camera.position.z = 20;

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.002;
    renderer.render(scene, camera);
  }
  animate();

  // Resize Handler
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }, 100);
  });
}

/* Initialize All */
document.addEventListener("DOMContentLoaded", () => {
  initTypingEffect();
  initNewsletterForm();
  initFAQAccordion();
  initWaitlistButtons();
  initThreeJS();
});