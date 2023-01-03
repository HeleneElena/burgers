import { getData } from './getData.js';
import {
    modalProductTitle,
    modalProductImage,
    modalProductDescription,
    ingredientsCalories,
    ingredientsList,
    productPriceCount
} from './elements.js';
import { API_URL, PREFIX_PRODUCT } from './const.js';

export const openModal = async (id) => {
    const product = await getData(`${API_URL}${PREFIX_PRODUCT}/${id}`);
    modalProductTitle.textContent = product.title;
    modalProductImage.src = `${API_URL}/${product.image}`;
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
