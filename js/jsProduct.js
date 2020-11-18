window.onload = () => {

  let authorization = new Authorization();

  fetch('js/db.json')
    .then(result => result.json())
    .then(data => {
      for (let item of data.goods){
        let nameProduct = item.brand + ' ' + item.name;
        let product = new Product(item.id, nameProduct, item.price, item.srcMedium, '#productSiteRight-bottom');
      }
    });

};