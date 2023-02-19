document.addEventListener('click', closeCardElement);
document.addEventListener('click', basketDrop); 

function basketDrop (e) {  
  if (e.target.classList.contains('in_basket')){    
    if (!basketCart[e.target.dataset.id]) {
      basketCart[e.target.dataset.id] = 1;
      e.target.textContent = 'Добавлено';
      addCart(e.target.dataset.id);
      console.log(showCount());
    }
    else {console.log('уже в корзине'); return;}  
    
  };  
};



function addCart (addItem) {
  const sectionBasketEl = document.querySelector('.section_basket');   
  const createCardInBasket = document.createElement('div');
  createCardInBasket.classList.add('new_item_basket');  
  
  info.product.forEach(e => {
    if (addItem == e.id){
      createCardInBasket.dataset.id = addItem;
      createCardInBasket.innerHTML = `
      <div class="close_card">
      <img class="close_card_img" data-id="${addItem}" src="img/closeCard.png">
      </div>
      <img class="img_fetured" src="${e.image}">  
      <h2 class="heading_fetured">${e.name}</h2>
      <p class="p_fetured">${e.description}</p>
      <p>Цена: <span class="span_color">${e.price}</span></p>
      <p>Количество: ${basketCart[addItem]}</p>
      `;    
    
    };
  });

  

  sectionBasketEl.appendChild(createCardInBasket);
}

function showCount () {
  let sum = 0;
  if (Object.keys(basketCart).length != 0){
    for (let salary of Object.values(basketCart)) {
      sum += salary;
    }
    const navBasketCountEl = document.querySelector('.nav_basket_count');
    navBasketCountEl.textContent = sum;
  };
  return sum;
};

function closeCardElement (e) {
  if (e.target.classList.contains('close_card_img')){    
    const deleteCard = document.querySelectorAll('.new_item_basket');
    deleteCard.forEach(del => {
      if (del.dataset.id == e.target.dataset.id){
        const changeButtonText = document.querySelectorAll('.in_basket');
        changeButtonText.forEach(change => {
          if (change.dataset.id == e.target.dataset.id) {
            change.textContent = "В корзину";          
          };
        });
        del.remove();        
        basketCart[e.target.dataset.id] = 0;             
        return;
      };
      
    })
  };
showCount(); 
}



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