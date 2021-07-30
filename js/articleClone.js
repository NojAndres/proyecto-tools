const data = [
  {
    name: 'Storybird',
    description:
      'podrás crear cuentos online al mismo tiempo que los puedes compartir por internet.',
    urlImage:
      'https://socialna-akademija.si/digitaleducationaltools/wp-content/uploads/2017/09/STORY.png',
    url: 'https://storybird.com',
    tag: 'students'
  },
  {
    name: 'Wuolah',
    description:
      'Con alrededor de un millón de documentos, esta plataforma está creada para la subida y descarga de apuntes.',
    urlImage: 'https://www.wuolah.com/static/media/res/icon/seo_wuolah.png',
    url: 'https://www.wuolah.com/',
    tag: 'students'
  },

  {
    name: 'Docsity',
    description:
      'Se trata de una plataforma online para consultar apuntes, resúmenes y exámenes. Podrás subir a la red tus propias publicaciones.',
    urlImage:
      'https://263c47e4-a-62cb3a1a-s-sites.googlegroups.com/site/informaticacsf/home/temporada-8/docsity/dc.png?attachauth=ANoY7cofrmG9Lz0MNVIS92AOXGLL8xz8Ls0VXINE8LkMFoPnRqOqwOSRDyiTMUeZZXdjMpxVXu4nCW1bFy9MH0PGWfuam__eZP1d93uhT98qe8B7Kb4YPQEIBe0bNDxiOiS3WAZ_aeu40d_yaWsc3qcVWOeapYfnD1JBByj6tjEw1rgFPKq13ETpxQA2WTpB9h3Wumqh5Q6ws9_daNKWXSrT0ch1usE1h-augglmBRiiwdMGRZuGgW7UaKYmBvI5jivFIgP6m8k5&attredirects=1',
    url: 'https://www.docsity.com/es/',
    tag: 'students'
  },
  {
    name: 'Stuvia',
    description:
      'Con más de 250.000 resúmenes, esta plataforma se encarga de poner a disposición de los estudiantes los documentos necesarios para estudiar de cara a los exámenes.',
    urlImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0dLHcofedTX-5Y-Qxp6xtz4PKFxz4yv-kIIZLrdpO3sXo32ax2KMUk4Bkg96Fi7qOXnI&usqp=CAU',
    url: 'https://www.studocu.com/es',
    tag: 'students'
  },
  {
    name: 'Color Hunt',
    description:
      'Descubra las paletas de colores más recientes seleccionadas a mano de Color Hunt. Obtenga inspiración de color para sus proyectos de diseño y arte.',
    urlImage:
      'http://4.bp.blogspot.com/-Mk3CDxdueC8/VgqqIdQesMI/AAAAAAAAVCk/UH0yL86PzbM/s1600/11800432_508153089351542_6228221703440168645_n.png',
    url: 'https://colorhunt.co/',
    tag: 'programer'
  },
  {
    name: 'Git',
    description:
      'Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones',
    urlImage: 'https://cdn.svgporn.com/logos/git.svg',
    url: 'https://git-scm.com/',
    tag: 'programer'
  },
  {
    name: 'MySQL',
    description:
      'MySQL es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: Licencia pública general/Licencia comercial por Oracle Corporation y está considerada como la base de datos',
    urlImage: 'https://cdn.svgporn.com/logos/mysql.svg',
    url: 'https://www.mysql.com/',
    tag: 'programer'
  },
  {
    name: 'Excel',
    description:
      'El Microsoft Excel es otra herramienta esencial para los programadores y desarrolladores de software. No lo confunda solo con una aplicación de hoja de cálculo, puede hacer mucho más usando Excel de lo que pueda imaginar.',
    urlImage: 'https://static4.abc.es/media/tecnologia/2020/02/25/excel-kbVE--1024x512@abc.jpg',
    url: 'https://office.live.com/start/Excel.aspx?ui=es%2DES',
    tag: 'teacher'
  },
  {
    name: 'Word',
    description:
      'Junto con Microsoft Excel y Word, Powerpoint forma la trilogía de herramientas de oficina esenciales y es por eso que también son esenciales para los ingenieros de software y profesionales de TI, incluidos desarrolladores, control de calidad, licenciatura y gerente de proyectos.​',
    urlImage:
      'https://i2.wp.com/www.ardilu.com/wp-content/uploads/2020/06/Word-2019.png?fit=1200%2C720&ssl=1',
    url: 'https://office.live.com/start/Word.aspx?ui=es%2DES',
    tag: 'teacher'
  },
  {
    name: 'PowerPoint',
    description:
      'Microsoft PowerPoint es un programa de presentación desarrollado por la empresa Microsoft para sistemas operativos Windows, macOS y últimamente para Android y iOS',
    urlImage:
      'https://d500.epimg.net/cincodias/imagenes/2015/07/31/lifestyle/1438366770_570256_1438366855_noticia_normal.jpg',
    url: 'https://office.live.com/start/PowerPoint.aspx?ui=es%2DES&rs=ES',
    tag: 'teacher'
  },
  {
    name: 'SVN',
    description:
      'A pesar de que Git ha tomado casi el 70% del mercado en términos de sistema de control de versiones, todavía hay proyectos en los que se usa SVN (también conocido como subversión). No solo en la propiedad sino también en el código abierto, es por eso que conocer a la tortuga SVN es bueno para los programadores.',
    urlImage: 'https://www.azulweb.net/wp-content/uploads/2018/10/svn-subversion-guide.jpg',
    url: 'https://tortoisesvn.net/',
    tag: 'programer'
  }
];

const list = document.getElementById('containerCard');
const template = document.getElementById('template').content;
const fragment = document.createDocumentFragment();
const student = document.getElementById('student');
const teacher = document.getElementById('teacher');
const programer = document.getElementById('programer');

if (student.checked) {
  removeChiled();
  renderList('students');
}

student.addEventListener('click', () => {
  removeChiled();
  renderList('students');
  programer.checked = false;
  teacher.checked = false;
});

programer.addEventListener('click', () => {
  removeChiled();
  renderList('programer');
  student.checked = false;
  teacher.checked = false;
});

teacher.addEventListener('click', () => {
  removeChiled();
  renderList('teacher');
  student.checked = false;
  programer.checked = false;
});

function removeChiled() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function renderList(election) {
  data
    .filter((data) => data.tag === `${election}`)
    .map(({ name, description, url, urlImage }) => {
      template.querySelector('.card .card-image .image .picture').setAttribute('src', urlImage);
      template.querySelector('.card .card-content .content .name').textContent = name;
      template.querySelector('.card .card-content .content .description').textContent = description;
      template.querySelector('.card .card-footer .button').setAttribute('href', url);

      const clone = template.cloneNode(true);
      fragment.appendChild(clone);
    });
  list.appendChild(fragment);
}
