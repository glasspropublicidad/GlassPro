import { FAQ } from "~/components/shared/faq";

const SERVICE_FAQ_ITEMS = [
  {
    q: "¿Qué dimensiones máximas manejan en cristal templado jumbo?",
    a: "Nuestro horno de templado nos permite procesar piezas de gran formato. Las dimensiones máximas dependen del espesor y tipo de cristal. Contáctanos con las medidas de tu proyecto y te confirmaremos la viabilidad técnica.",
  },
  {
    q: "¿Qué tipos de herrajes ofrecen?",
    a: "Manejamos un catálogo amplio que incluye bisagras, cerraduras, conectores, soportes para barandales, herrajes para puertas de baño, fachadas y más. Disponibles en acabados cromo, cepillado, bronce y negro mate.",
  },
  {
    q: "¿Puedo comprar herrajes por menudeo o solo por mayoreo?",
    a: "Ofrecemos ambas opciones. Ya sea que necesites herrajes para un solo proyecto o suministro constante por mayoreo, tenemos disponibilidad y precios competitivos para ambas modalidades.",
  },
  {
    q: "¿Cómo funciona el servicio de suministro y maquila?",
    a: "Analizamos las necesidades de tu proyecto, proponemos las mejores soluciones en cristal y herrajes, fabricamos las piezas bajo especificaciones y coordinamos la logística de entrega. Un acompañamiento integral de principio a fin.",
  },
  {
    q: "¿Manejan garantía en sus productos?",
    a: "Sí. Todos nuestros cristales templados cuentan con garantía de fabricación. Los herrajes también tienen respaldo de calidad. Los términos específicos dependen del tipo de producto y proyecto. Consulta con tu asesor para detalles.",
  },
  {
    q: "¿Cuál es el tiempo de entrega promedio?",
    a: "Los tiempos varían según la complejidad del proyecto y las dimensiones de las piezas. En cristal estándar, los tiempos típicos son de 5 a 10 días hábiles. En proyectos jumbo o de gran escala, te damos fecha estimada al momento de la cotización.",
  },
  {
    q: "¿Realizan instalaciones o solo suministran?",
    a: "Sí, ofrecemos servicio completo de instalación con personal altamente capacitado. También puedes optar solo por el suministro si cuentas con tu propio equipo de instalación.",
  },
];

export function Faq() {
  return (
    <FAQ
      title="Preguntas Frecuentes"
      subtitle="Todo lo que necesitas saber sobre nuestros servicios de cristal templado, herrajes y maquila."
      items={SERVICE_FAQ_ITEMS}
    />
  );
}
