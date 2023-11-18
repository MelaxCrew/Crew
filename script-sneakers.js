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
  { image: 'images/lv_trainer_blue.png', description: 'louis vuitton trainer blue' },
  { image: 'images/adidas_stan_smith.png', description: 'adidas stan smith' },
  { image: 'images/af1_white.png', description: 'af1 white' },
  { image: 'images/adidas_yeesy_boost_350_v2cinder.png', description: 'adidas yeesy boost 350 cinder' },
  { image: 'images/lv_trainer_green.png', description: 'louis vuitton trainer green' },
  { image: 'images/adidas_forum_colors_pastel.png', description: 'adidas forum colors pastel' },  
  { image: 'images/adidas_forum_white_pink.png', description: 'adidas forum white pink' },
  { image: 'images/adidas_2000_blue.png', description: 'adidas 2000 blue' },
  { image: 'images/adidas_2000_beige.png', description: 'adidas 2000 beige' },
  { image: 'images/adidas_forum_low_pink.png', description: 'adidas forum low pink' },
  { image: 'images/jordan_1_low_se_craft.png', description: 'jordan 1 low SE craft' },
  { image: 'images/adidas_superstar_kevinlyons.png', description: 'adidas superstar kevin lyons' },
  { image: 'images/adidas_superstar_white_mujer.png', description: 'adidas superstar white mujer' },
  { image: 'images/adidas_superstar_black_mujer.png', description: 'adidas superstar black mujer' },
  { image: 'images/adidas_fusion_blue.png', description: 'adidas fusion blue' },
  { image: 'images/adidas_fusion_beige.png', description: 'adidas fusion beige' },
  { image: 'images/nike_dunk_pink.png', description: 'nike dunk pink' },
{ image: 'images/jordan_1_lost_and_found.png', description: 'jordan 1 lost and found' },
  { image: 'images/sandalias_uptempo_white_blue.png', description: 'sandalias uptempo white blue' },
  { image: 'images/new_balance_1906_neon.png', description: 'new balance 1906 neon' },
  { image: 'images/new_balance_9060_sea_salt.png', description: 'new balance 9060 sea salt' },
  { image: 'images/new_balance_9060_penny_cookie_pink.png', description: 'new balance 9060 penny cookie pink' },
  { image: 'images/jordan_1_mid_se_space_jam.png', description: 'jordan 1 mid se space jam' },
  { image: 'images/adidas_forum_bad_bunny_cafe.png', description: 'adidas forum bad bunny cafe' },
  { image: 'images/jordan_1_og_travis_scott.png', description: 'jordan 1 og travis scott' },
  { image: 'images/af1_flyknit.png', description: 'af1 flyknit' },
  { image: 'images/jordan_4_pine_green.png', description: 'jordan 4 pine green' },
  { image: 'images/adidas_campus_bad_bunny_wild_moss.png', description: 'adidas campus bad bunny wild moss' },
  { image: 'images/sandalias_nike_offcourt.png', description: 'sandalias nike offcourt' },
  { image: 'images/sandalias_uptempo_red.png', description: 'sandalias uptempo red' },
  { image: 'images/sandalias_nike_offcourt_green.png', description: 'sandalias nike offcourt green' },
  { image: 'images/nike_dunk_momia.png', description: 'nike dunk momia' },
  { image: 'images/adidas_campus_00s_dark_green.png', description: 'adidas campus 00s dark green' },
  { image: 'images/jordan_1_shattered_backboard.png', description: 'jordan 1 shattered backboard' },
  { image: 'images/af1_green.png', description: 'af1 green' },
  { image: 'images/nike_uptempo_sail_guava.png', description: 'nike uptempo sail guava' },
  { image: 'images/nike_uptempo_black.png', description: 'nike uptempo black' },
  { image: 'images/adidas_forum_84_cream.png', description: 'adidas forum 84 cream' },
  { image: 'images/adidas_forum_triple_white.png', description: 'adidas forum triple white' },
  { image: 'images/jordan_1_mid_hyper_pink.png', description: 'jordan 1 mid hyper pink' },
  { image: 'images/af1_shadow_white.png', description: 'af1 shadow white' },
  { image: 'images/jordan_1_mid_carbon_fiber.png', description: 'jordan 1 mid carbon fiber' },
  { image: 'images/nike_dunk_low_teddy_bear.png', description: 'Nike Dunk Low Teddy Bear' },
  { image: 'images/lv_nike_af1.png', description: 'lv nike af1' },
  { image: 'images/adidas_forum_low_white.png', description: 'adidas forum low white' },
  { image: 'images/nike_dunk_yankees.png', description: 'nike dunk yankees' },
  { image: 'images/balenciaga_triple_s_grey.png', description: 'balenciaga triple s grey' },
  { image: 'images/jordan_11_cool_grey.png', description: 'jordan 11 cool grey' },
  { image: 'images/amiri_ma1.png', description: 'amiri ma1' },
  { image: 'images/nike_air_max_plus_tn_white.png', description: 'nike air max plus tn white' },
  { image: 'images/nike_uptempo_olympic.png', description: 'nike uptempo olympic' },
  { image: 'images/jordan_1_mid_digital_pink.png', description: 'jordan 1 mid digital pink' },
  { image: 'images/jordan_1_high_mocha.png', description: 'jordan 1 high mocha' },
  { image: 'images/bape_sta_black.png', description: 'bape sta black' },
  { image: 'images/jordan_11_bred_black.png', description: 'jordan 11 bred black' },
  { image: 'images/nike_dunk_pigeon.png', description: 'nike dunk pigeon' },
  { image: 'images/sandalias_uptempo_black.png', description: 'sandalias uptempo black' }
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

// Nueva función para redirigir a la página de "Ropa con Flow"
function redirectToRopaPage() {
  window.location.href = 'ropa_con_flow.html';
}
