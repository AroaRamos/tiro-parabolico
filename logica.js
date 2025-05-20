function calculaDistancia( angulo, vel-ini ) {
  let distancia = vel-ini * vel-ini * Math.sin(2*angulo)/9.81;
    return distancia;
}

function gradosARadianes(grados){
  let radianes = grados*Math.PI/180;
  return radianes;
}
