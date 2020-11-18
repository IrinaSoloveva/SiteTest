class Product {
    constructor(id, title, price, img, container){
        this.id = id;
        this.title = title;
        this.price = price;
        this.img = img;
        this.container = container;
        this._render();
    }
    _render(){
        let $wrapper = $('<div/>', {
            class: 'block productSiteRight-bottom__block'
        });
        let $image = $('<a/>', {
            href: 'singlePage.html',
            class: 'product'
        });
        let $imgProduct = $('<img/>', {
            src: this.img,
            class: 'productFoto'
        });
        let $productInf = $('<div/>', {
            class: 'productInf'
        });
        let $name = $('<p/>', {
            text: this.title,
            class: 'productName tac'
        });
        let $price = $('<span/>', {
            text: `$${this.price}`,
            class: 'productPrice'
        });
        let $productBtn = $('<div/>', {
            class: 'add-to-cart'
        });
        let $hrefBtn = $('<a/>', {
            href: '#',
            class: 'add-to-cart-btn tac'
        });
        let $imgBtn = $('<img/>', {
            src: 'img/product/copyBasket.png'
        });
        let $textBtn = $('<span/>', {
          text: 'Add to Cart'
        });

        //Создаем структуру товара
        $imgBtn.appendTo($hrefBtn);
        $textBtn.appendTo($hrefBtn);
        $hrefBtn.appendTo($productBtn);

        $name.appendTo($productInf);
        $price.appendTo($productInf);

        $imgProduct.appendTo($image);
        $productInf.appendTo($image);

        $image.appendTo($wrapper);
        $productBtn.appendTo($wrapper);

        $(this.container).append($wrapper);
    }
}

// <div class="block productSiteRight-bottom__block">
//   <a href="singlePage.html" class="product">
//   <img class="productFoto" src="img/product/Layer%202.jpg">
//   <div class="productInf">
//   <p class="productName tac">Mango  People  T-shirt</p>
// <span class="productPrice">$52.00</span>
// </div>
// </a>
// <div class="add-to-cart">
//   <a href="#" class="add-to-cart-btn tac">
//   <img src="img/product/copyBasket.png">
//   <span>Add to Cart</span>
// </a>
// </div>
// </div>