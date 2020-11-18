"use strict";

/**
 * @property {string} previewSelector Селектор обертки для селекта.
 * @property {string} containerSelector Селектор обертки для пунктов меню селекта.
 * @property {string} viewSelectionSelector Селектор обертки для заголовка селекта.
 * @property {string} containerColorSelector Селектор обертки для образцов цвета меню.
 * @property {string} displayItemSelector Селектор выбранного пункта меню.
 */
class MySelectClass {
	constructor(previewSelector = 'mySelectContainer',
              containerSelector = 'mySelect',
              viewSelectionSelector = '.mySelectTitle',
              containerColorSelector = '.mySelectColor',
              displayItemSelector = 'displayItemMySelect') {

    this.previewSelector = previewSelector;
    this.containerSelector = containerSelector;
    this.viewSelectionSelector = viewSelectionSelector;
    this.containerColorSelector = containerColorSelector;
    this.displayItemSelector = displayItemSelector;

		this._init();
	}

	_init() {
    const mySelectContainer = document.querySelectorAll(`.${this.containerSelector}`);

    this._initElement(mySelectContainer);

    for (let element of mySelectContainer) {
      element.addEventListener('click', event => this._containerClickHandler(event));
    }
	}

	_initElement(elements) {
      for (let elem of elements) {
        this._returnColorsMySelectMenu(elem);
        this._returnDisplayItemSelector(elem);
      }
	}

	//окрашивает пункты меню
  _returnColorsMySelectMenu(element) {
    const containers = element.querySelectorAll('a');

    for (let a of containers) {
      const elementChildren = a.querySelector(this.containerColorSelector);
      if (elementChildren) {
        elementChildren.style.background = a.textContent;
      }
    }
  }

  //назначает отображаемый в настоящий момент пункт меню
  _returnDisplayItemSelector(element) {
		//выбранному пункту меню назначается класс .displayItemMySelect
    const elementToDisplayItem = element.querySelector(`.${this.displayItemSelector}`);
    const titel = this._getViewSelectionContainer(element);

    //если выбран, меняем местами
    if (elementToDisplayItem) {
      this._fillElementToDisplayItem(elementToDisplayItem, titel);
    } else {
    	//если ничего не выбрано, отображается первый элемент
      const firstElemOfContainer = element.querySelector('a');
      this._fillElementToDisplayItem(firstElemOfContainer, titel);
    }

  }

  //возвращает отображаемый в настоящий момент пункт меню
  _getViewSelectionContainer(element) {
    const titelContainer = this._containerSearch(element, this.previewSelector);
    return titelContainer.querySelector(this.viewSelectionSelector);
  }

  _containerSearch (element, className) {
    while (element) {
      if (element.classList.contains(className)) {
        return element;
      } else {
        element = element.parentElement;
      }
    }
    return null;
  }

  //меняет местами выбранный пользователем пункт меню и отображаемый в настоящий момент пункт
  _fillElementToDisplayItem(element, titel) {
    const cloneElement = element.cloneNode(true);
    const classElement = titel.classList;

    for (let i = 0; i < classElement.length; i++) {
      cloneElement.classList.toggle(classElement[i]);
    }

    const parentDiv = titel.parentNode;
    parentDiv.replaceChild(cloneElement, titel);
  }

  _containerClickHandler(event) {
    if (event.target.tagName !== 'A') {
      return;
    } else {
      this._runViewItemSelection(event.target);
    }
  }

  _runViewItemSelection(element) {
    const mySelectContainer = this._containerSearch(element, this.containerSelector);
    this._removeClassElementToDisplayItem(mySelectContainer);
    this._addClassElementToDisplayItem(element);
    this._returnDisplayItemSelector(mySelectContainer);
  }

  _removeClassElementToDisplayItem(element) {
    const containers = element.querySelectorAll(`.${this.displayItemSelector}`);

    for (let elem of containers) {
      elem.classList.remove(this.displayItemSelector);
    }
  }

  _addClassElementToDisplayItem(element) {
    element.classList.add(this.displayItemSelector);
  }

}

// <ul class="mySelectContainer">
//  <li><a href="#" onclick="return false" class="productMenuSinglePageBtn mySelectTitle"></a>
//   	<div class="arrow"></div>
//   	<div class="mega mySelectContainer__mega">
//   			<div class="mega-flex mySelectContainer__mega-flex mega-flex_light">
//   				<ul class="mySelect">
//  				 	<li><a href="#" onclick="return false"><div class="mySelectColor"></div>black</a></li>
// 					 	<li><a href="#" onclick="return false"><div class="mySelectColor"></div>blue</a></li>
// 					 	<li><a href="#" onclick="return false"><div class="mySelectColor"></div>pink</a></li>
// 					 	<li><a href="#" onclick="return false"><div class="mySelectColor"></div>white</a></li>
// 			  	</ul>
// 				</div>
// 			</div>
// 	</li>
// </ul>
  