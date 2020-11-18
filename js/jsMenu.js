"use strict";


function Container(id, className) {
  this.id = id;
  this.class = className;
}

Container.prototype.render = function () {
  var div = document.createElement('div');

  div.className = this.className;
  div.id = this.id;

  return div;
};

Container.prototype.remove = function () {
  document.getElementById(this.id).remove();
};


function Menu(id, className, items) {
  Container.call(this, id, className);

  this.items = items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.render = function () {
  var ul = document.createElement('ul');
  ul.className = this.class;
  ul.id = this.id;

  this.items.forEach(function (item) {
    if (item instanceof Container) {
      ul.appendChild(item.render());
    }
  });

  return ul;
}

function MenuInserted(id, className, items) {
  Menu.call(this, id, className, items);

}

MenuInserted.prototype = Object.create(Menu.prototype);
MenuInserted.prototype.render = function () {
  var ul = document.createElement('ul');
  ul.className = this.class;
  ul.id = this.id;

  this.items.forEach(function (item) {
    if (item instanceof MenuInserted) {
      ul.lastChild.appendChild(item.render());
    } else if (item instanceof Container) {
      ul.appendChild(item.render());
    }
  });

  return ul;
}


function MenuItem(href, className, label) {
  Container.call(this, '', className);

  this.href = href;
  this.label = label;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.render = function () {
  var li = document.createElement('li');
  var a = document.createElement('a');

  a.href = this.href;
  a.textContent = this.label;

  li.appendChild(a);
  li.className = this.class;

  return li;
}


function Caption(element, className, label) {
  Container.call(this, '', className);

  this.element = element;
  this.label = label;
}

Caption.prototype = Object.create(Container.prototype);
Caption.prototype.render = function () {
  var elem = document.createElement(this.element);

  elem.innerHTML = this.label;
  elem.className = this.class;

  return elem;
}

function ImageItem(className, src) {
  Container.call(this, '', className);

  this.src = src;
}

ImageItem.prototype = Object.create(Container.prototype);
ImageItem.prototype.render = function () {
  var elem = document.createElement('img');

  elem.src = this.src;
  elem.className = this.class;

  return elem;
}

function InputItem(className, type, value, placeholder) {
  Container.call(this, '', className);

  this.type = type;
  this.value = value;
  this.placeholder = placeholder;
}

InputItem.prototype = Object.create(Container.prototype);
InputItem.prototype.render = function () {
  var elem = document.createElement('input');

  elem.className = this.class;
  elem.type = this.type;
  elem.value = this.value;
  elem.placeholder = this.placeholder;

  return elem;
}