const catalogElement = document.getElementById('catalog');
const previewContainer = document.getElementById('preview-container');
const previewContent = document.getElementById('preview-content');
const previewImage = document.getElementById('preview-image');

// Ejemplo de datos con URL de productos
const products = [
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 1' },
  { image: 'images/jordan_1_hyper_royal.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan_4_white_cement.png', description: 'Descripción del Producto 1' },
  { image: 'images/yeesy_350_negra.png', description: 'Descripción del Producto 2' },
  { image: 'images/yeesy_boost_350.png', description: 'Descripción del Producto 1' },
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 1' },
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 1' },
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 1' },
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 1' },
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 1' },
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 1' },
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 2' },
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 1' },
  { image: 'images/jordan_1_buble.png', description: 'Descripción del Producto 2' },

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
