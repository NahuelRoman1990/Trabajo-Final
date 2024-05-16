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





