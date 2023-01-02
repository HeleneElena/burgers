import { 
  navigationList,
  navigationItems,
  catalogTitle
} from './elements.js';

export const navigationListController = () => {
    navigationList.addEventListener('click', e => {
    const listElem = e.target.closest('.navigation__button');

      navigationItems.forEach(el => {
          if (el === listElem) {
              el.classList.add('navigation__button_active');
              catalogTitle.textContent = el.textContent;
          } else {
              el.classList.remove('navigation__button_active');
          }     
          
      });
    });
};

