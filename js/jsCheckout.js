"use strict";


(function($) {
  $(function() {

    let authorization = new Authorization();

  	// $('#registerForm').on('submit', function(event) {
  	// 	event.preventDefault();
		//
  	// 	var idForm = $(this).attr('id');
  	// 	var emailForm = $('#email').val();
  	//
  	// 	getResult('http://localhost:3000/validate', function(validate) {
    // 		validate = validate.map(function(val) {
    // 			return new Validate(val.id, val.pattern, val.errorMessage)
    //   		})
    // 		var formValid = new Form(idForm, validate);
		//
    // 		//данные корректны
    // 		if (formValid.giveValid()) {
    // 			getResult('http://localhost:3000/user?email=' + emailForm, function(itemsFiltr) {
  	// 				// email оригинален, регистрация
  	// 				if (itemsFiltr.length === 0) {
		//
  	// 					var cookieValue = generateRandomString(8);
  	// 					setCookie('login', cookieValue, 2);
  	// 					console.log(document.cookie);
		//
  	// 					$.ajax({
    // 						url: 'http://localhost:3000/user',
    // 						dataType: 'json',
    // 						type: 'POST',
    // 						headers: {
    //   							'content-type': 'application/json',
    // 						},
    // 						data: JSON.stringify({
    //  							email: emailForm,
    //   							userPassword: $('#userPassword').val(),
    //   							cookie: cookieValue,
    //   							firstName: "",
    //   							lastName: "",
    //   							birthday: "",
    //   							city: "",
    //   							phone: ""
    // 						}),
    // 						success: function() {
    // 							document.location.reload(true);
    //   							var $i = $('<i />', {
    //       								class: 'fas fa-check',
    //     							});
  	// 							$('#checkBlock01').append($i);
  	// 							$('#checkNone01').slideToggle();
  	// 							$('#checkNone02').slideToggle();
    // 						}
  	// 					})
		//
  	// 				} else {
  	// 				// email существует, ошибка
  	// 					var element =  $('#email').parent();
		// 				var $div = $('<div /', {
		// 					class: 'errorMessage',
		// 					text: 'Этот адрес уже используется'
		// 				});
		// 				element.append($div);
  	// 				}
  	// 			});
    // 		}
  	// 	});
  	// });
		//
  	// $('#userContactForm').on('submit', function(event) {
  	// 	event.preventDefault();
  	// 	var idForm = $(this).attr('id');
  	//
  	// 	getResult('http://localhost:3000/validate', function(validate) {
    // 		validate = validate.map(function(val) {
    // 			return new Validate(val.id, val.pattern, val.errorMessage)
    //   		})
    // 		var formValid = new Form(idForm, validate);
		//
    // 		//данные корректны
    // 		if (formValid.giveValid()) {
		//
    // 			var cookieLogin = getCookie('login');
    // 			console.log(cookieLogin);
		//
    // 			//пользователь авторизован
    // 			if (cookieLogin) {
    // 				getResult('http://localhost:3000/user?cookie=' + cookieLogin, function(item){
  	// 					var cookieID = item[0].id;
  	// 					console.log(cookieID);
  	// 					$.ajax({
    // 						url: 'http://localhost:3000/user/' + cookieID,
    // 						type: 'PATCH',
    // 						headers: {
    //   							'content-type': 'application/json',
    // 						},
    // 						data: JSON.stringify({
    //  							firstName: $('#firstName').val(),
    //   							lastName: $('#lastName').val(),
    //   							birthday: $('#birthday').val(),
    //   							city: $('#city').val(),
    //   							phone: $('#phone').val()
    // 						}),
    // 						success: function() {
    //   							var $i = $('<i />', {
    //       							class: 'fas fa-check',
    //     						});
  	// 							$('#checkBlock02').append($i);
  	// 							$('#checkNone02').slideToggle();
    // 						}
  	// 					})
  	// 				});
		//
	  //   		}
		//
		//
    // 		}
    // 	});
  	// });

  });
})(jQuery);
