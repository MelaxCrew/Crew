const catalogElement = document.getElementById('catalog');
const previewContainer = document.getElementById('preview-container');
const previewContent = document.getElementById('preview-content');
const previewImage = document.getElementById('preview-image');
const previewDescription = document.getElementById('preview-description');

// Ejemplo de datos con URL de productos y descripciones
const products = [
  { image: 'images/tu-imagen-1.jpg', description: 'Descripción del Producto 1' },
  { image: 'images/tu-imagen-2.jpg', description: 'Descripción del Producto 2' },
  // Agrega más productos según sea necesario
];

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
    openPreview(imageSrc, event.target.alt);
  }
});

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

// Cerrar la vista previa al hacer clic en ella
previewContainer.addEventListener('click', closePreview);

// Función para cerrar la vista previa
function closePreview() {
  previewContainer.style.display = 'none';
}
