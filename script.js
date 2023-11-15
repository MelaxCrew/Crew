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
    openPreview(imageSrc);
  }
});

// Función para abrir la vista previa
function openPreview(imageSrc) {
  // Limpia el contenido existente
  previewContent.innerHTML = '';

  // Crea la imagen y agrega al contenedor de vista previa
  const previewImage = document.createElement('img');
  previewImage.src = imageSrc;
  previewImage.classList.add('preview-image');
  previewContent.appendChild(previewImage);

  // Muestra el contenedor de vista previa
  previewContainer.style.display = 'flex';
}

// Cerrar la vista previa al hacer clic en ella
previewContainer.addEventListener('click', closePreview);

// Función para cerrar la vista previa
function closePreview() {
  previewContainer.style.display = 'none';
}
