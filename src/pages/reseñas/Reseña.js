// Importar Axios
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
  const reseñasList = document.getElementById('reseñas-list');

  // Realizar la solicitud GET a la API para obtener las reseñas
  axios.get('http://localhost:3000/api/obtenerreseñas')
    .then(response => {
      // Llenar la lista con las reseñas obtenidas
      response.data.forEach(reseña => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${reseña.Nombre} ${reseña.Apellido}</strong>: ${reseña.Mensaje}`;
        reseñasList.appendChild(listItem);
      });
    })
    .catch(error => console.error('Error al obtener reseñas:', error));
});