jQuery(function($) {

	/* ============== SHOW / HIDE GOOGLE MAP =============== */
	$("#nino-map .nino-sectionHeading").click(function(){
		$("#nino-map").toggleClass("showMap");
		$(this).find(".text").toggle();
	});

});
