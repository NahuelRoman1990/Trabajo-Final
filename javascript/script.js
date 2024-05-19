let tiempoEstudio = 180; // Tiempo en segundos
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modalImg");
let currentSlide = 0;

const temporizador = setInterval(() => {
  tiempoEstudio--;
  if (tiempoEstudio <= 0) {
    clearInterval(temporizador);
    alert('¡Tiempo de estudio finalizado!');
  }
}, 1000); // Intervalo de actualización cada segundo

function calcularResultado() {
  let formulario = document.getElementById('formulario-preguntas');
  let respuestas = formulario.elements;
  let puntaje = 0;
  let respuestasCorrectas = {
    pregunta1: 'correcta',
    pregunta2: 'correcta',
    pregunta3: 'correcta',
    pregunta4: 'correcta',
    pregunta5: 'correcta',
    pregunta6: 'correcta',
    pregunta7: 'correcta',
    pregunta8: 'correcta',
    pregunta9: 'correcta',
    pregunta10: 'correcta',
  };

  for (let i = 0; i < respuestas.length; i++) {
    if (respuestas[i].type === "radio" && respuestas[i].checked) {
      let pregunta = respuestas[i].name;
      let respuestaSeleccionada = respuestas[i].value;

      if (respuestasCorrectas[pregunta] === respuestaSeleccionada) {
        puntaje++;
      }
    }
  }

  alert('Tu puntaje es: ' + puntaje + '/10');
  formulario.reset();
}


document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendario');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth', // Vista inicial del calendario
    editable: true, // Permite la edición de eventos (arrastrar y soltar)
    selectable: true, // Permite seleccionar fechas para crear eventos
    select: function(info) { // Función que se ejecuta al seleccionar una fecha
      var title = prompt('Ingrese el título del evento:');
      if (title) {
        calendar.addEvent({ title: title, start: info.startStr, end: info.endStr });
      }
      calendar.unselect(); // Deselecciona la fecha después de agregar el evento
    },
    events: [] // Array para almacenar eventos (puedes cargar eventos existentes aquí)
  });
  calendar.render(); // Renderiza el calendario
});


function mostrarProfesorInfo(materia) {
  let profesor, dias;
  switch (materia) {
    case 'Programacion':
      profesor = 'Alejo';
      dias = 'Lunes y Miércoles';
      break;
    case 'Quimica':
      profesor = 'Alejo';
      dias = 'Lunes y Miércoles';
      break;
    case 'Historia':
      profesor = 'Valentina';
      dias = 'Martes y Viernes';
      break;
    case 'Geometria':
      profesor = 'Jose';
      dias = 'Martes y Miércoles';
      break;
    case 'Fisica':
      profesor = 'Mauricio';
      dias = 'Miércoles y Jueves';
      break;
    case 'Matematica':
      profesor = 'Veronica';
      dias = 'Jueves y Viernes';
      break;
    case 'Lengua':
      profesor = 'Juancho';
      dias = 'Lunes y Miércoles';
      break;
    default:
      profesor = 'No asignado';
      dias = 'No asignados';
  }
  alert(`Profesor: ${profesor}\nDías de cursado: ${dias}`);
}

document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.getElementById('miFormulario');
  const mensajeEnvio = document.getElementById('mensajeEnvio');

  formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    alert('Nos comunicaremos a la brevedad.');
    formulario.reset();
  });
});

// JavaScript para mostrar el modal
function openModal(imageSrc) {
  var modal = document.getElementById("formulario");
  var modalImg = document.createElement("img");
  modalImg.src = imageSrc;
  modalImg.style.width = "100%";
  
  /* Elimina cualquier imagen existente en el modal*/
  var modalContent = document.querySelector(".modal-content");
  while (modalContent.firstChild) {
    modalContent.removeChild(modalContent.firstChild);
  }

  /*nueva imagen al modal*/
  modalContent.appendChild(modalImg);

  // Muestra el modal
  modal.style.display = "block";
}

/*Cierra el modal cuando se hace clic en el botón de cerrar*/
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  var modal = document.getElementById("formulario");
  modal.style.display = "none";
}

/*mostrar el modal*/
function openModal(imageSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imageSrc;
  captionText.innerHTML = imageSrc.alt;
}

// Cierra el modal cuando se hace clic en el botón de cerrar
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}


function calcularPromedio() {
  let notas = document.querySelectorAll('.nota');
  let total = 0;
  let cantidadNotas = 0;
  let notasValidas = true;

  notas.forEach(function(nota) {
    if (nota.value !== '') {
      let valorNota = parseFloat(nota.value);
      if (valorNota >= 0 && valorNota <= 10) {
        total += valorNota;
        cantidadNotas++;
      } else {
        notasValidas = false;
      }
    }
  });

  if (cantidadNotas > 0 && notasValidas) {
    let promedio = total / cantidadNotas;
    alert('El promedio de las notas es: ' + promedio.toFixed(2));
  } else if (!notasValidas) {
    alert('Por favor ingrese notas válidas entre 0 y 10.');
  } else {
    alert('No hay notas válidas para calcular el promedio.');
  }
}


function agregarCampoNota() {
  let contenedorNotas = document.getElementById('contenedorNotas');
  let nuevoCampo = document.createElement('input');
  nuevoCampo.setAttribute('type', 'number');
  nuevoCampo.setAttribute('class', 'nota');
  nuevoCampo.setAttribute('placeholder', 'Ingrese una nota');
  contenedorNotas.appendChild(nuevoCampo);
}


function agregarContenido() {
  let contenedorContenidos = document.getElementById('contenedorContenidos');
  let nuevoContenido = document.createElement('textarea');
  nuevoContenido.setAttribute('rows', '4');
  nuevoContenido.setAttribute('placeholder', 'Ingrese su contenido o esquema conceptual');
  contenedorContenidos.appendChild(nuevoContenido);
}


