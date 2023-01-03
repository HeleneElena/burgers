const getCart = () => { // получение корзины
    const cartList = localStorage.getItem('cart');  // список товаров получаю из локалстр

    if (cartList) {  // если первый раз юзер зашел и пусто или нет
        return JSON.parse(cartList); // распарсим наши товары
    } else {
        return []; // иначе вернем пустую корзину
    }
};

const updateCartList = (cartList) => { // обновить корзину
    localStorage.setItem('cart', JSON.stringify(cartList)) // приведем в строку наш объект/товар
};

const addCart = (id, count = 1) => { // добавить в корзину (добавим не весь товар, а  id и количество)

};

const removeCart = (id) => { // удалить из корзины

};

const cartController = () => { // наша контрольная функция, где отслеживание событий

};

export const cartInit = () => { // метод запуска всей нашей корзины
    cartController();
};