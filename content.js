// Function to create a cursor image with a given color
function createCursor(color) {
  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = 24;
  canvas.height = 24;
  const ctx = canvas.getContext('2d');

  // Draw the cursor on canvas
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(12, 12, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Convert the canvas to a data URL
  return canvas.toDataURL('image/png');
}

// Function to extract the computed background color of an element
function getBackgroundColor(element) {
  return window.getComputedStyle(element).backgroundColor;
}

// Function to update the cursor
function updateCursor(bgColor) {
  // Create a cursor image with the extracted color
  const cursorDataURL = createCursor(bgColor);
  // Set the new cursor image
  document.body.style.cursor = `url('${cursorDataURL}') 12 12, auto`;
}

// Adding event listeners to all elements could be very performance-intensive.
// A more efficient approach is to use event delegation on the document.
document.addEventListener('mouseover', function(event) {
  const bgColor = getBackgroundColor(event.target);
  updateCursor(bgColor);
});

// Reset the cursor when it's not over an element
document.addEventListener('mouseout', function() {
  document.body.style.cursor = 'auto';
});
