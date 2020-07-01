class TelaInicial{
  constructor(){
    this.pocao = new Pocao(matrizPocao, imagemPocao, width/2-40, height/2.5, 80, 80, 150, 150);
  
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
    this.pocao.exibe();
  }
  
  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);  
  }
  
  _texto() {
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(50);
    text('AS AVENTURAS DE', width/2, height/8);
    textSize(75);
    text('Hipsta', width/2, height/4);
    
    textSize(20);
    textFont('Georgia');
    textStyle(BOLD);
    text('OS TROLLS DA FLORESTA ROUBARAM TODAS AS', width/2, height/3);
    text('POÇÕES DA BRUXINHA HIPSTA!', width/2, height/2.5);
    text('AJUDE-A A RECUPERAR O MÁXIMO POSSÍVEL!', width/2, height/1.5);
    
  }

  
  _botao(){
    botaoGerenciador.y = height/7 * 5;
    botaoGerenciador.draw();
  }
}