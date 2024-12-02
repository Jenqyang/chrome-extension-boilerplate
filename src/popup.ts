// Popup script for extension interaction
document.addEventListener('DOMContentLoaded', () => {
  const statusElement = document.getElementById('status');
  if (statusElement) {
    statusElement.textContent = 'Extension is active!';
  }
});
