class SubscribeComment {
  constructor(id, img, text, name, city, container = '.subscribeHalfLeft'){
    this.id = id;
    this.img = img;
    this.text = text;
    this.name = name;
    this.city = city;
    this.container = container;
    this._render();
  }
  _render(){
    let $aside = $('<aside/>');
    let $wrapper = $('<div/>', {
      class: 'subscribeComment'
    });
    let $imgUser = $('<img/>', {
      src: this.img
    });
    let $commentText = $('<div/>', {
      class: 'subscribeCommentText'
    });
    let $userText = $('<p/>', {
      text: this.text,
      class: 'subscribeCommentUserText'
    });
    let $userName = $('<p/>', {
      text: this.name,
      class: 'subscribeCommentUserName'
    });
    let $userCountry = $('<p/>', {
      text: this.city,
      class: 'subscribeCommentUserCountry'
    });

    //Создаем структуру товара
    $userText.appendTo($commentText);
    $userName.appendTo($commentText);
    $userCountry.appendTo($commentText);

    $imgUser.appendTo($wrapper);
    $commentText.appendTo($wrapper);

    $wrapper.appendTo($aside);

    $(this.container).append($aside);
  }
}

// <div class="subscribeHalfLeft">
//   <aside>
//   <div class="subscribeComment">
//   <img src="img/Subscribe/userFoto.png">
//   <div class="subscribeCommentText">
//   <p class="subscribeCommentUserText">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
// <p class="subscribeCommentUserName">Bin Burhan</p>
// <p class="subscribeCommentUserCountry">Dhaka, Bd</p>
// </div>
// </div>
// </aside>
// </div>