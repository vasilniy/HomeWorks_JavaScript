const contentEl = document.querySelector(".bottom_content");
const templateEl = document.querySelector(".template_content");

console.log(contentEl);
console.log(templateEl);

info.product.forEach((prod) => {
    const bottomContentItemEL = templateEl.content
      .querySelector(".bottom_content_item")
      .cloneNode(true);

      const imgEl = bottomContentItemEL.querySelector(".img_fetured");       
      imgEl.src = prod.image;

      const createDivEl = document.createElement('div');
      const headingFeturedEL = bottomContentItemEL.querySelector(".heading_fetured");
      headingFeturedEL.textContent = prod.name;

      contentEl.appendChild(bottomContentItemEL);

    });  