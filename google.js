console.log("Pink Theme running");

let style = document.createElement("style");

// light to dark
// #ffe5f5
// #ffb4e2
// #ff67c4
// #ff009b
// #c30076

let pinkTheme = `
body{
    background-color: #ffb4e2 !important;
}
.gb_Ha, .uU7dJb, .sfbg, .WE0UJf, .rfiSsc{
    background-color: #ffe5f5 !important;
    color :  #ff009b;
    border: none !important;
}
.KxwPGc{
    background-color:#ffb4e2 !important;
    border: none !important;
}

h1{
    color: #c30076 !important;
}
a, span{
    color: #ff009b !important;
}
a:hover{
    color: #c30076 !important;
}
.RNNXgb{
    background-color: #ffe5f5 !important;
    border: none !important;  
    
}
.RNNXgb:hover{
    box-shadow: 0 1px 6px 0 #ff009b !important;
}
.gLFyf{
    color : #ff009b !important;    
}
svg {
    fill: #ff009b !important;
}
input, .GKS7s {
    background-color: #ffe5f5 !important;
    color: #ff009b !important;
    border : none !important;
}
div{
    color: black !important;
}
.sbai{
    color : #ff009b !important;
}
`;

let darkTheme = `
body{
    background-color: #010409 !important;
}
.gb_Ha, .uU7dJb, .sfbg, .WE0UJf, .rfiSsc{
    background-color: #0d1117 !important;
    color :  #e6edf3;
     border : none !important;
    border-top : 1px solid #30363d !important; 
    border-bottom : 1px solid #30363d !important; 
}
.KxwPGc{
    background-color:#010409 !important;
    border: none !important;
}

h1{
    color: #c30076 !important;
}
a, span{
    color: #e6edf3 !important;
}
a:hover{
    color: grey !important;
}
.RNNXgb{
    background-color: #0d1117 !important;
    border : none !important;
    border-top : 1px solid #30363d !important; 
    border-bottom : 1px solid #30363d !important; 
    
}
.RNNXgb:hover{
    box-shadow: 0 1px 10px 0 #30363d !important;
}
.gLFyf{
    color : #e6edf3 !important;    
}
svg {
    fill: #e6edf3 !important;
}
input, .GKS7s {
    background-color: #0d1117 !important;
    color: #e6edf3 !important;
    border : 1px solid grey !important;
}
div{
    color: white !important;
}
`;
console.log("Theme : ", localStorage.getItem("theme"));
let theme = localStorage.getItem("theme");
if (theme === "pink") {
	style.textContent = pinkTheme;
} else {
	style.textContent = darkTheme;
}
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	console.log(message.theme);
	if (message.theme === "pink") {
		style.textContent = pinkTheme;
		localStorage.setItem("theme", "pink");
	} else {
		localStorage.setItem("theme", "dark");
		style.textContent = darkTheme;
	}
}

document.head.append(style);

console.log("Pink Theme finished");
