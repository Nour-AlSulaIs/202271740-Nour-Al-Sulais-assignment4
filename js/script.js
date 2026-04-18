/* Typing Animation Logic
   Displays the subtitle with a typewriter effect */

const text = " A Software Engineer";
// Keeps track of the current character index
let index = 0;
// Typing speed in milliseconds 
const speed = 100;
// Select the HTML element where the text will appear
const typingElement = document.querySelector(".typing");

function typeWriter() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

/* Start typing animation */
typeWriter();



/* Dark / Light Mode Toggle
   Toggles a CSS class on the body element */

const toggleBtn = document.getElementById("theme-toggle");

/* Load saved theme when page loads */
document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        toggleBtn.textContent = "Light";
    } else {
        toggleBtn.textContent = "Dark";
    }
});

toggleBtn.addEventListener("click", () => {

    /* Toggle theme class */
    document.body.classList.toggle("light-mode");

    /* Update button label */
    if (document.body.classList.contains("light-mode")) {
        toggleBtn.textContent = "Light";
        localStorage.setItem("theme", "light");

    } else {
        toggleBtn.textContent = "Dark";
        localStorage.setItem("theme", "dark");
    }
});


// Get form and message element
const form = document.getElementById("contact-form");
const msg = document.getElementById("form-msg");


// Toggle project details show more or show less
function toggleDetails(button) {
    const fullText = button.previousElementSibling;
    const shortText = fullText.previousElementSibling;

    // Check if details are hidden
    if (window.getComputedStyle(fullText).display === "none") {
        fullText.style.display = "block";   // Show full text
        shortText.style.display = "none";   // Hide short text
        button.textContent = "Show Less";
    } else {
        fullText.style.display = "none";    // Hide full text
        shortText.style.display = "block";  // Show short text
        button.textContent = "Show More";
    }
}


// Handle form submission
form.addEventListener("submit", function (e) {

    if (!form.checkValidity()) {
        msg.textContent = "Please fill all fields correctly";
        msg.style.color = "#ff6b6b";
        return;
    }

    e.preventDefault(); // Prevent page reload

    // Show success message
    msg.textContent = "Message sent successfully";
    msg.style.color = "#4ade80";

    form.reset(); // Clear form fields

    setTimeout(() => {
        msg.textContent = "";
    }, 3000);
});


// Show browser validation while typing
const emailInput = document.getElementById("email");

emailInput.addEventListener("input", function () {
    emailInput.reportValidity();
});

const skills = [
  { name: 'Python',     color: '#4B8BBE' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'HTML',       color: '#E34F26' },
  { name: 'CSS',        color: '#264DE4' },
  { name: 'Java',       color: '#EA2D2E' },
  { name: 'Next',       color: '#FA7343' },
  { name: 'React',      color: '#61DAFB' },
  { name: 'Flutter',    color: '#54C5F8' },
  { name: 'Figma',      color: '#A259FF' },
  { name: 'Git',        color: '#F05032' },
  { name: 'SQL',        color: '#00758F' },
  { name: 'C#',         color: '#9B4F96' },
];

// Get elements
const sphere = document.getElementById('sphere');
const hint   = document.getElementById('hint');
const tags   = [];
let spread   = false;
let angle    = 0;
let rafId    = null;

// Calculate each skill's position on the sphere using Fibonacci distribution
const sphPos = skills.map((s, i) => {
  const phi   = Math.acos(1 - 2 * (i + 0.5) / skills.length);
  const theta = Math.PI * (1 + Math.sqrt(5)) * i;
  const r = 160;
  return {
    x: r * Math.sin(phi) * Math.cos(theta),
    y: r * Math.sin(phi) * Math.sin(theta),
    z: r * Math.cos(phi),
  };
});

// Calculate flat grid position for each skill when spread out
function flatPos(i) {
  const cols = window.innerWidth < 500 ? 3 : 4; // 3 columns on mobile, 4 on desktop
  const gapX = 105, gapY = 50;
  const col  = i % cols;
  const row  = Math.floor(i / cols);
  const totalRows = Math.ceil(skills.length / cols);
  return {
    x: -((Math.min(cols, skills.length) - 1) * gapX) / 2 + col * gapX,
    y: -((totalRows - 1) * gapY) / 2 + row * gapY,
    z: 200,
  };
}

// Create and style a tag element for each skill
skills.forEach((s, i) => {
  const tag = document.createElement('div');
  tag.className   = 'tag';
  tag.textContent = s.name;
  tag.style.color       = s.color;
  tag.style.borderColor = s.color + '55';
  tag.style.background  = s.color + '11';
  tag.style.textShadow  = `0 0 12px ${s.color}88`;
  sphere.appendChild(tag);
  tags.push(tag);
});

// Apply 3D rotation to each tag based on the current angle
function applyOrbit() {
  const rx = 15 * Math.PI / 180;
  const ry = angle * Math.PI / 180;
  const cosX = Math.cos(rx), sinX = Math.sin(rx);
  const cosY = Math.cos(ry), sinY = Math.sin(ry);

  tags.forEach((tag, i) => {
    const p  = sphPos[i];

    // Rotate around Y axis then X axis
    const x1 = p.x * cosY + p.z * sinY;
    const z1 = -p.x * sinY + p.z * cosY;
    const y1 = p.y * cosX - z1 * sinX;
    const z2 = p.y * sinX + z1 * cosX;

    tag.style.transform = `translate(-50%,-50%) translate3d(${x1}px,${y1}px,${z2}px)`;

    // Fade out tags that are behind the sphere
    tag.style.opacity = Math.max(0.15, (z2 + 160) / 320).toFixed(2);
  });
}

// Increment angle and keep the sphere spinning
function animate() {
  angle = (angle + 0.3) % 360;
  applyOrbit();
  rafId = requestAnimationFrame(animate);
}

animate();

// Toggle between sphere and flat grid on click
document.getElementById('scene').addEventListener('click', () => {
  spread = !spread;

  if (spread) {
    // Stop rotation and spread tags to flat grid
    cancelAnimationFrame(rafId);
    hint.textContent = 'Click to go back';
    tags.forEach((tag, i) => {
      const fp = flatPos(i);
      tag.style.transition = `transform 0.8s cubic-bezier(.34,1.1,.64,1) ${i * 30}ms, opacity 0.5s ease`;
      tag.style.transform  = `translate(-50%,-50%) translate3d(${fp.x}px,${fp.y}px,${fp.z}px)`;
      tag.style.opacity    = '1';
    });
  } else {
    // Return tags to sphere and resume rotation
    hint.textContent = 'Click to view all';
    tags.forEach((tag, i) => {
      tag.style.transition = `transform 0.8s cubic-bezier(.34,1.1,.64,1) ${i * 20}ms, opacity 0.5s ease`;
    });

    // Start spinning again after animation finishes
    setTimeout(() => {
      tags.forEach(tag => { tag.style.transition = 'none'; });
      animate();
    }, 900);

    applyOrbit();
  }
});

