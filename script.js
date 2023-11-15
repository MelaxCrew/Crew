const catalogElement = document.getElementById('catalog');

// Ejemplo de datos (puedes reemplazarlo con tus propios productos y URLs de imágenes)
const products = [
  { name: 'Producto 1', image: 'URL_imagen_1.jpg' },
  { name: 'Producto 2', image: 'URL_imagen_2.jpg' },
  { name: 'Producto 2', image: 'URL_imagen_3.jpg' },
  { name: 'Producto 2', image: 'URL_imagen_4.jpg' },
  { name: 'Producto 2', image: 'URL_imagen_5.jpg' },
  { name: 'Producto 2', image: 'URL_imagen_6.jpg' },
  { name: 'Producto 2', image: 'URL_imagen_7.jpg' },
  { name: 'Producto 2', image: 'URL_imagen_8.jpg' },
  { name: 'Producto 2', image: 'URL_imagen_9.jpg' },
  { name: 'Producto 2', image: 'URL_imagen_10.jpg' },
  { name: 'Producto 2', image: 'URL_imagen_11.jpg' },
  { name: 'Producto 2', image: 'URL_imagen_12.jpg' },
  { name: 'Producto 2', image: 'URL_imagen_13.jpg' },
  { name: 'Producto 2', image: 'URL_imagen_14.jpg' },
  // Agrega más productos según sea necesario
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
