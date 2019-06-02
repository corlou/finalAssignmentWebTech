// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    const myButton = document.getElementById("back-top");
    // check if button exists before attempting to apply style
    if (myButton) {
      myButton.style.display = "block";
    }
  } else {
    const myButton = document.getElementById("back-top");
    // check if button exists before attempting to apply style
    if (myButton) {
      myButton.style.display = "none";
    }
  }
}

// make overlay disappear after 2 seconds
setTimeout(function () {
  const overlay = document.getElementById('loading-overlay');
  if (overlay) {
    overlay.style.display = 'none';
  }
}, 2000);