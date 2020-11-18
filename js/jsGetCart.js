class Cart {
    constructor(source, container = '#productTableUnitContainer'){
      this.source = source;
      this.container = container;
      this.countGoods = 0; // Общее кол-во товаров в корзине
      this.amount = 0; // Общая стоимость товаров
      this.cartItems = []; // Массив с товарами
      this._init(this.source);
    }

    _renderItem(product, quantity){
      let $productTableUnit = $('<div/>', {
        class: 'productTableUnit',
        'data-article': product.article,
        'data-price': product.price
    });
      let $productTableLeft = $('<div/>', {
        class: 'productTableLeft',
      });
      let $productTableLeftFlex = $('<div/>', {
        class: 'productTableLeft-flex',
      });
      let $productTableRight = $('<div/>', {
        class: 'productTableRight',
      });

      $productTableLeftFlex.append($(`<img src="${product.srcMedium}"></img>`));

      let $containerProductTableLeftText = $('<div/>', {
        class: 'productTableLeft-text',
      });
      $containerProductTableLeftText.append($(`<a href="singlePage.html">${product.name}</a>`));

      $containerProductTableLeftText.append($(`<p>Color: <span>${product.ColorName}</span></p>`));
      $containerProductTableLeftText.append($(`<p>Size: <span>${product.size}</span></p>`));

      $productTableLeftFlex.append($containerProductTableLeftText);

      $productTableRight.
          append($(`<div class="productTableRight-flex"><span>$${product.price}</span></div>`));
      $productTableRight.
          append($(`<div class="productTableRight-flex"><input class="quantity" type="number" value="${quantity}"></div>`));
      $productTableRight.
          append($(`<div class="productTableRight-flex"><span>${product.shipping}</span></div>`));
      $productTableRight.
          append($(`<div class="productTableRight-flex"><span class="price">$${product.price * quantity}</span></div>`));
      $productTableRight.
          append($(`<div class="productTableRight-flex"><button class="delete">+</button></div>`));

      $productTableLeftFlex.appendTo($productTableLeft);
      $productTableLeft.appendTo($productTableUnit);
      $productTableRight.appendTo($productTableUnit);

      $productTableUnit.appendTo($(this.container));
    }
    _renderSum(){
      $('#subTotalCart').text(this.countGoods);
      $('#grandTotalCart').text(this.amount);
    }
    _init(source){
      fetch(source)
        .then(result => result.json())
        .then(data => {
          for (let item of data.basket){
            let product = data.goods.find(product => product.article === item.article);
            this.cartItems.push(item);
            this._renderItem(product, item.quantity);
            this.countGoods += +item.quantity;
            this.amount += item.quantity * product.price;
          }
          this._renderSum();
        })
    }
    _updateCart(product, price){
        let $container = $(`div[data-article="${product.article}"]`);
        $container.find('.price').text(`$${price * product.quantity}`);
    }
    addProduct(element, price){
        let parentElem = $(element).closest('.productTableUnit');
        let productArticle = $(parentElem).data('article');
        let productPrice = $(parentElem).data('price');
        let quantityElem = $(element).val();

        let find = this.cartItems.find(product => product.article == productArticle);
        if (find){
          let difference = find.quantity - quantityElem;
          this.countGoods -= difference;
          this.amount -= productPrice * difference;
          find.quantity = quantityElem;
          this._updateCart(find, productPrice);
        }
        this._renderSum();
    }
  remove(element){
      let parentElem = $(element).closest('.productTableUnit');
      let productArticle = $(parentElem).data('article');
      let productPrice = $(parentElem).data('price');

      let find = this.cartItems.find(product => product.article == productArticle);
      if (find){
        let quantityElem = find.quantity;
        let ind = this.cartItems.indexOf(find);
        this.countGoods -= quantityElem;
        this.amount -= productPrice * quantityElem;
        this.cartItems.splice(ind, 1);
        parentElem.remove();
      }
      this._renderSum();
  }
}