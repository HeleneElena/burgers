import { getData } from './getData.js';
import { API_URL, PREFIX_PRODUCT } from './const.js';

export const renderListProduct = async () => {
    const listProduct = await getData(`${API_URL}${PREFIX_PRODUCT}`);
    console.log(listProduct);
};