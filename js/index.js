import { catalogList, modalProduct } from "./elements.js";
import { openModal } from './openModal.js';
import { navigationListController } from './navigationListController.js';

const product = {
    title: 'бургер Oppa-pa',
    price: 222,
    weight: 200,
    calories: 1500,
    description: 'большой классный бургер, самый популярный в нашем магазине',
    image: 'img/burger4.jpg',
    ingredients: ['brot', 'butter', 'chicken'],
};

export const createCardProduct = (product) => {
    const li = document.createElement('li');
    li.classList.add('.catalog__item');
    li.innerHTML = `
        <article class="product">
            <img class="product__image" src="${product.image}" alt="${product.title}">

            <p class="product__price">${product.price}<span class="currency"> ₽</span></p>

            <h3 class="product__title">
                <button class="product__detail">${product.title}</button>
            </h3>

            <p class="product__weight">${product.weight} г</p>

            <button class="product__add">Добавить</button>
        </article>
    `;
    return li;
};

const cards = [
    createCardProduct(product),
    createCardProduct(product),
    createCardProduct(product)
];

catalogList.append(...cards);

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
    navigationListController();
};
init();











