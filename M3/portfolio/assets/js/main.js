import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const links = document.querySelectorAll("nav a");

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

// const scrollSpy = new bootstrap.ScrollSpy(document.body, {
//   target: 'nav'
// })
