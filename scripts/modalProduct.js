import fetchCardProdutos from './showProducts.js'

function fetchModalProduct(productId) {

  const id = productId.match(/\d+/)[0];
  const imgMobile = document.getElementById('imgMobile');
  const imgTablet = document.getElementById('imgTablet');
  const imgDesktop = document.getElementById('imgDesktop');
  const productName = document.getElementById('productName');
  const productDescription = document.getElementById('productDescription');
  const productPrice = document.getElementById('productPrice');
  const productColors = document.getElementById('colorName');

  const divColors = document.querySelector('.product__colors');
  const divSizes = document.querySelector('.product__sizes');

  fetchCardProdutos()
    .then(products => {

      products.forEach(product => {
        if (product.id == id) {
          imgMobile.src = product.mobileSrc;
          imgTablet.src = product.tabletSrc;
          imgDesktop.src = product.desktopSrc;

          productName.textContent = product.title;
          productDescription.textContent = product.description;
          productPrice.textContent = `R$ ${product.price}`;

          divColors.innerHTML = '';
          divSizes.innerHTML = '';

          product.colors.forEach((colors, index) => {
            const colorList = colors.split(',').map(color => color.trim());

            colorList.forEach((color, subIndex) => {
              const div = document.createElement('div');
              div.classList.add('form-check', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center');

              const input = document.createElement('input');
              input.classList.add('input-radio-color', 'form-check-input', 'm-2');
              input.type = 'radio';
              input.name = `color${index + 1}`;
              input.id = `color${index + 1}-${subIndex + 1}`;

              const label = document.createElement('label');
              label.classList.add('sub-text', 'form-check-label');
              label.textContent = color;
              label.htmlFor = `color${index + 1}-${subIndex + 1}`;

              div.appendChild(input);
              div.appendChild(label);

              divColors.appendChild(div);

              if (subIndex === 0) {
                input.checked = true;
              }

            });
            
          });

          product.sizes.forEach((sizes, index) => {
            const sizeList = sizes.split(',').map(size => size.trim());

            sizeList.forEach((size, subIndex) => {
              const div = document.createElement('div');
              div.classList.add('form-check', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center');

              const input = document.createElement('input');
              input.classList.add('input-radio-size', 'form-check-input', 'm-2');
              input.type = 'radio';
              input.name = 'size';
              input.id = size;

              const label = document.createElement('label');
              label.classList.add('sub-text', 'form-check-label');
              label.textContent = size;
              label.htmlFor = size;

              div.appendChild(input);
              div.appendChild(label);

              divSizes.appendChild(div);

              if (index === 0) {
                input.checked = true;
              }

            });
          });
        }
      })
    })
}

function modalProduct() {

  const cardProduct = document.querySelector('[data-product]');
  const closeModal = document.getElementById('closeProductCard');

  document.addEventListener('click', function (event) {
    const target = event.target;
    const productId = event.target.parentNode.parentNode.id

    if (target.classList.contains('btn__product-detail')) {
      fetchModalProduct(productId)
      cardProduct.showModal()

    }
  });

  closeModal.addEventListener('click', () => cardProduct.close());
}

modalProduct();

