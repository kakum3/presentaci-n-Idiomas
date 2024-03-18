const idiomaActual = document.getElementById("idioma");
const listaIdiomas = document.getElementById("idiomas");
const idiomas = document.getElementsByClassName("opcion");

// Info

const titulo = document.getElementById("titulo-info");
const parrafo = document.getElementById("parrafo-info");

// Toggle lista idiomas

idiomaActual.addEventListener("click", () => {
  listaIdiomas.classList.toggle("toggle");
});

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion) => {
  opcion.addEventListener("click", () => {
    const idioma = opcion.getElementsByTagName("span")[0].textContent.toLowerCase();
    establecerIdioma(idioma);
  });
});

function establecerIdioma(idioma) {
  idiomaActual.getElementsByTagName('img')[0].src= `img/${idioma}.png`;

  switch (idioma) {
    case 'españa':
      titulo.textContent = 'Bienvenidos';
      parrafo.textContent = 'Hola a todos me llamo Jesús y voy a ser vuestro profesor en éste curso de programacion'
      
      break;
      case 'inglaterra':
        titulo.textContent = 'Wellcome';
        parrafo.textContent = 'Hello everyone, my name is Jesús and I am going to be your teacher in this programming course.'

        break;
        case 'rumania':
          titulo.textContent = 
          'Bine ati venit';
          parrafo.textContent = 'Salutare tuturor, numele meu este Jesús și voi fi profesorul vostru în acest curs de programare.'
  
    default:
      break;
  }

}
document.addEventListener('DOMContentLoaded',()=>{

      establecerIdioma('españa')
      
      
  
});