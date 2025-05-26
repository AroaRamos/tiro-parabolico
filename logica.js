// Función para calcular la distancia máxima
function calculaDistancia(angulo, vel_ini) {
  let anguloRad = gradosARadianes(angulo);  // Convertir el ángulo a radianes
  let distancia = (vel_ini * vel_ini * Math.sin(2 * anguloRad)) / 9.81;  // Fórmula para el alcance
  return distancia;
}

// Función para convertir grados a radianes
function gradosARadianes(grados) {
  let radianes = grados * Math.PI / 180;
  return radianes;
}
