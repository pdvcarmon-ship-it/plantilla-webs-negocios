// ============================================================
// CONFIGURACIÓN DEL CLIENTE
// Este es el único archivo que necesitas editar para adaptar
// la plantilla a un negocio nuevo: textos, colores, contacto,
// mapa y hoja de tarifas.
// ============================================================

const siteConfig = {
  // --- Identidad del negocio ---
  business: {
    name: "Peluquería Marina",
    tagline: "Cortes y color con cita en el día",
    description:
      "Peluquería de barrio especializada en color, cortes a medida y tratamientos capilares. Más de 12 años cuidando el pelo de nuestro barrio.",
    logoText: "Marina", // se usa si no hay logo.svg en /public
  },

  // --- Colores de marca ---
  // Cambia solo estos 4 valores y toda la web se adapta.
  colors: {
    primary: "#2F5D50", // color principal (botones, enlaces, acentos)
    primaryDark: "#1F3F37", // variante oscura (hover, header)
    accent: "#C9A227", // color secundario (detalles, precios destacados)
    ink: "#16241F", // color del texto principal
  },

  // --- Servicios que se muestran en la portada ---
  services: [
    {
      title: "Cortes a medida",
      description: "Corte, lavado y secado adaptado a tu tipo de pelo.",
    },
    {
      title: "Color y mechas",
      description: "Tintes, balayage y mechas con productos profesionales.",
    },
    {
      title: "Tratamientos",
      description: "Hidratación, keratina y reparación capilar.",
    },
    {
      title: "Peinados de evento",
      description: "Recogidos y peinados para bodas y ocasiones especiales.",
    },
  ],

  // --- Datos de contacto ---
  contact: {
    email: "info@peluqueriamarina.example",
    phone: "+34 600 000 000",
    whatsapp: "34600000000", // solo números, con prefijo de país
    address: "Calle Sierpes 24, 41004 Sevilla",
  },

  // --- Ubicación para el mapa ---
  // Puedes obtener el enlace embed en Google Maps:
  // botón "Compartir" > "Insertar un mapa" > copiar la URL del src del iframe.
  map: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.7!2d-5.9954!3d37.3891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSierpes%2C+Sevilla!5e0!3m2!1ses!2ses!4v0000000000",
  },

  // --- Redes sociales (opcional, deja "" si no aplica) ---
  social: {
    instagram: "https://instagram.com/peluqueriamarina",
    facebook: "",
  },

  // --- Hoja de tarifas ---
  // 1. Crea una Google Sheet con columnas: Categoria, Servicio, Descripcion, Precio
  // 2. Archivo > Compartir > Publicar en la Web > selecciona la hoja > formato CSV
  // 3. Pega aquí la URL que te da Google (termina en "output=csv")
  pricingSheetCsvUrl:
    "https://docs.google.com/spreadsheets/d/e/EJEMPLO/pub?gid=0&single=true&output=csv",

  // --- SEO básico ---
  seo: {
    title: "Peluquería Marina | Peluquería en Sevilla",
    description:
      "Peluquería en Sevilla especializada en cortes, color y tratamientos. Pide tu cita hoy mismo.",
    locale: "es_ES",
    city: "Sevilla",
  },
};

module.exports = siteConfig;
