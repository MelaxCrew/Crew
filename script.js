const catalogElement = document.getElementById('catalog');
const previewContainer = document.getElementById('preview-container');
const previewContent = document.getElementById('preview-content');

// Ejemplo de datos con URL de gatitos
const products = [
  { name: 'Gatito 1', image: 'https://placekitten.com/200/200' },
  { name: 'Gatito 2', image: 'https://placekitten.com/201/200' },
  { name: 'Gatito 3', image: 'https://placekitten.com/202/200' },
  { name: 'Gatito 4', image: 'https://placekitten.com/203/200' },
  { name: 'Gatito 5', image: 'https://placekitten.com/204/200' },
  { name: 'Gatito 6', image: 'https://placekitten.com/205/200' },
  { name: 'Gatito 7', image: 'https://placekitten.com/206/200' },
  { name: 'Gatito 8', image: 'https://placekitten.com/207/200' },
  { name: 'Gatito 9', image: 'https://placekitten.com/208/200' },
  { name: 'Gatito 10', image: 'https://placekitten.com/209/200' },
  { name: 'Gatito 11', image: 'https://placekitten.com/210/200' },
  { name: 'Gatito 12', image: 'https://placekitten.com/211/200' },
];

// Crear elementos de producto y agregar al catálogo
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

// Agrega un manejador de clic para las imágenes del catálogo
catalogElement.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    const imageSrc = event.target.src;
    openPreviewWithArrows(imageSrc);
  }
});

// Función para abrir la vista previa con flechas
function openPreviewWithArrows(imageSrc) {
  const currentIndex = products.findIndex(product => product.image === imageSrc);

  // Limpia el contenido existente
  previewContent.innerHTML = '';

  // Crea la imagen y agrega al contenedor de vista previa
  const previewImage = document.createElement('img');
  previewImage.src = imageSrc;
  previewImage.classList.add('preview-image');
  previewContent.appendChild(previewImage);

  // Agrega las flechas de desplazamiento
  const prevButton = document.createElement('button');
  prevButton.textContent = '❮';
  prevButton.classList.add('prev-btn');
  prevButton.addEventListener('click', () => showPrevImage(currentIndex));
  previewContent.appendChild(prevButton);

  const nextButton = document.createElement('button');
  nextButton.textContent = '❯';
  nextButton.classList.add('next-btn');
  nextButton.addEventListener('click', () => showNextImage(currentIndex));
  previewContent.appendChild(nextButton);

  // Agrega el botón de cierre
  const closeButton = document.createElement('div');
  closeButton.textContent = '✕';
  closeButton.classList.add('close-btn');
  closeButton.addEventListener('click', closePreview);
  previewContent.appendChild(closeButton);

  // Muestra el contenedor de vista previa
  previewContainer.style.display = 'flex';
}

// Función para cerrar la vista previa
function closePreview() {
  previewContainer.style.display = 'none';
}

// Función para mostrar la imagen anterior
function showPrevImage(currentIndex) {
  const prevIndex = (currentIndex - 1 + products.length) % products.length;
  const prevImageSrc = products[prevIndex].image;
  openPreviewWithArrows(prevImageSrc);
}

// Función para mostrar la siguiente imagen
function showNextImage(currentIndex) {
  const nextIndex = (currentIndex + 1) % products.length;
  const nextImageSrc = products[nextIndex].image;
  openPreviewWithArrows(nextImageSrc);
}
