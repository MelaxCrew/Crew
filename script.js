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

// Función para acortar el enlace con Bitly
function shortenLink(longUrl, callback) {
  const accessToken = 'TU_TOKEN_DE_BITLY'; // Reemplaza con tu token de acceso de Bitly
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


// Función para abrir la vista previa
function openPreview(imageSrc, description) {
  previewImage.src = imageSrc;
  previewDescription.textContent = description;

  // Obtén el enlace directo a la imagen
  const directLink = window.location.origin + '/' + imageSrc; // Ajusta según la estructura de tu proyecto

  // Modifica el enlace de WhatsApp para incluir el enlace directo a la imagen
  const whatsappLink = `https://wa.me/34627629079?text=¡Hola! Estoy interesado en comprar este producto: ${description} - ${directLink}`;
  document.getElementById('whatsapp-btn').href = whatsappLink;

  previewContainer.style.display = 'flex';
}

// Función para abrir la vista previa
function openPreview(imageSrc, description) {
  previewImage.src = imageSrc;
  previewDescription.textContent = description;

  // Obtén el enlace directo a la imagen
  const directLink = window.location.origin + '/' + imageSrc; // Ajusta según la estructura de tu proyecto

  // Acorta el enlace directo usando Bitly
  shortenLink(directLink, function (shortenedLink) {
    // Modifica el enlace de WhatsApp para incluir el enlace acortado a la imagen
    const whatsappLink = `https://wa.me/34627629079?text=¡Hola! Estoy interesado en comprar este producto: ${description} - ${shortenedLink}`;
    document.getElementById('whatsapp-btn').href = whatsappLink;

    previewContainer.style.display = 'flex';
  });
}

// Función para cerrar la vista previa
function closePreview() {
  previewContainer.style.display = 'none';
}

</script>
</body>
</html>
