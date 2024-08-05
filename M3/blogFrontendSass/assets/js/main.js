const pathname = window.location.pathname;
const fileName = pathname
	.split("/")
	.pop()
	.split(".")[0]
	.split("#")[0]
	.split("?")[0];

document.addEventListener("submit", (event) => {
	event.preventDefault();
	if (fileName === "login") {
		window.location.href = "index.html";
	} else if (fileName === "register") {
		window.location.href = "login.html";
	} else {
		window.location.href = "index.html";
	}
});

