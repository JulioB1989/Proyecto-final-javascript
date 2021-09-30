/*--------------------------Ver Reglas del Ludo------------------------------------------- */

$('.reglas').click ( ()=> {

    $('.reglas-listas').append (`
    <ol>
    <li>Selecciona el color</li>
    <li>Arrastra las fichas con el mouse a cada casilla segun el color que eligas</li>
    <li>Tira el dado (con N° 6 sacas fichas de la casa) y avanzas la cantidad de pasos</li>
    <li>LLeva las 4 fichas hasta la meta</li>
    <li>Presiona el boton "GANÉ" para anunciar tu triunfo</li>
    </ol>`);
  
    $('.reglas').click (()=> {
      $('.reglas-listas').hide()  
    })
  });
  /*---------------------Ingreso de los colores-----------------------------*/
  
  let boton = document.getElementById("boton");
  let seleccion = document.getElementById("lista");
  let checks = document.querySelectorAll(".valores");
  
  boton.addEventListener("click", function () {
    seleccion.innerHTML = "";
    checks.forEach((e) => {
      if (e.checked == true) {
        let elemento = document.createElement("li");
        elemento.className = "list-group-item";
        elemento.innerHTML = e.value;
        seleccion.appendChild(elemento);
      }
    });
  });
  
  /*---------------Movimiento del dado---------------*/
  
  const dices = {
    1: "uno",
    2: "dos",
    3: "tres",
    4: "cuatro",
    5: "cinco",
    6: "seis",
  };
  
  $(".dados").click(() => numeroRamdom);
  
  
  function numeroRamdom() {
    return Math.ceil(Math.random() * 6);
  
  }
  
  let contador = 0;
  
  $("#botonDados").click(() => {
    let dado;
    let value = "";
    value = dices[`${numeroRamdom()}`];
    dado = $(`#${value}`);
    dado.show("fast", () => {
      dado.hide(4000);
    });
  
  });
  
  
  /*---------------------Movimiento de fichas por el tablero-----------------------*/
  
  movimiento = function (div) {
    difX = 0;
    difY = 0;
    div.addEventListener("mousedown", inicio);
  
    function inicio(e) {
      let eX = e.pageX;
      let eY = e.pageY;
      let oX = parseInt(div.style.left);
      let oY = parseInt(div.style.top);
      difX = oX - eX;
      difY = oY - eY;
      document.addEventListener("mousemove", mover);
      document.addEventListener("mouseup", soltar);
    }
  
    function mover(e) {
      let tY = e.pageY + difY + "px";
      let tX = e.pageX + difX + "px";
      div.style.top = tY;
      div.style.left = tX;
    }
  
    function soltar(e) {
      document.removeEventListener("mousemove", mover);
      document.removeEventListener("mouseup", soltar);
    }
  };
  
  let mover1 = new movimiento(document.getElementById("arrastrar"));
  let mover12 = new movimiento(document.getElementById("arrastrarDos"));
  let mover13 = new movimiento(document.getElementById("arrastrarTres"));
  let mover14 = new movimiento(document.getElementById("arrastrarCuatro"));
  let mover2 = new movimiento(document.getElementById("arrastrar2"));
  let mover25 = new movimiento(document.getElementById("arrastrarCinco"));
  let mover26 = new movimiento(document.getElementById("arrastrarSeis"));
  let mover27 = new movimiento(document.getElementById("arrastrarSiete"));
  let mover3 = new movimiento(document.getElementById("arrastrar3"));
  let mover38 = new movimiento(document.getElementById("arrastrarOcho"));
  let mover39 = new movimiento(document.getElementById("arrastrarNueve"));
  let mover310 = new movimiento(document.getElementById("arrastrarDiez"));
  let mover4 = new movimiento(document.getElementById("arrastrar4"));
  let mover411 = new movimiento(document.getElementById("arrastrarOnce"));
  let mover412 = new movimiento(document.getElementById("arrastrarDoce"));
  let mover413 = new movimiento(document.getElementById("arrastrarTrece"));
  
  /*----Aviso de que un jugador logro llevar todas las fichas a la meta-------*/
  
  $('.gane').click(() => {
    $('.win').toggle();
    $("html,body").animate({
        scrollTop: $("#win").offset().top,
      },
      0
    );
  });
  
  
  