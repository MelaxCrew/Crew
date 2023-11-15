const catalogElement = document.getElementById('catalog');
const previewContainer = document.getElementById('preview-container');
const previewContent = document.getElementById('preview-content');
const previewImage = document.getElementById('preview-image');

// Ejemplo de datos con URL de productos
const products = [
  { image: 'images/jordan 1 buble.png' },
  { image: 'images/jordan 1 hyper royal.png' },
  { image: 'images/jordan 4 white cement.png' },
  { image: 'images/yeesy 350 negra.png' },
  { image: 'images/yeesy boost 350.png' },
  { image: 'images/jordan 1 buble.png' },
  { image: 'images/jordan 1 buble.png' },
  { image: 'images/jordan 1 buble.png' },
  { image: 'images/jordan 1 buble.png' },
  { image: 'images/jordan 1 buble.png' },
  { image: 'images/jordan 1 buble.png' },
  { image: 'images/jordan 1 buble.png' },
  { image: 'images/jordan 1 buble.png' },
  { image: 'images/jordan 1 buble.png' },
  // Agrega más productos según sea necesario
];

// Crear elementos de producto y agregar al catálogo
products.forEach((product, index) => {
  const productElement = document.createElement('div');
  productElement.classList.add('product');

  const imgElement = document.createElement('img');
  imgElement.src = product.image;
  imgElement.alt = `Producto ${index + 1}`;

  productElement.appendChild(imgElement);
  catalogElement.appendChild(productElement);

  // Agrega un manejador de clic para las imágenes del catálogo
  imgElement.addEventListener('click', () => openPreview(product.image));
});

// Función para abrir la vista previa
function openPreview(imageSrc) {
  previewImage.src = imageSrc;
  previewContainer.style.display = 'flex';
}

// Función para cerrar la vista previa
function closePreview() {
  previewContainer.style.display = 'none';
}
