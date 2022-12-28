import {
    modalProduct,
    modalClose,
    catalogList,
} from './elements.js';

import { openModal } from './openModal.js';
import { renderListProduct } from './renderListProduct.js';
import { navigationListController } from './navigationListController.js';

const product = {
    title: 'бургер Ура',
    price: 222,
    weight: 200,
    calories: 1500,
    description: 'большой классный бургер, самый популярный в нашем магазине',
    image: 'img/burger4.jpg',
    ingredients: ['brot', 'butter', 'chicken'],
};


catalogList.addEventListener('click', (e) => {
    let target = e.target;
    if (target.closest('.product__detail') || target.closest('.product__image')) {
        modalProduct.classList.add('modal_open');
        openModal(product);
    }
});

modalClose.addEventListener('click', (e) => {
    let target = e.target;
    if (target.closest('.modal__close') || target.closest('.modal__main')) {
        modalProduct.classList.remove('modal_open');
    }
});

const init = () => {
    renderListProduct();
    navigationListController();
};
init();






