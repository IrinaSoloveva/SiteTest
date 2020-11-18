"use strict";


function Validate(id, pattern, errorMessage) {
	this.id = id;
	this.pattern = pattern;
	this.errorMessage = errorMessage;
};

Validate.prototype.makeValid = function() {
	var element = document.getElementById(this.id);
	var reg = new RegExp(this.pattern);
	return reg.test(element.value);
};

Validate.prototype.displayValid = function() {

	var element = document.getElementById(this.id).parentElement;

	if (!element.querySelector('.errorMessage')) {
		var div = document.createElement('div');

		div.className = 'errorMessage';
		div.innerHTML = this.errorMessage;

		element.appendChild(div);
	}	
};

Validate.prototype.displayValidRemove = function() {
	var elementParent = document.getElementById(this.id).parentElement;

	if (elementParent.querySelector('.errorMessage')) {
		elementParent.removeChild(elementParent.querySelector('.errorMessage'));
	}	
};


function Form(id, valids) {
	this.id = id;
	this.valids = valids;
};

Form.prototype.giveValid = function() {
	var flag = true;
	var id = this.id;
	this.valids.forEach(function (valid) {
		var element = document.getElementById(valid.id);
		if (element) {
			var form = $(element).closest('form');
			if ($(form).attr('id') === id) {
				if (valid instanceof Validate) {
				if (!valid.makeValid()) {
					valid.displayValid();
					flag = false;
				} else {
					valid.displayValidRemove();
				}
			}
			}
		}
	}); 

	return flag;
};