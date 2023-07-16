// Get the buttons by their ids
let newTabButton = document.getElementById("new-tab");
let newWindowButton = document.getElementById("new-window");

// Add a click event listener to the new tab button
newTabButton.addEventListener("click", function() {
  // Send a message to the background script with the action "new-tab"
  chrome.runtime.sendMessage({action: "new-tab"});
});

// Add a click event listener to the new window button
newWindowButton.addEventListener("click", function() {
  // Send a message to the background script with the action "new-window"
  chrome.runtime.sendMessage({action: "new-window"});
});
