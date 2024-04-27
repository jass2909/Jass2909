const navBtn = document.getElementById('navBtn');
const navMenu = document.getElementById('navMenu');
const closeBtn = document.getElementById('close');
const navLinks = document.querySelectorAll('.nav-menu ul li');
const header = document.getElementById('header');
const circle = document.createElement('div');
const typingText = document.getElementById('typing-text');
const phrases = ["Jasmeet Singh", "A Student", "A learning Developer", "20"]; // List of phrases to cycle through
let index = 0; // Index to keep track of the current phrase

const logo = document.querySelector('.logo');
const sections = document.querySelectorAll('.info');
const downImg = document.getElementById('down');

downImg.addEventListener('click', ()=>{
  var targetelement = document.getElementById('about')
  targetelement.scrollIntoView({behavior: "smooth"});
})

// Function to update logo text based on current section
function updateLogoText() {
  const scrollTop = window.scrollY || window.pageYOffset; // Get the scroll position
      if (scrollTop <= 100) {
        // If user has scrolled back to the top
        logo.textContent = 'JSK'; // Set logo text to default
        
        return; // Exit function
      }
  sections.forEach(section => {
    const rect = section.getBoundingClientRect(); // Get position of section
    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
      // If top of section is at or above the top of the viewport
      logo.textContent = section.id.charAt(0).toUpperCase() + section.id.slice(1); // Set logo text to section ID
      
    }
  });
}

// Add scroll event listener to update logo text
window.addEventListener('scroll', updateLogoText);

// Call updateLogoText initially to set logo text on page load
updateLogoText();

function typeText() {
  const phrase = phrases[index];
  let text = phrase;
  let i = 0;
  switch (index) {
    case 0:
      typingText.style.color = '#B3C8CF';
      break;
    case 1:
      typingText.style.color = '#BED7DC';
      break;  
    case 2:
      typingText.style.color = '#F1EEDC';
      break;  
    case 3:
      typingText.style.color = 'E5DDC5';
      break;  
  
    default:
      break;
  }

  // Clear the typing text
  typingText.innerHTML = '';

  // Typing animation
  const typingInterval = setInterval(() => {
    if (i < text.length) {
      typingText.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
      setTimeout(eraseText, 2000); // Wait for 2 seconds before erasing
    }
  }, 100); // Adjust the typing speed as needed
}

function eraseText() {
  let i = typingText.innerHTML.length;

  // Erasing animation
  const eraseInterval = setInterval(() => {
    if (i >= 0) { // Check if there are characters from the phrase
      typingText.innerHTML = typingText.innerHTML.substring(0, i);
      i--;
    } else {
      clearInterval(eraseInterval);
      index = (index + 1) % phrases.length; // Move to the next phrase
      typeText(); // Start typing the next phrase
    }
  }, 50); // Adjust the erasing speed as needed
}

// Start the typing animation
typeText();


navBtn.addEventListener('click', () => {
  navMenu.style.display = 'block';
  navMenu.style.backdropFilter = 'blur(10px)';
  navMenu.classList.add('fadeUp')
  navMenu.classList.remove('fadeDown');
  addFadeUpClass(navLinks);
});

closeBtn.addEventListener('click', () => {
    
    navMenu.classList.add('fadeDown');
    navMenu.classList.remove('fadeUp');
    removeFadeUpClass(navLinks);

    
});

navLinks.forEach((link, index) => {
  link.style.animationDelay = `${index * 0.1}s`; // Adjust the delay as needed
});

navLinks.forEach((link, index)=>{
  link.addEventListener('click', ()=>{
    navMenu.classList.add('fadeDown');
    navMenu.classList.remove('fadeUp');
    removeFadeUpClass(navLinks);
  })
})

function addFadeUpClass(links) {
  links.forEach((link, index) => {
    setTimeout(() => {
      link.classList.add('fadeUp');
    }, index * 100); // Adjust the delay as needed
  });
}

function removeFadeUpClass(links) {
  links.forEach((link) => {
    link.classList.remove('fadeUp');
  });
}

