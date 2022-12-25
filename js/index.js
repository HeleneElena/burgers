const modalProduct = document.querySelector('.modal_product'),
      modalClose = document.querySelector('.modal__close'),
      countMinus = document.querySelector('.count__minus'),
      countAmount = document.querySelector('.count__amount'),
      countPlus = document.querySelector('.count__plus'),
      catalogList = document.querySelector('.catalog__list');

const modalProductTitle = document.querySelector('.modal-product__title');
const modalProductImage = document.querySelector('.modal-product__image');
const modalProductIngredients = document.querySelector('.modal-product__ingredients');
const modalProductDescription = document.querySelector('.modal-product__description');
const ingredientsList = document.querySelector('.ingredients__list');
const ingredientsCalories = document.querySelector('.ingredients__calories');
const productPrice = document.querySelector('.product__price');

console.log(modalProductTitle);

      const product = {
        title: 'бургер Ура',
        price: 222,
        weight: 200,
        calories: 1500,
        description: 'большой классный бургер, самый популярный в нашем магазине',
        image: 'img/burger4.jpg',
        ingredients: ['brot', 'butter', 'chicken'],
      };

modalProductTitle.textContent = product.title;
modalProductImage.src = product.image;
productPrice.textContent = product.price;
ingredientsList.textContent = '';

for (let i = 0; i < product.ingredients.length; i++) {
    const li = document.createElement('li');
    li.textContent = product.ingredients[i];
    li.classList.add('ingredients__item');
    ingredientsList.append(li);
}


catalogList.addEventListener('click', (e) => {
    let target = e.target;
    if (target.closest('.product__detail') || target.closest('.product__image')) {
            modalProduct.style.display = 'block';
        }
});

modalClose.addEventListener('click', (e) => {
    modalProduct.style.display = 'none';
});




