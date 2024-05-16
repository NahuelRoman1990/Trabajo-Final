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
        calendar.unselect(); 
      },
      events: [] 
    });
    calendar.render(); 
  });
  