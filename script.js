const catalogElement = document.getElementById('catalog');
const previewContainer = document.getElementById('preview-container');
const previewContent = document.getElementById('preview-content');
const previewImage = document.getElementById('preview-image');
const previewDescription = document.getElementById('preview-description');

// Ejemplo de datos con URL de productos y descripciones
const products = [
  { image: 'images/jordan_1_buble.png', description: 'Jordan 1 bubble' },
  { image: 'images/jordan_1_hyper_royal.png', description: 'Jordan 1 hyper royale' },
  { image: 'images/jordan_4_white_cement.png', description: 'jordan 4 white cement' },
  { image: 'images/yeesy_350_negra.png', description: 'yeesy 350 negra' },
  { image: 'images/yeesy_boost_350.png', description: 'yeest boost 350' },
  { image: 'images/nike_dunk_grey.png', description: 'nike dunk grey' },
  { image: 'images/nike_dunk_mid_donatello.png', description: 'nike dunk donatello' },
  { image: 'images/nike_dunk_panda.png', description: 'nike dunk panda' },
  { image: 'images/nike_dunk_rosa.png', description: 'nike dunk rosa' },
  { image: 'images/nike_dunk_triple_pink.png', description: 'nike dunk triple pink' },
  { image: 'images/nike_valentin_day.png', description: 'nike dunk valentine day' },
  { image: 'images/nike_dunk_bone.png', description: 'nike dunk bone' },
  { image: 'images/airmax97.png', description: 'nike airmax 97' },
  { image: 'images/yeesy_kanye.png', description: 'yeesy kanye west' },
  { image: 'images/nike_dunk_skate_girl.png', description: 'nike dunk skate like a girl' },
  { image: 'images/nike_dunk_coast.png', description: 'nike dunk coast' },
  { image: 'images/nike_dunk_burdeos.png', description: 'nike dunk burdeos' },
  
  { image: 'images/adidas_forum_badbunny_rosa.png', description: 'adidas forum bad bunny pink' },
 
  { image: 'images/nike_dunk_ow_blue.png', description: 'nike dunk off white blue' },
  
  { image: 'images/lv_trainer_black.png', description: 'louis vuitton trainer black' },
  
  { image: 'images/jordan_4_ow.png', description: 'jordan 4 retro off white' },
  
  { image: 'images/nike_airforce_1_lv.png', description: 'nike air force 1 luis vuitton' },
  
  { image: 'images/nike_airforce_1_mid_07.png', description: 'nike air force 1 mid 07' },
  
  { image: 'images/adidas_campus_badbunny.png', description: 'adidas campus bad bunny' },
  
  { image: 'images/lv_trainer_blue.png', description: 'luis vuitton trainer blue' },

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
    // Modifica el enlace de WhatsApp para incluir el enlace acortado a la imagen
    const whatsappLink = `https://wa.me/34627629079?text=¡Hola! Estoy interesado en comprar este producto: ${description} - ${shortenedLink}`;
    document.getElementById('whatsapp-btn').href = whatsappLink;

    previewContainer.style.display = 'flex';
  });
}

// ...

// Cerrar la vista previa al hacer clic en ella
previewContainer.addEventListener('click', closePreview);

// Función para cerrar la vista previa
function closePreview() {
  previewContainer.style.display = 'none';
}
