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
