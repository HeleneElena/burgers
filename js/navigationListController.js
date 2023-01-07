import { 
  navigationList,
  navigationItems,
  catalogTitle
} from './elements.js';

export const navigationListController = (cb) => {
  navigationList.addEventListener('click', e => {
    const categoryEls = e.target.closest('.navigation__button');

    navigationItems.forEach( el => { 
        if (!categoryEls) return;
        
        if (categoryEls === el) {
          el.classList.add('navigation__button_active');
          catalogTitle.textContent = el.textContent;
          cb(el.dataset.category);
        } else {
          el.classList.remove('navigation__button_active');
        }
      });
      
    });
};

