console.log("Inside Popup.js");

let theme = document.getElementById("theme");
let isDark = true;
let themeName = "dark";
let p = document.getElementById("mode");
theme.addEventListener("change", function () {
	let theme = document.getElementById("theme").value;
	if (isDark) {
		themeName = "pink";
		isDark = false;
		p.textContent = "Barbie Mode";
	} else {
		themeName = "dark";
		isDark = true;
		p.textContent = "Oppenheimer Mode";
	}
	console.log(themeName);
	chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
		let msg = {
			theme: themeName,
		};
		chrome.tabs.sendMessage(tabs[0].id, msg);
	});
});
