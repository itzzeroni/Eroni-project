document.addEventListener('DOMContentLoaded', function() {
    const chatIcon = document.getElementById('chatIcon');
    const iframePopup = document.getElementById('iframePopup');
    const iframeOverlay = document.getElementById('iframeOverlay');
    const closeButton = document.getElementById('closeButton');
  
    chatIcon.addEventListener('click', function() {
        iframePopup.style.display = 'block';
        iframeOverlay.style.display = 'block';
    });
  
    closeButton.addEventListener('click', function() {
        iframePopup.style.display = 'none';
        iframeOverlay.style.display = 'none';
    });

    iframeOverlay.addEventListener('click', function() {
        iframePopup.style.display = 'none';
        iframeOverlay.style.display = 'none';
    });
});
  
  