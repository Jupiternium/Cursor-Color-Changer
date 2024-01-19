chrome.runtime.onInstalled.addListener(() => {
  // When the extension is installed or upgraded...
});

chrome.tabs.onCreated.addListener(function (tab) {
  // This will execute when a new tab is created
  if (tab.url && tab.url.startsWith('http') && tab.id) {
    // Check if the URL is a web page where scripts can be injected
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    }, () => {
      if (chrome.runtime.lastError) {
        // Log any errors that may have happened during the injection
        console.error('Failed to inject content.js into tab:', chrome.runtime.lastError);
      }
    });
  }
});

// Add other background logic if necessary
