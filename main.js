

// information Fade out
const information = document.getElementById('information');
function delayedFunction() {
    information.classList.add('fade');
  }


setTimeout(delayedFunction, 20000);





// Video Popup



var popupVideoBg = document.getElementById('popupVideoBg');



function showVideo(embeddedUrl, title) {
    var popup = document.getElementById('videoPopup');
    var videoPlayer = document.getElementById('videoPlayer');

    videoPlayer.src = embeddedUrl;

    // Triggering reflow to apply the transition
    void popup.offsetWidth;

    popup.classList.toggle('show');
    popupVideoBg.classList.toggle('show');
}

function closePopup() {
    var popup = document.getElementById('videoPopup');
    var videoPlayer = document.getElementById('videoPlayer');

    videoPlayer.src = '';  // Reset the video source to stop playback
    popup.classList.toggle('show');
    popupVideoBg.classList.toggle('show');

}




// Counting Effect


document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.counter');
  
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observerOptions = {
      threshold: 0.5, // Adjust as needed
    };
  
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
  
    counters.forEach((counter) => observer.observe(counter));
  
    function startCounter(counterElement) {
      const maxVal = parseInt(counterElement.getAttribute('data-max'));
      const duration = parseInt(counterElement.getAttribute('data-duration')) || 3000; // Default to 3000ms if no duration specified
      let countNum = 0;
  
      const startTime = performance.now();
  
      function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        countNum = Math.floor((elapsedTime / duration) * maxVal);
  
        if (countNum <= maxVal) {
          counterElement.textContent = countNum + '+';
          requestAnimationFrame(updateCounter);
        } else {
          counterElement.textContent = maxVal + '+';
        }
      }
  
      requestAnimationFrame(updateCounter);
    }
  });


  // SAL
  sal({
    threshold: .4,
    once: true,
  });