const contentEl = document.querySelector(".bottom_content");
const templateEl = document.querySelector(".template_content");

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
});
