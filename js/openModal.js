import {
    modalProductTitle,
    modalProductImage,
    modalProductDescription,
    ingredientsCalories,
    ingredientsList,
    productPriceCount
} from './elements.js';

export const openModal = (product) => {
    modalProductTitle.textContent = product.title;
    modalProductImage.src = product.image;
    modalProductDescription.textContent = product.description;
    ingredientsCalories.textContent = `${product.weight} г, ккал ${product.calories}`;
    productPriceCount.textContent = product.price;
    ingredientsList.textContent = '';

    const ingredientElem = product.ingredients.map(el => {
        const li = document.createElement('li');
        li.textContent = el;
        return li;
    });

    ingredientsList.append(...ingredientElem);
};
