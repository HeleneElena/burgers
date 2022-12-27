import {
    modalProductTitle,
    modalProductImage,
    modalProductDescription,
    ingredientsCalories,
    ingredientsList,
    productPriceCount,
    modalProduct
} from './elements.js';

export const openModal = (product) => {
    modalProductTitle.textContent = product.title;
    modalProductImage.src = product.image;
    modalProductDescription.textContent = product.description;
    ingredientsCalories.textContent = `${product.weight} г, ккал ${product.calories}`;
    productPriceCount.textContent = product.price;
    ingredientsList.textContent = '';

    const ingredientsItem = product.ingredients.map(el => {
        const li = document.createElement('li');
        li.classList.add('ingredients__item');
        li.textContent = el;
        return li;
    });

    ingredientsList.append(...ingredientsItem);

    modalProduct.classList.add('modal_open');
};