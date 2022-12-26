const modalProduct = document.querySelector('.modal_product'),
      modalClose = document.querySelector('.modal__close'),
      countMinus = document.querySelector('.count__minus'),
      countAmount = document.querySelector('.count__amount'),
      countPlus = document.querySelector('.count__plus'),
      catalogList = document.querySelector('.catalog__list'),
      productImage = document.querySelector('.product__image');

const modalProductTitle = document.querySelector('.modal-product__title'),
      modalProductImage = document.querySelector('.modal-product__image'),
      modalProductIngredients = document.querySelector('.modal-product__ingredients'),
      modalProductDescription = document.querySelector('.modal-product__description'),
      ingredientsCalories = document.querySelector('.ingredients__calories'),
      ingredientsList = document.querySelector('.ingredients__list'),
      productPrice = document.querySelector('.product__price');

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
modalProductDescription.textContent = product.description;
ingredientsCalories.textContent = product.calories;
productPrice.textContent = product.price;
ingredientsList.textContent = '';

const iningredientsListItem = product.ingredients.map(el => {
    const li = document.createElement('li');
    li.classList.add('ingredients__item');
    li.textContent = el;
    ingredientsList.append(li);
});


catalogList.addEventListener('click', (e) => {
    let target = e.target;
    if (target.closest('.product__title') || target.closest('.product__image')) {
        modalProduct.classList.add('modal_open');
    }
});

modalClose.addEventListener('click', (e) => {
    let target = e.target;
    if (target.closest('.modal__close') || target.closest('.modal_product')) {
        modalProduct.classList.remove('modal_open');
    }
});






