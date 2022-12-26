import {modalProduct,
    modalClose,
    catalogList
} from './elements.js';

import { createCardProduct } from './createCardProduct.js';
import { openModal } from './openModal.js';

const product = {
    title: 'бургер Ура',
    price: 222,
    weight: 200,
    calories: 1500,
    description: 'большой классный бургер, самый популярный в нашем магазине',
    image: 'img/burger4.jpg',
    ingredients: ['brot', 'butter', 'chicken'],
};

openModal(product);

createCardProduct(product);

catalogList.textContent = '';

const card = [
    createCardProduct(product),
    createCardProduct(product),
    createCardProduct(product),
];

catalogList.append(...card);

catalogList.addEventListener('click', (e) => {
    let target = e.target;
    if (target.closest('.product__title') || target.closest('.product__image')) {
        modalProduct.classList.add('modal_open');
        openModal(product);
    }
});

modalClose.addEventListener('click', (e) => {
    let target = e.target;
    if (target.closest('.modal__close') || target.closest('.modal_product')) {
        modalProduct.classList.remove('modal_open');
    }
});






