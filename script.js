const catalogElement = document.getElementById('catalog');
const previewContainer = document.getElementById('preview-container');
const previewContent = document.getElementById('preview-content');
const previewImage = document.getElementById('preview-image');
const previewDescription = document.getElementById('preview-description');

// Ejemplo de datos con URL de productos y descripciones
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

// Función para acortar el enlace con Bitly
function shortenLink(longUrl, callback) {
  const accessToken = '6b65158f020c81b67e6f1aba523f29f3f5674ced'; // Reemplaza con tu token de acceso de Bitly
  const apiUrl = `https://api-ssl.bitly.com/v4/shorten`;

  $.ajax({
    url: apiUrl,
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
    data: JSON.stringify({
      long_url: longUrl,
    }),
    success: function (response) {
      const shortUrl = response.id;
      callback(shortUrl);
    },
    error: function (error) {
      console.error('Error al acortar el enlace con Bitly:', error);
      callback(longUrl); // En caso de error, usa el enlace largo
    },
  });
}

// Crear elementos de producto y agregar al catálogo
products.forEach(product => {
  const productElement = document.createElement('div');
  productElement.classList.add('product');

  const imgElement = document.createElement('img');
  imgElement.src = product.image;
  imgElement.alt = product.description;

  const nameElement = document.createElement('p');
  nameElement.textContent = product.description;

  productElement.appendChild(imgElement);
  productElement.appendChild(nameElement);

  catalogElement.appendChild(productElement);
});

// Agrega un manejador de clic para las imágenes del catálogo
catalogElement.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    const imageSrc = event.target.src;
    const description = event.target.alt;
    openPreview(imageSrc, description);
  }
});

// Función para abrir la vista previa
function openPreview(imageSrc, description) {
  previewImage.src = imageSrc;
  previewDescription.textContent = description;

  // Obtén el enlace directo a la imagen (sin window.location.origin)
  const directLink = imageSrc; // Ajusta según la estructura de tu proyecto

  // Acorta el enlace directo usando Bitly
  shortenLink(directLink, function (shortenedLink) {
    // Obtén el enlace directo a la imagen (sin acortar)
    const directImageLink = window.location.origin + '/' + imageSrc;

    // Modifica el enlace de WhatsApp para incluir el enlace acortado y la miniatura de la imagen
    const whatsappLink = `https://wa.me/34627629079?text=¡Hola! Estoy interesado en comprar este producto: ${description} - ${shortenedLink}%0a%0a${directImageLink}`;
    document.getElementById('whatsapp-btn').href = whatsappLink;

    previewContainer.style.display = 'flex';
  });
}



// Cerrar la vista previa al hacer clic en ella
previewContainer.addEventListener('click', closePreview);

// Función para cerrar la vista previa
function closePreview() {
  previewContainer.style.display = 'none';
}
