const catalogElementRopa = document.getElementById('catalog-ropa');
const previewContainerRopa = document.getElementById('preview-container-ropa');
const previewContentRopa = document.getElementById('preview-content-ropa');
const previewImageRopa = document.getElementById('preview-image-ropa');
const previewDescriptionRopa = document.getElementById('preview-description-ropa');

// Ejemplo de datos con URL de productos y descripciones para ropa
const productsRopa = [
  // Agrega productos de ropa según sea necesario
  { image: 'images/ropa1.png', description: 'Descripción de Ropa 1' },
  { image: 'images/ropa2.png', description: 'Descripción de Ropa 2' },
  // ...
];

// Función para acortar el enlace con Bitly para ropa
function shortenLinkRopa(longUrl, callback) {
  // Puedes usar el mismo token de Bitly o obtener uno nuevo si es necesario
  const accessTokenRopa = 'tu_token_de_bitly_para_ropa';
  const apiUrlRopa = `https://api-ssl.bitly.com/v4/shorten`;

  $.ajax({
    url: apiUrlRopa,
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    headers: {
      'Authorization': `Bearer ${accessTokenRopa}`,
    },
    data: JSON.stringify({
      long_url: longUrl,
    }),
    success: function (response) {
      const shortUrl = response.id;
      callback(shortUrl);
    },
    error: function (error) {
      console.error('Error al acortar el enlace con Bitly para ropa:', error);
      callback(longUrl); // En caso de error, usa el enlace largo
    },
  });
}

// Crear elementos de producto y agregar al catálogo de ropa
productsRopa.forEach(product => {
  const productElementRopa = document.createElement('div');
  productElementRopa.classList.add('product');

  const imgElementRopa = document.createElement('img');
  imgElementRopa.src = product.image;
  imgElementRopa.alt = product.description;

  const nameElementRopa = document.createElement('p');
  nameElementRopa.textContent = product.description;

  productElementRopa.appendChild(imgElementRopa);
  productElementRopa.appendChild(nameElementRopa);

  catalogElementRopa.appendChild(productElementRopa);
});

// Agrega un manejador de clic para las imágenes del catálogo de ropa
catalogElementRopa.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    const imageSrcRopa = event.target.src;
    const descriptionRopa = event.target.alt;
    openPreviewRopa(imageSrcRopa, descriptionRopa);
  }
});

// Función para abrir la vista previa de ropa
function openPreviewRopa(imageSrcRopa, descriptionRopa) {
  previewImageRopa.src = imageSrcRopa;
  previewDescriptionRopa.textContent = descriptionRopa;

  // Obtén el enlace directo a la imagen (sin window.location.origin)
  const directLinkRopa = imageSrcRopa; // Ajusta según la estructura de tu proyecto

  // Acorta el enlace directo usando Bitly para ropa
  shortenLinkRopa(directLinkRopa, function (shortenedLinkRopa) {
    // Modifica el enlace de WhatsApp para incluir el enlace acortado a la imagen
    const whatsappLinkRopa = `https://wa.me/34627629079?text=¡Hola! Estoy interesado en comprar este producto: ${descriptionRopa} - ${shortenedLinkRopa}`;
    document.getElementById('whatsapp-btn-ropa').href = whatsappLinkRopa;

    previewContainerRopa.style.display = 'flex';
  });
}

// Cerrar la vista previa al hacer clic en ella para ropa
previewContainerRopa.addEventListener('click', closePreviewRopa);

// Función para cerrar la vista previa de ropa
function closePreviewRopa() {
  previewContainerRopa.style.display = 'none';
}
