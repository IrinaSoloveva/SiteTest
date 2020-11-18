"use strict";


/**
 * [generateRandomString возвращает случайную строку]
 * @param  {[int]} length [длина строки]
 * @return {[string]}        [случайная строка]
 */
function generateRandomString(length) {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz123456789";

    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

/**
 * [setCookie ставит Cookie]
 * @param {[string]} name           [имя Cookie]
 * @param {[string]} value          [значение Cookie]
 * @param {[int]} optionsExpires [время жизни Cookie в днях]
 */
function setCookie(name, value, optionsExpires) {

	var date = new Date(new Date().setDate(new Date().getDate() + optionsExpires));

  	var updatedCookie = name + "=" + value;
  	updatedCookie += "; path=/; expires=" + date.toUTCString();
  	document.cookie = updatedCookie;
  	console.log('document.cookie - ' + document.cookie);
  	console.log('updatedCookie - ' + updatedCookie);
};

/**
 * [getCookie возвращает значение Cookie]
 * @param  {[string]} name [имя Cookie]
 * @return {[string]}      [значение Cookie]
 */
function getCookie(name) {
  	//var pattern = new RegExp('(?:(?:^|.*;\\s*)' + name + '\\s*\\=\\s*([^;]*).*$)|^.*$');
  	var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)login\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  	return cookieValue;
};