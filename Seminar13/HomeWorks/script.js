const contentEl = document.querySelector(".bottom_content");
const templateEl = document.querySelector(".template_content");
const buttonProductEL = document.querySelector(".button_product");

const visibleCount = 6;
let current = visibleCount;

buttonProductEL.addEventListener('click', addProduct);

function addProduct() {
  if (current + visibleCount > info.product.length) {
    buttonProductEL.textContent = 'Товара больше нет';
    return;
  }

  const itemsToAdd = info.product.slice(current - visibleCount, current);

  itemsToAdd.forEach((item) => {
    const bottomContentItemEL = templateEl.content
      .querySelector('.bottom_content_item')
      .cloneNode(true);
  })
}







// выпадаюее меню в навигации
const navDropMenuEl = document.querySelector('.nav_drop_menu');
const dropMenuEl = document.querySelector('.drop_menu');

navDropMenuEl.addEventListener('click', e => {
    dropMenuEl.classList.toggle('menu_block');   
});

dropMenuEl.addEventListener('mouseleave', e =>{
    dropMenuEl.classList.add('menu_block');
});