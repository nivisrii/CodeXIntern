const modeButton = document.getElementById('modeButton');
const body = document.body;

modeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Toggle button text based on the mode
  if (body.classList.contains('dark-mode')) {
    modeButton.textContent = 'Light Mode';
    modeButton.classList.add('dark-mode');
  } else {
    modeButton.textContent = 'Dark Mode';
    modeButton.classList.remove('dark-mode');
  }
});
