export type ProjectStatus =
  | 'En desarrollo'
  | 'Planificado'
  | 'Idea futura'
  | 'Completado';

export interface Technology {
  name: string;
  category: 'Frontend' | 'Backend' | 'Base de datos' | 'DevOps' | 'Datos';
  icon: string;
  level: string;
}

export interface Project {
  title: string;
  summary: string;
  status: ProjectStatus;
  year: string;
  stack: string[];
  repository?: string;
  demo?: string;
  featured?: boolean;
}

export const PORTFOLIO = {
  name: 'Piero Valentino Noa Chahuayo',
  shortName: 'Piero Noa',
  initials: 'PN',
  role: 'Desarrollador de software',
  career: 'Diseño y Desarrollo de Software',
  institution: 'TECSUP',
  location: 'Arequipa, Perú',
  availability: 'Disponible para oportunidades junior y proyectos',
  introduction:
    'Desarrollo aplicaciones web y APIs con interés en soluciones financieras, procesamiento de datos y productos digitales útiles.',
  about:
    'Culminé la carrera de Diseño y Desarrollo de Software en TECSUP en diciembre de 2024. Actualmente continúo fortaleciendo mis habilidades en desarrollo full stack, arquitectura de software, datos y despliegue.',
  heroPhrases: [
    'Aplicaciones web modernas',
    'APIs y servicios backend',
    'Soluciones basadas en datos',
    'Software útil y escalable',
  ],
  contact: {
    email: 'piero201612@gmail.com',
    phone: '+51 962 483 840',
    githubLabel: 'github.com/RampageWallE2',
    githubUrl: 'https://github.com/RampageWallE2',
    linkedinLabel: 'linkedin.com/in/piero-noa-chahuayo-aab5a0366',
    linkedinUrl: 'https://www.linkedin.com/in/piero-noa-chahuayo-aab5a0366/',
  },
  education: [
    {
      period: '2022 — 2024',
      title: 'Diseño y Desarrollo de Software',
      institution: 'TECSUP — Arequipa',
      description:
        'Estudios culminados en diciembre de 2024. Formación en desarrollo web, bases de datos, programación, análisis y construcción de soluciones de software.',
      status: 'Titulación en proceso',
    },
    {
      period: '2026',
      title: 'Análisis y Visualización de Datos con Power BI',
      institution: 'Santander | Open Academy',
      description:
      'Capacitación en transformación de datos con Power Query, modelado de información, creación de medidas con DAX y desarrollo de reportes y dashboards interactivos.',
      status: 'En progreso',
    },
    {
      period: '2023',
      title: 'Scrum Fundamentals Certified — SFC',
      institution: 'SCRUMstudy — VMEdu, Inc.',
      description:
        'Certificación obtenida tras aprobar el examen de fundamentos de Scrum. Formación en principios ágiles, roles, eventos, artefactos y procesos utilizados para organizar y desarrollar proyectos de manera iterativa.',
      status: 'Certificado',
    },
    {
      period: '2022 - 2026',
      title: 'Ingles Intermedio',
      institution: 'CULTURAL',
      description:
        'I have an intermediate level of English and I am currently improving my speaking, listening, and professional communication skills. I can understand technical documentation, follow conversations, and communicate ideas related to software development. I continue studying English to become more confident and fluent in professional environments.',
      status: 'Titulación en proceso',
    },    
    {
      period: 'Actualidad',
      title: 'Formación continua',
      institution: 'Aprendizaje independiente',
      description:
        'Profundización en Angular, Flask, PostgreSQL, Docker, arquitectura backend, análisis de datos e inglés.',
      status: 'En progreso',
    },
  ],
  strengths: [
    'Desarrollo frontend con Angular y React',
    'APIs REST con Python, Flask y Node.js',
    'Diseño y consumo de bases de datos relacionales',
    'Contenedores y entornos reproducibles con Docker',
    'Interés en analítica, automatización y predicción',
  ],

  technologies: [
  {
    name: 'Angular',
    category: 'Frontend',
    icon: 'devicon-angularjs-plain colored',
    level: 'Intermedio',
  },
  {
    name: 'React',
    category: 'Frontend',
    icon: 'devicon-react-original colored',
    level: 'Básico',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    icon: 'devicon-typescript-original colored',
    level: 'Intermedio',
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    icon: 'devicon-javascript-plain colored',
    level: 'Intermedio',
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    icon: 'devicon-html5-plain colored',
    level: 'Intermedio',
  },
  {
    name: 'SCSS / CSS',
    category: 'Frontend',
    icon: 'devicon-sass-original colored',
    level: 'Intermedio',
  },
  {
    name: 'Python',
    category: 'Backend',
    icon: 'devicon-python-plain colored',
    level: 'Intermedio',
  },
  {
    name: 'Flask',
    category: 'Backend',
    icon: 'devicon-flask-original',
    level: 'Intermedio',
  },
  {
    name: 'Django',
    category: 'Backend',
    icon: 'devicon-django-plain colored',
    level: 'Básico',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    icon: 'devicon-nodejs-plain colored',
    level: 'Intermedio',
  },
  {
    name: 'Express',
    category: 'Backend',
    icon: 'devicon-express-original',
    level: 'Intermedio',
  },
  {
    name: 'PHP',
    category: 'Backend',
    icon: 'devicon-php-plain colored',
    level: 'Intermedio',
  },
  {
    name: 'Laravel',
    category: 'Backend',
    icon: 'devicon-laravel-original colored',
    level: 'Intermedio',
  },
  {
    name: '.NET',
    category: 'Backend',
    icon: 'devicon-dotnetcore-plain colored',
    level: 'Básico',
  },
  {
    name: 'PostgreSQL',
    category: 'Base de datos',
    icon: 'devicon-postgresql-plain colored',
    level: 'Intermedio',
  },
  {
    name: 'MySQL',
    category: 'Base de datos',
    icon: 'devicon-mysql-original colored',
    level: 'Intermedio',
  },
  {
    name: 'MongoDB',
    category: 'Base de datos',
    icon: 'devicon-mongodb-plain colored',
    level: 'Básico',
  },
  {
    name: 'Docker',
    category: 'DevOps',
    icon: 'devicon-docker-plain colored',
    level: 'Intermedio',
  },
  {
    name: 'Git',
    category: 'DevOps',
    icon: 'devicon-git-plain colored',
    level: 'Intermedio',
  },
  {
    name: 'Linux',
    category: 'DevOps',
    icon: 'devicon-linux-plain',
    level: 'Básico',
  },
  {
    name: 'AWS',
    category: 'DevOps',
    icon: 'devicon-amazonwebservices-plain-wordmark colored',
    level: 'Básico',
  },
  {
    name: 'Pandas',
    category: 'Datos',
    icon: 'devicon-pandas-plain colored',
    level: 'Básico',
  },
  {
    name: 'NumPy',
    category: 'Datos',
    icon: 'devicon-numpy-plain colored',
    level: 'Básico',
  },
] as Technology[],

  projects: [
    {
      title: 'Personal Finance Analytics',
      summary:
        'Aplicación para registrar ingresos y gastos, organizar categorías, consultar movimientos y visualizar resúmenes financieros personales.',
      status: 'En desarrollo',
      year: '2026',
      stack: ['Angular', 'Flask', 'PostgreSQL', 'Docker', 'JWT'],
      featured: true,
      repository: 'https://github.com/RampageWallE2/personal-finance-analytics'
    },
    {
      title: 'Cementery Porject',
      summary:
        'Projecto real sobre cementerios basado en Parque del recuerdo Arequipa',
      status: 'En desarrollo',
      year: '2026',
      stack: ['Angular', 'Flask', 'GO', 'Docker', 'JWT'],
      repository: 'https://github.com/RampageWallE2/cemetery-management-project'
    },
  ] as Project[],
};
