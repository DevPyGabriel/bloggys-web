export interface Blog {
  id: string;
  title: string;
  description: string;
  image: string;
  timestamp: string;
  career: string;
  author: string;
  fullContent: string;
}

export const blogs: Blog[] = [
  {
    id: "0",
    title: "La IA como herramienta de Trabajo",
    description:
      "Explorando cómo la inteligencia artificial transforma el entorno laboral y aumenta la productividad.",
    image: "https://qawerk.es/wp-content/uploads/2025/04/cover_blog_ai-testing-tools-for-smarter-testing-in-2025.png",
    timestamp: "15 Sep 2023",
    career: "Informatica",
    author: "María González",
    fullContent:
      "La inteligencia artificial (IA) se ha convertido en una herramienta indispensable en el mundo laboral moderno. Desde la automatización de tareas repetitivas hasta el análisis predictivo de datos, la IA está revolucionando la forma en que trabajamos. En este artículo, exploraremos cómo implementar la IA en diferentes sectores, los beneficios que aporta y las consideraciones éticas que debemos tener en cuenta. Veremos casos de estudio reales y consejos prácticos para integrar la IA en tu flujo de trabajo diario.",
  },
  {
    id: "1",
    title: "Desarrollo de Aplicaciones Web con React",
    description:
      "Guía completa para crear aplicaciones web modernas y escalables utilizando React.",
    image: "https://kinsta.com/es/wp-content/uploads/sites/8/2022/07/que-es-react-js.png",
    timestamp: "20 Aug 2023",
    career: "Informatica",
    author: "Carlos Rodríguez",
    fullContent:
      "React es una biblioteca de JavaScript para construir interfaces de usuario. En esta guía completa, aprenderás desde los conceptos básicos hasta técnicas avanzadas para crear aplicaciones web modernas. Cubriremos componentes, estado, props, hooks, routing y mejores prácticas. Incluye ejemplos prácticos y consejos para optimizar el rendimiento de tus aplicaciones React.",
  },
  {
    id: "2",
    title: "Machine Learning para Principiantes",
    description:
      "Introducción a los algoritmos de aprendizaje automático y sus aplicaciones prácticas.",
    image: "https://www.muycomputerpro.com/wp-content/uploads/2018/02/Machine-learning-in-cyber-security-770x476.jpg",
    timestamp: "10 Jul 2023",
    career: "Informatica",
    author: "Ana López",
    fullContent:
      "El Machine Learning es una rama de la inteligencia artificial que permite a las computadoras aprender sin ser programadas explícitamente. Este artículo introduce los conceptos fundamentales del aprendizaje automático, incluyendo algoritmos supervisados y no supervisados, redes neuronales y deep learning. Veremos aplicaciones prácticas en diferentes industrias y cómo empezar tu propio proyecto de ML.",
  },
  {
    id: "3",
    title: "Ciberseguridad en la Era Digital",
    description:
      "Protegiendo datos personales y corporativos en un mundo cada vez más conectado.",
    image: "https://www.extrasoft.es/wp-content/uploads/2020/05/4-Recursos-de-Ciberseguridad-1080x601.png",
    timestamp: "05 Jun 2023",
    career: "Informatica",
    author: "David Martínez",
    fullContent:
      "En la era digital, la ciberseguridad es más importante que nunca. Este artículo explora las amenazas más comunes, las mejores prácticas para proteger tus datos y las herramientas disponibles para mantener la seguridad. Aprenderás sobre encriptación, autenticación de dos factores, firewalls y cómo crear una cultura de seguridad en tu organización.",
  },
  {
    id: "4",
    title: "Tendencias en Blockchain",
    description:
      "El futuro de las criptomonedas, contratos inteligentes y aplicaciones descentralizadas.",
    image: "https://i2.wp.com/generamas.com/wp-content/uploads/2019/06/blockchain-3019121_1280.png?fit=1024%2C767&ssl=1",
    timestamp: "12 May 2023",
    career: "Economia",
    author: "Elena Sánchez",
    fullContent:
      "La tecnología blockchain va más allá de las criptomonedas. En este artículo, exploramos las tendencias actuales y futuras de blockchain, incluyendo contratos inteligentes, DeFi, NFTs y aplicaciones empresariales. Analizamos casos de uso reales y discutimos los desafíos técnicos y regulatorios que enfrenta esta tecnología revolucionaria.",
  },
  {
    id: "5",
    title: "Programación en Python",
    description:
      "Desde conceptos básicos hasta proyectos avanzados con el lenguaje Python.",
    image: "/blog/python.webp",
    timestamp: "18 Apr 2023",
    career: "Informatica",
    author: "Roberto García",
    fullContent:
      "Python es uno de los lenguajes de programación más versátiles y populares. Esta guía completa te lleva desde los fundamentos básicos hasta proyectos avanzados. Cubrimos sintaxis, estructuras de datos, programación orientada a objetos, desarrollo web con Django, análisis de datos con pandas y machine learning con scikit-learn.",
  },
  {
    id: "6",
    title: "Diseño UX/UI para Apps Móviles",
    description:
      "Creando interfaces de usuario intuitivas y atractivas para aplicaciones móviles.",
    image:
      "https://elementor.com/cdn-cgi/image/f=auto,w=5001,h=2626/blog/wp-content/uploads/2021/09/UX-vs-UI-whats-the-difference.png",
    timestamp: "22 Mar 2023",
    career: "Diseno",
    author: "Laura Fernández",
    fullContent:
      "El diseño de UX/UI es crucial para el éxito de las aplicaciones móviles. Este artículo explora los principios del diseño centrado en el usuario, técnicas de investigación, wireframing, prototipado y testing. Aprenderás a crear interfaces intuitivas que mejoran la experiencia del usuario y aumentan la retención de usuarios en tus apps.",
  },
  {
    id: "7",
    title: "Big Data y Análisis de Datos",
    description:
      "Herramientas y técnicas para manejar y analizar grandes volúmenes de información.",
    image:
      "https://www.uxbi.mx/wp-content/uploads/2022/03/analisis-de-datos-1080x675-1.jpg",
    timestamp: "14 Feb 2023",
    career: "Informatica",
    author: "Miguel Torres",
    fullContent:
      "El Big Data representa uno de los mayores desafíos y oportunidades en la era digital. Este artículo profundiza en las tecnologías y técnicas para procesar, almacenar y analizar grandes volúmenes de datos. Cubrimos Hadoop, Spark, bases de datos NoSQL, técnicas de visualización y casos de uso en diferentes industrias.",
  },
];
