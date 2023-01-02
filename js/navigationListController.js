import { 
  navigationList,
  navigationItems,
  catalogTitle
} from './elements.js';

export const navigationListController = (cb) => {
    navigationList.addEventListener('click', e => {
    const listElem = e.target.closest('.navigation__button');

    if (!listElem ) return;

      navigationItems.forEach(el => {
          if (el === listElem) {
              el.classList.add('navigation__button_active');
              catalogTitle.textContent = el.textContent;
              cb(el.dataset.category);
          } else {
              el.classList.remove('navigation__button_active');
          }     
          
      });
    });
};

