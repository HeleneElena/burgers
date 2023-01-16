import { API_URL, PREFIX_PRODUCT } from "./const.js";
import { catalogList, countAmount, modalProductBtn, orderCount, orderList } from "./elements.js";
import { getData } from "./getData.js";

// bekommen Daten in Korb
const getCart = () => {
    const cartList = localStorage.getItem('cart');
    if (cartList) {
        return JSON.parse(cartInit);
    } else {
        return [];
    }
};

const renderCartList = async () => {
    const cartList = getCart();
    const product = cartList.find(el => el.id === id);  // dies ist das Produkt, das in den Warenkorb gelegt werden soll
    if (product) {

    } else {
        
    }
};

const updateCart = (cartList) => {
    localStorage.setItem('cart', JSON.stringify(cartList));
    renderCartList();
};

//zum Warenkorb hinzufügen
const addCart = (id, count = 1) => {
    console.log(id, count);
};

//einen Artikel aus dem Warenkorb entfernen
const removeCart = (id) => {

};

// unsere Events, Ereignis
const cartController = () => {
    catalogList.addEventListener('click', ({ target }) => { // Button "Add"
        if (target.closest('.product__add')) {
            addCart(target.closest('.product').dataset.idProduct);
        }
    });

    modalProductBtn.addEventListener('click', () => { // Button "Add" in Korb
        addCart(
            modalProductBtn.dataset.idProduct,
            parseFloat(countAmount.textContent),
        );
    });
};

// Initialisierung des Warenkorbs
export const cartInit = () => {
    cartController();
};