
document.addEventListener('click', basketDrop); 
//let count = Object.keys(basketCart).length;

function basketDrop (e) {  
  if (e.target.classList.contains('in_basket')){    
    if (!basketCart[e.target.dataset.id]) {
      basketCart[e.target.dataset.id] = 1;
      e.target.textContent = 'Добавлено';
      
      console.log(showCount());
    }
    else {console.log('уже в корзине'); return;}  
    
  };
};

function showCount () {
  let sum = 0;
 // if (Object.keys(basketCart).length != 0){
    for (let salary of Object.values(basketCart)) {
      sum += salary;
    }
    
 // };
  return sum;
};

function addCart (addItem) {
  const sectionBasketEl = document.querySelector('.section_basket');
  const createCardInBasket = document.createElement('div');
  createCardInBasket.classList.add('new_item_basket');
}

/*
const buttonInBasketEL = document.querySelectorAll('.in_basket');
buttonInBasketEL.forEach(element => {
  element.addEventListener('click', e => {
    console.log(e.target);
  })
});
*/






// Показывает карточки при нажатии кнопки "Показать еще"

const contentEl = document.querySelector(".bottom_content");
const templateEl = document.querySelector(".template_content");
const buttonProductEL = document.querySelector(".button_product");

const visibleCount = 6;
let current = visibleCount;
addProduct();

buttonProductEL.addEventListener('click', addProduct);

function addProduct() {  
  if (current > info.product.length) {
    buttonProductEL.textContent = 'Товара больше нет';
    return;
  }
  
  const itemsToAdd = info.product.slice(current - visibleCount, current);

  itemsToAdd.forEach((item) => {
    const bottomContentItemEL = templateEl.content
      .querySelector('.bottom_content_item_card')
      .cloneNode(true);      
    
    //bottomImgBasketEl.innerHTML =  ``;
    bottomContentItemEL.querySelector('.in_basket').dataset.id = item.id;
    bottomContentItemEL.querySelector('.heading_fetured').textContent = item.name;
    bottomContentItemEL.querySelector('.p_fetured').textContent = item.description;
    bottomContentItemEL.querySelector('.span_color').textContent = item.price;
    bottomContentItemEL.querySelector('.img_fetured').src = item.image;    

    contentEl.appendChild(bottomContentItemEL);
  
  });
  current += visibleCount;  
};







// выпадаюее меню в навигации
const navDropMenuEl = document.querySelector('.nav_drop_menu');
const dropMenuEl = document.querySelector('.drop_menu');

navDropMenuEl.addEventListener('click', e => {
    dropMenuEl.classList.toggle('menu_block');   
});

dropMenuEl.addEventListener('mouseleave', e =>{
    dropMenuEl.classList.add('menu_block');
});