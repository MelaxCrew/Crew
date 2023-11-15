const catalogElement = document.getElementById('catalog');
const previewContainer = document.getElementById('preview-container');
const previewContent = document.getElementById('preview-content');
const previewImage = document.getElementById('preview-image');
const previewDescription = document.getElementById('preview-description');

// Ejemplo de datos con URL de productos y descripciones
const products = [
  { image: 'images/jordan 1 buble.png', description: 'Descripción del Producto 1' },
  { image: 'images/jordan 1 hyper royal.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan 4 white cement.png', description: 'Descripción del Producto 1' },
  { image: 'images/yeesy 350 negra.png', description: 'Descripción del Producto 2' },
  { image: 'images/yeesy boost 350.png', description: 'Descripción del Producto 1' },
  { image: 'images/jordan 1 buble.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan 1 buble.png', description: 'Descripción del Producto 1' },
  { image: 'images/jordan 1 buble.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan 1 buble.png', description: 'Descripción del Producto 1' },
  { image: 'images/jordan 1 buble.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan 1 buble.png', description: 'Descripción del Producto 1' },
  { image: 'images/jordan 1 buble.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan 1 buble.png', description: 'Descripción del Producto 1' },
  { image: 'images/jordan 1 buble.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan 1 buble.png', description: 'Descripción del Producto 1' },
  { image: 'images/jordan 1 buble.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan 1 buble.png', description: 'Descripción del Producto 1' },
  { image: 'images/jordan 1 buble.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan 1 buble.png', description: 'Descripción del Producto 1' },
  { image: 'images/jordan 1 buble.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan 1 buble.png', description: 'Descripción del Producto 1' },
  { image: 'images/jordan 1 buble.png', description: 'Descripción del Producto 2' },
  // Agrega más productos según sea necesario
];

// Crear elementos de producto y agregar al catálogo
products.forEach((product, index) => {
  const productElement = document.createElement('div');
  productElement.classList.add('product');

  const imgElement = document.createElement('img');
  imgElement.src = product.image;
  imgElement.alt = `Producto ${index + 1}`;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = product.description;

  productElement.appendChild(imgElement);
  productElement.appendChild(descriptionElement);
  catalogElement.appendChild(productElement);

  // Agrega un manejador de clic para las imágenes del catálogo
  imgElement.addEventListener('click', () => openPreview(product.image, product.description));
});

// Función para abrir la vista previa
function openPreview(imageSrc, description) {
  previewImage.src = imageSrc;
  previewDescription.textContent = description;
  previewContainer.style.display = 'flex';
}

// Función para cerrar la vista previa
function closePreview() {
  previewContainer.style.display = 'none';
}

// Función para cerrar la vista previa
function closePreview() {
  previewContainer.style.display = 'none';
}
