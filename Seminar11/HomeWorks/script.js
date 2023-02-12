const contentEl = document.querySelector(".bottom_content");
const templateEl = document.querySelector(".template_content");
const buttonProductEL = document.querySelector(".button_product");

let current = 6;
let step = 0;
console.log(current);

buttonProductEL.addEventListener("click", addProduct);

function addProduct() {
if (step === -1 || current === -1) {
    buttonProductEL.textContent = 'Товара больше нет';
}
else {

  for (let i = step; i < current; i++) {
    const bottomContentItemEL = templateEl.content
      .querySelector(".bottom_content_item")
      .cloneNode(true);

    const imgEl = bottomContentItemEL.querySelector(".img_fetured");
    imgEl.src = info.product[i].image;

    const createDivEl = document.createElement("div");
    const headingFeturedEL =
      bottomContentItemEL.querySelector(".heading_fetured");
    headingFeturedEL.textContent = info.product[i].name + ' = ' + i + ' ';

    const pFeturedEL = bottomContentItemEL.querySelector(".p_fetured");
    pFeturedEL.textContent = info.product[i].description;

    const spanColorEL = bottomContentItemEL.querySelector(".span_color");
    spanColorEL.textContent = info.product[i].price + "$";

    createDivEl.appendChild(headingFeturedEL);
    createDivEl.appendChild(pFeturedEL);
    createDivEl.appendChild(spanColorEL);
    bottomContentItemEL.appendChild(createDivEl);
    contentEl.appendChild(bottomContentItemEL);
  }
  };

  if (current < info.product.length && step != -1) {
    current += 6;
    step += 6;
  }
  else {
    current = -1;
    step = -1;
  }
  console.log(current);
  console.log(step);
}

/* Здесь реализован вывод всех карточек товара. Не стал удалять. 

info.product.forEach((prod) => {
  const bottomContentItemEL = templateEl.content
    .querySelector(".bottom_content_item")
    .cloneNode(true);

  const imgEl = bottomContentItemEL.querySelector(".img_fetured");
  imgEl.src = prod.image;

  const createDivEl = document.createElement("div");
  const headingFeturedEL =
    bottomContentItemEL.querySelector(".heading_fetured");
  headingFeturedEL.textContent = prod.name;

  const pFeturedEL = bottomContentItemEL.querySelector(".p_fetured");
  pFeturedEL.textContent = prod.description;

  const spanColorEL = bottomContentItemEL.querySelector(".span_color");
  spanColorEL.textContent = prod.price + '$';

  createDivEl.appendChild(headingFeturedEL);
  createDivEl.appendChild(pFeturedEL);
  createDivEl.appendChild(spanColorEL);
  bottomContentItemEL.appendChild(createDivEl);
  contentEl.appendChild(bottomContentItemEL);
});*/
