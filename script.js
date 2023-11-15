const catalogElement = document.getElementById('catalog');
const previewContainer = document.getElementById('preview-container');
const previewContent = document.getElementById('preview-content');

const products = [
  // ... (tu array de productos permanece igual)
];

products.forEach(product => {
  const productElement = document.createElement('div');
  productElement.classList.add('product');

  const imgElement = document.createElement('img');
  imgElement.src = product.image;
  imgElement.alt = product.name;

  const nameElement = document.createElement('p');
  nameElement.textContent = product.name;

  productElement.appendChild(imgElement);
  productElement.appendChild(nameElement);

  catalogElement.appendChild(productElement);
});

catalogElement.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    const imageSrc = event.target.src;
    openPreview(imageSrc);
  }
});

function openPreview(imageSrc) {
  previewContent.innerHTML = '';

  const previewImage = document.createElement('img');
  previewImage.src = imageSrc;
  previewImage.classList.add('preview-image');
  previewContent.appendChild(previewImage);

  previewContainer.style.display = 'flex';
}

previewContainer.addEventListener('click', closePreview);

function closePreview() {
  previewContainer.style.display = 'none';
}
