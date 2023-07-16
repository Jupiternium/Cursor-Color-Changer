// Add a message event listener to the background script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Check the action of the message
    switch (message.action) {
      // If the action is "new-tab"
      case "new-tab":
        // Create a new tab with your extension URL
        chrome.tabs.create({url: chrome.extension.getURL("index.html")});
        break;
      // If the action is "new-window"
      case "new-window":
        // Create a new window with your extension URL
        chrome.windows.create({url: chrome.extension.getURL("index.html")});
        break;
      // If the action is something else
      default:
        // Do nothing
        break;
    }
  });
  