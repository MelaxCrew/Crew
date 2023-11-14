const catalogElement = document.getElementById('catalog');

// Ejemplo de datos (puedes reemplazarlo con tus propios productos y URLs de imágenes)
const products = [
  { name: 'Producto 1', image: 'URL_imagen_1.jpg' },
  { name: 'Producto 2', image: 'URL_imagen_2.jpg' },
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
