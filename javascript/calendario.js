document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendario');
  var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth', /* Vista inicial del calendario*/
      editable: true, /* Permite la edición de eventos (arrastrar y soltar)*/
      selectable: true, /*Permite seleccionar fechas para crear eventos*/
      events: [], /* Lista inicial de eventos*/
      select: function(info) { /* Función que se ejecuta al seleccionar una fecha*/
          var title = prompt('Ingrese el título del evento:');
          if (title) {
              calendar.addEvent({
                  title: title,
                  start: info.startStr,
                  end: info.endStr
              });
          }
          calendar.unselect(); 
      },
      eventClick: function(info) { /* Función que se ejecuta al hacer clic en un evento*/
          var newTitle = prompt('Edita el título del evento:', info.event.title);
          if (newTitle !== null) {
              info.event.setProp('title', newTitle); // Actualiza el título del evento
          }

          if (confirm('¿Desea eliminar este evento?')) {
              info.event.remove(); /* Elimina el evento*/
          }
      }
  });

  calendar.render(); 
});
