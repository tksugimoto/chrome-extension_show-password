(function () {
	"use strict";
	Array.from(document.querySelectorAll('input[type="password"]')).map(input => {
		input.type = "text";
	});
})();
