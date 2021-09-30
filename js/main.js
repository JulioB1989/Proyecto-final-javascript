/*----Llamando a un JSON estatico para mostrar informacion en la pagima-------*/

$('.btn-container').click(() => {
  $('.encabezado').toggle();
});


let contenido = document.querySelector('#contenido')

function obtener (){
  fetch ('data_juegos.json') 
    .then ( res => res.json())
    .then ( datos => {
      tabla(datos)
    })
  }
function tabla (datos){ 
 contenido.innerHTML='';
 for (let valor of datos) {
   contenido.innerHTML += `
   <tr>
      <th scope="row">${valor.id}</th>
      <td>${valor.nombre}</td>
      <td>${valor.jugadores}</td>
      <td>${valor.clasificacion}</td>
      </tr>`
   
 }
  
}
/*-------------CARD de juegos disponibles--------------------*/

$(".juedosDisponibles-card").append(`<div class="card text-white bg-secondary mb-3" style="width: 18rem;">
<img src="./img/card_ludo.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Ludo</h5>
  <p class="card-text">Se juega con dados de 6 caras y el objetivo es trasladar las 4 fichas desde la partida hasta la llegada. las fichas se mueven de izquierda a derecha,A cada jugador, en su turno, le corresponde lanzar el dado y mover sus fichas si le corresponde</p>
  <a href="./juego/juego.html" class="btn btn-dark">Juega Ya!!</a>
</div>
</div>
<div class="card text-white bg-secondary mb-3" style="width: 18rem;">
<img src="./img/card_ajedrez.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Ajedrez</h5>
  <p class="card-text">El objetivo es «derrocar» al rey del oponente. Esto se hace amenazando la casilla que ocupa el rey con alguna de las piezas propias sin que el otro jugador pueda proteger a su rey,lo que trae como resultado el jaque mate y el fin de la partida..</p>
  <p>PROXIMAMENTE !!</p>
</div>
</div>
<div class="card text-white bg-secondary mb-3" style="width: 18rem;">
<img src="./img/card_monopolio.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Monopolio</h5>
  <p class="card-text">El objetivo es poseer inmuebles. Los jugadores mueven fichas por turnos alrededor de un tablero, segun  puntuación de los dados, caen en propiedades que pueden comprar de un banco imaginario, o dejar que el banco las subaste en caso de no ser compradas.</p>
  <p>PROXIMAMENTE !!</p>
</div>
</div>

<div class="card text-white bg-secondary mb-3" style="width: 18rem;">
<img src="./img/card_damas.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Damas</h5>
  <p class="card-text">Consiste en mover las piezas en diagonal a través de los cuadros de un tablero de 64 o 100 cuadros. Si alguien no mata, perderá esa pieza al jugar contrario a la intención obligatoria de capturar las piezas del jugador contrario, pasando por encima de dichas piezas.</p>
  <p>PROXIMAMENTE !!</p>
</div>
</div>`);


