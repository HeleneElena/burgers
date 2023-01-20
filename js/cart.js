import { API_URL, PREFIX_PRODUCT } from "./const.js";
import { catalogList, countAmount, modalProductBtn, orderCount, orderList } from "./elements.js";
import { getData } from "./getData.js";

// bekommen Daten in Korb
const getCart = () => { // получение корзины
    const cartList = localStorage.getItem('cart');  // список товаров получаю из локалстр

    if (cartList) {  // если первый раз юзер зашел и пусто или нет, если не пустой, то получим массив товаров
        return JSON.parse(cartList); // распарсить товары
    } else {
        return []; // иначе вернется пустая корзина
    }
};

const renderCartList = async () => {
    const cartList = getCart();
    console.log(cartList);

    const allProduct = cartList.map(el => el.id); // получаем все id в корзине которые
    const data = await getData(`${API_URL}${PREFIX_PRODUCT}?list=${allProduct}`);

    const countProduct = cartList.reduce((acc, el) => acc + el.count , 0); // общее кол-во товара в корзине
    orderCount.textContent = countProduct;

    const cartEl = data.map(el => {
        const li = document.createElement('li');
        li.classList.add('order__item');
        li.dataset.idProduct = el.id;

        const product = cartList.find(cartEl => cartEl.id === el.id);

        li.innerHTML = `
            <img src="${API_URL}/${el.image}" alt="${el.title}" class="order__image">
            <div class="order__product">
                <h3 class="order__product-title">${el.title}</h3>
                <p class="order__product-weight">${el.weight} г</p>
                <p class="order__product-price">${el.price} ₽</p>
            </div>
            <div class="order__product-count count">
                <button class="count__minus">-</button>
                <p class="count__amount">${product.count}</p>
                <button class="count__plus">+</button>
            </div>
        `;
        return li;
    });
    orderList.append(...cartEl);

};

const updateCartList = (cartList) => { // обновить корзину
    localStorage.setItem('cart', JSON.stringify(cartList)); // приводит в строку объект/товар
    renderCartList();
};

const addCart = (id, count = 1) => { // добавить в корзину (добавим не весь товар, а  id и количество)
    const cartList = getCart();
    const product = cartList.find(el => el.id === id);

    if(product) {
        product.count += count;
    } else {
        cartList.push({id, count});
    }
    updateCartList(cartList);

};

const removeCart = (id) => { // удалить из корзины

};

const cartController = () => { // контрольная функция, где отслеживание событий
    catalogList.addEventListener('click', ({ target }) => {
        if (target.closest('.product__add')) {
            addCart(target.closest('.product').dataset.idProduct);
        }
    });

    modalProductBtn.addEventListener('click', () => {
        addCart(
            modalProductBtn.dataset.idProduct,
            parseInt(countAmount.textContent),
        );
    });
};

export const cartInit = () => { // метод запуска всей корзины
    cartController();
    renderCartList();
};