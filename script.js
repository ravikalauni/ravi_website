// script.js

// Tab functionality
const tabs = document.querySelectorAll(".tab");
const tabPanes = document.querySelectorAll(".tab-pane");

// Add event listeners to tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Get target tab ID
    const targetTab = tab.getAttribute("data-tab");

    // Hide all tab panes
    tabPanes.forEach((pane) => {
      pane.classList.remove("active");
      pane.classList.add("hidden");
    });

    // Show the target tab pane
    const targetPane = document.getElementById(targetTab);
    targetPane.classList.add("active");
    targetPane.classList.remove("hidden");
  });
});
const colorPicker = document.getElementById('themeColorPicker');

colorPicker.addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    document.documentElement.style.setProperty('--primary-color', selectedColor);
});
const textColorPicker = document.getElementById('textColorPicker');

textColorPicker.addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    document.documentElement.style.setProperty('--text-color', selectedColor);
});

const fontSelector = document.getElementById('fontSelector');

fontSelector.addEventListener('change', (event) => {
    const selectedFont = event.target.value;
    document.documentElement.style.setProperty('--font-family', selectedFont);
});

document.getElementById("submitMessage").addEventListener("click", function() {
    const message = document.getElementById("message").value;
  
    if (message) {
      alert("Message Submitted: " + message); 
      document.getElementById("message").value = ''; 
    } else {
      alert("Sent.");
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
    const videoPopup = document.getElementById('videoPopup');
    const popupVideo = document.getElementById('popupVideo');
    const closePopup = document.getElementById('closePopup');
  
    videoThumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        const videoSrc = thumbnail.getAttribute('data-video');
        popupVideo.src = videoSrc;
        videoPopup.style.display = 'flex';
      });
    });
  
    closePopup.addEventListener('click', () => {
      videoPopup.style.display = 'none';
      popupVideo.pause();
      popupVideo.src = ''; // Clear video source
    });
  
    // Close the popup when clicking outside the video
    videoPopup.addEventListener('click', (e) => {
      if (e.target === videoPopup) {
        videoPopup.style.display = 'none';
        popupVideo.pause();
        popupVideo.src = '';
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const imageContainers = document.querySelectorAll('.image-container img');
    const fullscreenViewer = document.getElementById('fullscreenViewer');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const closeViewer = document.getElementById('closeViewer');
  
    let isZoomed = false;
    let currentScale = 1;
  
    // Open fullscreen image
    imageContainers.forEach(image => {
      image.addEventListener('click', () => {
        fullscreenImage.src = image.src;
        fullscreenViewer.classList.add('active');
      });
    });
  
    // Close fullscreen viewer
    closeViewer.addEventListener('click', () => {
      fullscreenViewer.classList.remove('active');
      fullscreenImage.src = '';
      isZoomed = false;
      currentScale = 1;
      fullscreenImage.style.transform = 'scale(1)';
    });
  
    // Zoom functionality
    fullscreenImage.addEventListener('click', () => {
      if (!isZoomed) {
        currentScale = 2; // Zoom in
        isZoomed = true;
      } else {
        currentScale = 1; // Zoom out
        isZoomed = false;
      }
      fullscreenImage.style.transform = `scale(${currentScale})`;
      fullscreenImage.style.cursor = isZoomed ? 'zoom-out' : 'zoom-in';
    });
  });
  
  
