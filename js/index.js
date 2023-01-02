import { catalogList, modalProduct } from "./elements.js";
import { openModal } from './openModal.js';
import { navigationListController } from './navigationListController.js';
import { renderListProduct } from "./renderListProduct.js";

const product = {
    title: 'бургер Oppa-pa',
    price: 222,
    weight: 200,
    calories: 1500,
    description: 'большой классный бургер, самый популярный в нашем магазине',
    image: 'img/burger4.jpg',
    ingredients: ['brot', 'butter', 'chicken'],
};


catalogList.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.product__image') || target.closest('.product__title')) {
        modalProduct.classList.add('modal_open');
        openModal(product);
    } 
});

modalProduct.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.modal__close') || target === modalProduct) {
        modalProduct.classList.remove('modal_open');
    }
});

const init = () => {
    renderListProduct();
    navigationListController(renderListProduct);
};
init();











