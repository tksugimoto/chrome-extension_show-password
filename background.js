"use strict";

const ID_SHOW_PASSWORD = "a";

function createContextMenus() {
	chrome.contextMenus.create({
		title: "入力欄のパスワードを表示",
		id: ID_SHOW_PASSWORD
	});
}

chrome.runtime.onInstalled.addListener(createContextMenus);
chrome.runtime.onStartup.addListener(createContextMenus);

chrome.contextMenus.onClicked.addListener((info, tab) => {
	if (info.menuItemId === ID_SHOW_PASSWORD) {
		chrome.tabs.executeScript(tab.id, {
			frameId: info.frameId,
			file: "show_password.js"
		});
	}
});
