"use strict";


class Authorization {
  constructor() {
    this._render();
  }

  _render() {
    //строим главное меню
    let menu = new MenuInserted('menu', 'menu tac', [
      new MenuItem('index.html', '', 'Home'),
      new MenuItem('#', '', 'Man'),
      new MenuInserted('menu_mega', 'mega menu__mega', [
        new Caption('div', 'triangle', ''),
        new Menu('', 'mega-flex menu__mega-flex mega-flex_bright', [
          new Caption('h3', 'captionMega-flex', 'Women'),
          new MenuItem('#', '', 'Dresses'),
          new MenuItem('#', '', 'Tops'),
          new MenuItem('#', '', 'Sweaters/Knits'),
        ]),
        new Menu('', 'mega-flex menu__mega-flex mega-flex_bright', [
          new Caption('h3', 'captionMega-flex', 'Women'),
          new MenuItem('#', '', 'Dresses'),
          new MenuItem('#', '', 'Tops'),
          new MenuItem('#', '', 'Sweaters/Knits'),
          new MenuItem('#', '', 'Tops'),
          new MenuItem('#', '', 'Sweaters/Knits'),
        ]),
        new Menu('', 'mega-flex menu__mega-flex mega-flex_bright', [
          new Caption('h3', 'captionMega-flex', 'Women'),
          new MenuItem('#', '', 'Dresses'),
          new MenuItem('#', '', 'Tops'),
          new MenuItem('#', '', 'Sweaters/Knits'),
        ]),
      ]),
      new MenuItem('product.html', '', 'Women'),
      new MenuItem('product.html', '', 'Kids'),
      new MenuItem('product.html', '', 'Accoseriese'),
      new MenuItem('product.html', '', 'Featured'),
      new MenuItem('product.html', '', 'Hot Deals')
    ]);

    document.getElementById('mainNav').appendChild(menu.render());

    //строим меню Browse
    let menuBrowse = new Menu('', 'dropdownLeft', [
      new MenuItem('#', 'dropdownLeftText', 'Browse'),
      new MenuInserted('', 'mega dropdownLeft__mega', [
        new Caption('div', 'triangle', ''),
        new Menu('', 'mega-flex dropdownLeft__mega-flex mega-flex_bright', [
          new Caption('h3', 'captionMega-flex', 'Women'),
          new MenuItem('#', '', 'Dresses'),
          new MenuItem('#', '', 'Tops'),
          new MenuItem('#', '', 'Sweaters/Knits'),
        ]),
        new Menu('', 'mega-flex dropdownLeft__mega-flex mega-flex_bright', [
          new Caption('h3', 'captionMega-flex', 'Women'),
          new MenuItem('#', '', 'Dresses'),
          new MenuItem('#', '', 'Tops'),
          new MenuItem('#', '', 'Sweaters/Knits'),
          new MenuItem('#', '', 'Tops'),
          new MenuItem('#', '', 'Sweaters/Knits'),
        ]),
      ]),
    ]);

    document.getElementById('browseMenu').appendChild(menuBrowse.render());

    //строим корзину mega
    let basket = document.getElementById('megaBasket');
    let total = 0;
    let quantity = 0;
    let mega = new Menu('', 'mega', [new Caption('div', 'triangle', '')]).render();

    fetch('js/db.json')
      .then(result => result.json())
      .then(data => {
        for (let item of data.basket) {
          let product = data.goods.find(product => product.article === item.article);
          if (product) {
            let productMenu = new Menu('', 'mega-flex-basketBtn', [
              new ImageItem('', product.srcMin),
              new Menu('', 'productTableLeft-text mega-flex-basketBtn__productTableLeft-text', [
                new MenuItem('singlePage.html', '', 'mango people t-shirt'),
                new Caption('p', '', 'Color:&nbsp;' + product.ColorName),
                new Caption('p', '', 'Size:&nbsp;' + product.size),
              ]),
              new Menu('', 'productTableRight-flex mega-flex-basketBtn__productTableRight-flex', [
                new InputItem('', 'number', item.quantity, ''),
              ]),
              new Menu('', 'productTableRight-flex mega-flex-basketBtn__productTableRight-flex', [
                new Caption('span', '', product.price),
              ]),
              new Menu('', 'productTableRight-flex mega-flex-basketBtn__productTableRight-flex', [
                new Caption('button', '', '+'),
              ]),
            ]);

            total += product.price * item.quantity;
            quantity += +item.quantity;
            mega.appendChild(productMenu.render());
          }
          ;
        }
        ;

        let totalPrice = new Menu('', 'mega-flex-basketBtn basketBtnPrice', [
          new MenuInserted('', 'adress-coupon-butCheckInside-textBUY mega-flex-basketBtn__adress-coupon-butCheckInside-textBUY', [
            new Menu('', 'adress-coupon-butCheckInside-textFlex subPrice', [
              new Caption('p', '', 'Sub total'),
              new Caption('p', '', quantity),
            ]),
            new Menu('', 'adress-coupon-butCheckInside-textFlex grandPrice', [
              new Caption('p', '', 'GRAND TOTAL'),
              new Caption('span', '', total),
            ]),
          ]),
        ]);

        mega.appendChild(totalPrice.render());
        basket.appendChild(mega);
      });

    //проверяем, есть ли авторизованный пользователь
    let cookieLogin = getCookie('login');
    console.log(cookieLogin);

    if (cookieLogin) {
      fetch('js/db.json')
        .then(result => result.json())
        .then(data => {
          let user = data.user.find(user => user.cookie === cookieLogin);
          //menu my Account
          let menuAccount = new Menu('', 'btnAccount', [
            new MenuItem('checkout.html', '', user.email, new MenuInserted('', 'mega dropdownLeft__mega', [
              new Caption('div', 'triangle', ''),
              new Menu('', 'mega-flex dropdownLeft__mega-flex mega-flex_bright', [
                new Caption('h3', 'captionMega-flex', 'Women'),
                new MenuItem('#', '', 'Мои заказы'),
                new MenuItem('#', '', 'Мои доставки'),
                new MenuItem('#', '', 'Sweaters/Knits'),
              ]),
              new Menu('', 'mega-flex dropdownLeft__mega-flex mega-flex_bright', [
                new Caption('h3', 'captionMega-flex', 'Women'),
                new MenuItem('#', '', 'Dresses'),
                new MenuItem('#', '', 'Tops'),
                new MenuItem('#', '', 'Sweaters/Knits'),
                new MenuItem('#', '', 'Tops'),
                new MenuItem('#', '', 'Sweaters/Knits'),
              ]),
            ]),
          ]);

          document.getElementById('btnAccountContainer').appendChild(menuAccount.render());
        })
      //нет авторизованного пользователя
    } else {
      //форма авторизации mega
      let menuAuthorizationForm = new Menu('', 'btnAccount', [
        new MenuItem('checkout.html', '', 'my account'),
        new MenuInserted('', 'mega btnAccount__mega', [
          new Caption('div', 'triangle', ''),
          new Caption('form', 'formAuthorizationHeader', '')
        ])
      ]);

      let menuAuthorizationInserted = new Menu('', '', [
        new Menu('', 'inputAuthorization', [
          new Caption('span', '', 'login'),
          new Caption('input', '', '')
        ]),
        new Menu('', 'inputAuthorization', [
          new Caption('span', '', 'password'),
          new InputItem('', 'password', '', '')
        ]),
        new Menu('', 'btnAuthorization', [
          new Caption('button', '', 'enter'),
          new MenuItem('checkout.html', '', 'registration'),
        ])
      ]);

      document.getElementById('btnAccountContainer').appendChild(menuAuthorizationForm.render());
      document.querySelector('.formAuthorizationHeader').appendChild(menuAuthorizationInserted.render());
    }

    //Отзовы в subscribe
    fetch('js/db.json')
      .then(result => result.json())
      .then(data => {
        let randElem = Math.floor(Math.random() * data.feedback.length);
        let feedback = data.feedback[randElem];
        let feedbackUser = data.user.find(user => user.id === feedback.userId);

        let comment = new SubscribeComment(feedback.id, feedbackUser.img, feedback.text,
          feedbackUser.firstName, feedbackUser.city);
      });

  }

  _initMenu() {
      fetch('js/db.json')
          .then(result => result.json())
          .then(data => {
              let menu = data.user.find(user => user.cookie === cookieLogin);
              for (let item of data.menuGreat) {

              }
          })
  }
}
