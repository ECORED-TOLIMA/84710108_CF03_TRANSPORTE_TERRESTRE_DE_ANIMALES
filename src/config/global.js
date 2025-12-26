export default {
  global: {
    componenteFormativo: 'ABC del transporte de animales en pie',
    descripcionCurso:
      'Este componente formativo introduce los principios esenciales del transporte de animales en pie según la normativa colombiana. Aborda bienestar animal, planificación del viaje, manejo de bajo estrés, condiciones sanitarias, limpieza y bioseguridad, así como responsabilidades del personal. Su propósito es fortalecer competencias para promover prácticas responsables que garanticen salud animal, inocuidad y sostenibilidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Proceso de cargue y descargue de animales en pie: tipos de procedimiento ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de implementos de seguridad y protección',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Métodos de inspección',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Técnicas de selección y separación de animales',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Métodos de distribución de animales',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Métodos de aseguramiento',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Tipos de precintos',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Técnicas de contención y tipos de áreas',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Técnicas de conducción de animales',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Técnicas de cargue y descargue e implementos de descargue',
            hash: 't_1_9',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Gestión ambiental: concepto, tipos de residuos y técnicas de disposición ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Emergencias y contingencias de operación de transporte de animales en pie',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Protocolo de atención de emergencias y planes de contingencia',
            hash: 't_2_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas de manejo de novedades y emergencias',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Procedimiento de Seguridad y Salud en el Trabajo (SST)',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Tipos y medidas de prevención y protección',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Tipos y técnicas de atención a animales con novedades',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo:
              'Reporte de novedades y directorio de puestos de control ICA',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_XX_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        '1. Proceso de cargue y descargue de animales en pie: tipos de procedimiento',
      referencia:
        'Ministerio de Transporte - Instituto Colombiano Agropecuario (ICA). (2022, 11 de febrero). Resolución 20223040006915 de 2022. Por la cual se adopta el Manual de Procedimientos para el Transporte, manejo y movilización de Animales en Pie y se dictan otras disposiciones.',
      tipo: 'Resolución',
      link:
        'https://www.ica.gov.co/getattachment/ab7e54ab-28a0-4c58-9a86-8ecc49fea4a9/2022R3040006915.aspxLink_complementario',
    },
    {
      tema:
        '1. Proceso de cargue y descargue de animales en pie: tipos de procedimiento',
      referencia:
        'OMSA. (2021). <em>Código Sanitario para los Animales Terrestres. Título 7. Bienestar de los animales.</em>',
      tipo: 'Página',
      link:
        'https://www.woah.org/fileadmin/Home/esp/Health_standards/tahc/current/es_titre_1.7.htm',
    },
    {
      tema:
        '2. Gestión ambiental: concepto, tipos de residuos y técnicas de disposición',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible de Colombia. (2015, 26 de mayo). Decreto 1076 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible.',
      tipo: 'Decreto',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/06/Decreto-1076-de-2015.pdf ',
    },
    {
      tema: '3.3 Procedimiento de Seguridad y Salud en el Trabajo (SST)',
      referencia:
        'Ministerio del Trabajo. (2015, 26 de mayo). Decreto 1072 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo.',
      tipo: 'Decreto',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/0/DUR+SECTOR+TRABAJO+-+ACTUALIZACI%C3%93N+SEPTIEMBRE+2025.pdf/f7fb4e83-45d6-f65a-9b8b-25a8d3051338?t=1759317135496',
    },
  ],
  glosario: [
    {
      termino: 'Aptitud animal',
      significado:
        'condición física y sanitaria (libre de enfermedad, lesión, gestación avanzada) que permite a un animal ser transportado sin riesgo indebido o sufrimiento.',
    },
    {
      termino: 'Ayuno',
      significado:
        'período de retiro de alimento (no de agua) antes de la carga, para reducir el estrés fisiológico y la excreción durante el viaje.',
    },
    {
      termino: 'Eutanasia de emergencia',
      significado:
        'acto de dar muerte humanitaria a un animal que sufre de manera irremediable (ej. accidente grave), para terminar con su agonía.',
    },
    {
      termino: 'Gestión ambiental',
      significado:
        'conjunto de prácticas para la correcta disposición de los residuos (estiércol, efluentes, químicos) generados por la operación.',
    },
    {
      termino: 'Plan de contingencia',
      significado:
        'documento obligatorio que describe los procedimientos a seguir en caso de emergencias (accidentes, fallas mecánicas, animales heridos).',
    },
    {
      termino: 'Precarga',
      significado:
        'todas las operaciones de alistamiento del animal en el predio de origen antes de la carga (selección, inspección, ayunar).',
    },
    {
      termino: 'Punto de balance',
      significado:
        'término etológico. Línea imaginaria a la altura de la paleta del animal; al cruzarla por detrás se estimula el avance, y por delante se detiene.',
    },
    {
      termino: 'SST (SG-SST)',
      significado:
        'Seguridad y Salud en el Trabajo. Normativa y prácticas destinadas a proteger la integridad física y mental de los trabajadores (conductores, operarios).',
    },
    {
      termino: 'Zona de fuga',
      significado:
        'término etológico. Es el "espacio personal" del animal. El operario trabaja en el borde de esta zona para guiarlo sin invadirlo bruscamente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Instituto Colombiano Agropecuario. (s.f.). <em>Bienestar animal.</em> ICA.s',
      link: 'Link_referencias',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2015, 26 de mayo). Decreto 1076 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/06/Decreto-1076-de-2015.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2016, 6 de enero). Ley 1774 de 2016. Por medio de la cual se modifica el Código Civil, la Ley 84 de 1989, el Código Penal, el Código de Procedimiento Penal y se dictan otras disposiciones.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/06/ley-1774-2016.pdf ',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2012, 1 de julio). Ley 1562 de 2012. Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Ley-1562-de-2012.pdf ',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2015, 26 de mayo). Decreto 1072 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/0/DUR+SECTOR+TRABAJO+-+ACTUALIZACI%C3%93N+SEPTIEMBRE+2025.pdf/f7fb4e83-45d6-f65a-9b8b-25a8d3051338?t=1759317135496',
    },
    {
      referencia:
        'Ministerio de Transporte - Instituto Colombiano Agropecuario (ICA). (2022, 11 de febrero). Resolución 20223040006915 de 2022. Por la cual se adopta el Manual de Procedimientos para el Transporte, manejo y movilización de Animales en Pie y se dictan otras disposiciones.',
      link:
        'https://www.ica.gov.co/getattachment/ab7e54ab-28a0-4c58-9a86-8ecc49fea4a9/2022R3040006915.aspx ',
    },
    {
      referencia:
        'OMSA. (2021). <em>Código Sanitario para los Animales Terrestres. Título 7. Bienestar de los animales.</em>',
      link:
        'https://www.woah.org/fileadmin/Home/esp/Health_standards/tahc/current/es_titre_1.7.htm',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Oscar Eduardo Villarraga Córdoba',
          cargo: 'Experto temático',
          centro: 'Regional Huila - Centro de Formación Agroindustrial',
        },
        {
          nombre: 'Lola Fernanda Herrera H.',
          cargo: 'Apoyo gestión curricular',
          centro: 'Regional Huila - Centro de Formación Agroindustrial',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez ',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
