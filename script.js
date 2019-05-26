// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    const myButton = document.getElementById("myBtn");
    // check if button exists before attempting to apply style
    if (myButton) {
      myButton.style.display = "block";
    }
  } else {
    const myButton = document.getElementById("myBtn");
    // check if button exists before attempting to apply style
    if (myButton) {
      myButton.style.display = "none";
    }
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}