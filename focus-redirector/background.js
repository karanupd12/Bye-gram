chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  const url = details.url;
  if (url.includes("instagram.com") || url.includes("youtube.com/shorts")) {
    chrome.tabs.update(details.tabId, { url: "https://www.udemy.com" }, () => {
      chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        func: () => {
          alert("Sacrifice what you want, otherwise what you want will be the sacrifice.");
        },
      });
    });
  }
}, {
  url: [
    { urlMatches: "https://www.instagram.com/.*" },
    { urlMatches: "https://www.youtube.com/shorts/.*" },
  ],
});
