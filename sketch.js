

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  somJogo.loop();
  jogo = new Jogo();
  jogo.setup();
  telaInicial = new TelaInicial();
  cenas = {
    jogo,
    telaInicial
  };
  botaoGerenciador = new BotaoGerenciador('PLAY', width/2, height/2);
  
}

function keyPressed(){
    jogo.keyPressed();
}


function draw() {
   cenas[cenaAtual].draw();
}



