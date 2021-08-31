chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.req == "getCurrentURL") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      sendResponse( {current_url: tab.url});
    });
  }
  return true;
});