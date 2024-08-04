import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

const tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const alertPlaceholder = document.getElementById("alertPlaceholder");
const appendAlert = (message, type) => {
	const wrapper = document.createElement("div");
	wrapper.innerHTML = [
		`<div class="alert alert-${type} alert-dismissible" role="alert">`,
		`   <div>${message}</div>`,
		'   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
		"</div>",
	].join("");

	alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("btnAlert");
if (alertTrigger) {
	alertTrigger.addEventListener("click", () => {
		appendAlert("Mensaje enviado exitosamente!", "success");
	});
}
document
	.getElementById("contactForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
	});

const links = document.querySelectorAll("nav li a");

links.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		const targetId = link.getAttribute("href").substring(1);
		const targetElement = document.getElementById(targetId);

		// Calcula el desplazamiento considerando la altura del navbar
		const navbarHeight = document.querySelector("nav").offsetHeight;
		const targetPosition = targetElement.offsetTop - navbarHeight;

		window.scrollTo({
			top: targetPosition,
			behavior: "smooth",
		});
	});
});

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
	if (window.scrollY > 0) {
		nav.classList.add("scrolled");
	} else {
		nav.classList.remove("scrolled");
	}
});
