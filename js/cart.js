import { catalogList, countAmount, modalProductBtn } from "./elements.js";

export const getCart = () => { // получение корзины
    const cartList = localStorage.getItem('cart');  // список товаров получаю из локалстр

    if (cartList) {  // если первый раз юзер зашел и пусто или нет, если не пустой, то получаем массив товаров
        return JSON.parse(cartList); // распарсим наши товары
    } else {
        return []; // иначе вернем пустую корзину
    }
};

const updateCartList = (cartList) => { // обновить корзину
    localStorage.setItem('cart', JSON.stringify(cartList)); // приведем в строку наш объект/товар
};

const addCart = (id, count = 1) => { // добавить в корзину (добавим не весь товар, а  id и количество)
    console.log(id, count);
};

const removeCart = (id) => { // удалить из корзины

};

const cartController = () => { // наша контрольная функция, где отслеживание событий
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

export const cartInit = () => { // метод запуска всей нашей корзины
    cartController();
};