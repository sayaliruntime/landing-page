// Get elements
const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');
const popup = document.getElementById('popup');

// Show popup
openPopup.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default anchor behavior
  popup.style.display = 'block';
});

// Close popup
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close popup if clicked outside the content
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});
