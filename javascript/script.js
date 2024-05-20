let tiempoEstudio = 180; // Tiempo en segundos
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modalImg");
let currentSlide = 0;

const temporizador = setInterval(() => {
  tiempoEstudio--;
  if (tiempoEstudio <= 0) {
    clearInterval(temporizador);
    alert('¡Tiempo de 2 horas!');
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
  let modal = document.getElementById("formulario");
  let modalImg = document.createElement("img");
  modalImg.src = imageSrc;
  modalImg.style.width = "100%";
  
  /* Elimina cualquier imagen existente en el modal*/
  let modalContent = document.querySelector(".modal-content");
  while (modalContent.firstChild) {
    modalContent.removeChild(modalContent.firstChild);
  }

  /*nueva imagen al modal*/
  modalContent.appendChild(modalImg);

  // Muestra el modal
  modal.style.display = "block";
}

/*Cierra el modal cuando se hace clic en el botón de cerrar*/
let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  let modal = document.getElementById("formulario");
  modal.style.display = "none";
}

/*mostrar el modal*/
function openModal(imageSrc) {
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("img01");
  let captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imageSrc;
  captionText.innerHTML = imageSrc.alt;
}

/*Cierra el modal cuando se hace clic en el botón de cerrar*/
function closeModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}


function calcularPromedio() {
  /* Obtener los valores de las notas*/
  let nota1 = parseFloat(document.getElementById('nota1').value);
  let nota2 = parseFloat(document.getElementById('nota2').value);
  let nota3 = parseFloat(document.getElementById('nota3').value);

  /* Verificar que las notas estén dentro del rango válido */
  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
      alert('Por favor, ingresa números válidos entre 0 y 10 para las notas.');
      return;
  }

  /*Calcular el promedio*/
  let promedio = (nota1 + nota2 + nota3) / 3;

  /*Mostrar el resultado del promedio y redondear a maximo 2 decimales*/
  document.getElementById('resultadoPromedio').innerText = 'El promedio de las notas es: ' + promedio.toFixed(2);

  /*Limpia los campos donde se ingresan las notas*/ 
  document.getElementById('nota1').value = "";
  document.getElementById('nota2').value = "";
  document.getElementById('nota3').value = "";
}


function agregarCampoNota() {
  let contenedorNotas = document.getElementById('contenedorNotas');
  let nuevoCampo = document.createElement('input');
  nuevoCampo.setAttribute('type', 'number');
  nuevoCampo.setAttribute('class', 'nota');
  nuevoCampo.setAttribute('placeholder', 'Ingrese una nota');
  contenedorNotas.appendChild(nuevoCampo);
}

function agregarContenido(event) {
  event.preventDefault(); 
  const titulo = document.getElementById('titulo').value;
  const contenido = document.getElementById('contenido').value;
  console.log('Título:', titulo);
  console.log('Contenido:', contenido);
  document.getElementById('agregarContenidoForm').reset();
}