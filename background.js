chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	// listener for tab opens
	if (changeInfo.status == "loading") {
		// when the page starts loading instead of waiting for it to load
		if (tab.url.includes("/shorts/")) {
			chrome.tabs.query(
				{
					// change the tab url
					currentWindow: true,
					active: true,
				},
				function (tab) {
					chrome.tabs.update(tab.id, {
						url: tab[0].url.replace("/shorts/", "/watch?v="),
					});
				}
			);
		}
	}
});
