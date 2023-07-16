// Get the cursor element
let cursor = document.getElementById("cursor");

// Add a mousemove event listener to the document
document.addEventListener("mousemove", function(event) {
  // Get the element under the mouse pointer
  let element = document.elementFromPoint(event.clientX, event.clientY);

  // Get the computed style of the element
  let style = window.getComputedStyle(element);

  // Get the background color of the element
  let color = style.backgroundColor;

  // Set the cursor element's background color to match the element's color
  cursor.style.backgroundColor = color;
});
