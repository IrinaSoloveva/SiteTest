window.onload = () => {

  let authorization = new Authorization();

  //Корзина
  let mycart = new Cart('js/db.json');

  //Добавление товара
  $('#productTableUnitContainer').on('click', '.quantity', e => {
    mycart.addProduct(e.target);
  })
  //Запрет ввода quantity с клавиатуры
  $('#productTableUnitContainer').on('keypress', '.quantity', e => {
    return false;
  })

  $('#productTableUnitContainer').on('click', '.delete', e => {
    mycart.remove(e.target);
  })

};