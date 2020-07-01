class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }
  
  
  setup() {

    cenario = new Cenario(imagemCenario, 3);

    pontuacao = new Pontuacao();
    
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    
    pocao1 = new Pocao(matrizPocao, imagemPocao, width, height/2, 60, 60, 150, 150);
    pocao2 = new Pocao(matrizPocao, imagemPocao, width + 500, height/3, 60, 60, 150, 150);
    
    pocoes.push(pocao1);
    pocoes.push(pocao2);
    
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);

    const inimigoGotinha = new Inimigo(matrizInimigoGotinha, imagemInimigoGotinha, width, 30, 52, 52, 104, 104, 10);

    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width, 200, 100, 75, 200, 150, 10);

    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10);

    inimigos.push(inimigoGotinha);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
  }

  keyPressed() {
    if (key === 'Enter' && vida.vidas === 0){
      jogo.reset();
    } else if (key === 'ArrowUp') {
      personagem.pula();
    } 
}  
  
  reset() {
    vida.vidas = fita.configuracoes.vidaMaxima;
    personagem.x = 0;
    this.indice = 0;
    inimigos.forEach(i => {
      i.x = width;
    });
    pocoes.forEach(p => {
      p.x = p.xInicial;
    })
    pontuacao.pontos = 0;
    this.draw();
    somJogo.loop();
    loop();
  }

  draw() {

    cenario.exibe();
    cenario.move();
    
    vida.draw();
  
    pontuacao.exibe();

    personagem.exibe();
    personagem.aplicaGravidade();
    personagem.anda();
    
    pocoes.forEach(pocao => {
      pocao.exibe();
      pocao.move();
      
      if (personagem.colidindoPocao(pocao)){
      pocao.esconder(pocao);  
      somTwinkle.play();
      pontuacao.pontuar();  
    }});
    
    const linhaAtual = this.mapa[this.indice];
    
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;
    
    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.reaparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0
      }

    }

    if (personagem.colidindoInimigo(inimigo)) {
      
      vida.perdeVida();
      personagem.tornarInvencivel();
      
      if(vida.vidas === 0){
      somJogo.stop();
      image(imagemGameOver, width / 2 - 200, height / 3);
      textFont('Arial');
      textAlign(CENTER);
      textSize(20);
      text('PRESSIONE ENTER', width/2, height/1.9);
      text('PARA TENTAR DE NOVO', width/2, height/1.75);
      noLoop();
        
      }
    }

    }

}