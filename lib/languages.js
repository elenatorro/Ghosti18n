'use strict';

var cookie = 'ghost_language';

function changeLanguage (language) {
	Look.language.change(language, posts);
	Look.language.change(language, main);
	// Look.language.change(language, navigation);
	Look.language.change(language, pagination);
	Look.cookie.set(cookie, language);
};

function init() {
	if (!Look.cookie.exists(cookie)) {
	  Look.cookie.set(cookie, 'EN');
	  changeLanguage('EN');
	  return;
	};

	changeLanguage(Look.cookie.get(cookie));
};


init();
var changeLanguageButtons = Look.getBy.className('changeLanguage');
var i;
for (i = 0; i < changeLanguageButtons.length; i++) {
	changeLanguageButtons[i].addEventListener('click', function (data) {
		changeLanguage(data.toElement.dataset.language);
	});
};