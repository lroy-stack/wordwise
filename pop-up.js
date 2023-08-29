document.addEventListener('DOMContentLoaded', () => {
    const openPopupLink = document.getElementById('open-popup');
    const closePopupButton = document.getElementById('close-popup');
    const popup = document.getElementById('popup');
  
    openPopupLink.addEventListener('click', (event) => {
      event.preventDefault();
      popup.style.display = 'flex';
    });
  
    closePopupButton.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  });
  