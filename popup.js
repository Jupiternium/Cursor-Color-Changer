// Get the buttons by their ids
let newTabButton = document.getElementById("new-tab");
let newWindowButton = document.getElementById("new-window");

// Add a click event listener to the new tab button
newTabButton.addEventListener("click", function() {
  window.open("https://google.com");
});



// Add a click event listener to the new window button
newWindowButton.addEventListener("click", function() {
  window.open("https://google.com", "New Window");
});
