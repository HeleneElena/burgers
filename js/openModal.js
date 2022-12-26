import { ingredientsList,
    modalProductTitle,
    modalProductImage,
    modalProductDescription,
    ingredientsCalories,
    productPriceCount 
} from "./elements.js";

export const openModal = (product) => {
    modalProductTitle.textContent = product.title;
    modalProductImage.src = product.image;
    modalProductDescription.textContent = product.description;
    ingredientsCalories.textContent = `${product.weight} г, калл ${product.calories}`;
    productPriceCount.textContent = product.price;
    ingredientsList.textContent = '';

    const iningredientsListItem = product.ingredients.map(el => {
        const li = document.createElement('li');
        li.classList.add('ingredients__item');
        li.textContent = el;
        return li;
    });
    ingredientsList.append(...iningredientsListItem);
};