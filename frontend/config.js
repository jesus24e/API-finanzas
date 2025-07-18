const API_URL ="https://app-finanzas-fvx3.onrender.com";
// const API_URL = "http://localhost:3000"

function formatearFecha(fechaSF) {
  const fecha = new Date(fechaSF);

  // Convertir a la hora local de México
  const opcionesFecha = {
    timeZone: 'America/Mexico_City',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  };

  const opcionesHora = {
    timeZone: 'America/Mexico_City',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };

  const fechaStr = fecha.toLocaleDateString('es-MX', opcionesFecha);
  const horaStr = fecha.toLocaleTimeString('es-MX', opcionesHora);

  const [dia, mes, año] = fechaStr.split('/');
  const [horas, minutos] = horaStr.split(':');

  return `${año}-${mes}-${dia}T${horas}:${minutos}`;
}