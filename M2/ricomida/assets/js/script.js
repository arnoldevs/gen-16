// Abreviación de document.ready
$(function () {
	$("#sendMail").click(function () {
		alert("El correo fue enviado correctamente...");
	});

	$('[data-bs-toggle="tooltip"]').tooltip();

	$("section div span").on("dblclick", function () {
		$(this).css("color", "red");
	});

	$(".relatedRecipesTitleCard").click(function () {
		// $(".relatedRecipes .card-img-top, .relatedRecipes .card-text").toggle();
		// $(".relatedRecipes img").toggle();
		$(".relatedRecipes p").toggle();
	});
});
