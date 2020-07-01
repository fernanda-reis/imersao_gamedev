class Pontuacao {
  
  constructor() {
    this.pontos = 0;
  }
  
  exibe(){
    textFont(fonteTelaInicial);
    textAlign(RIGHT);
    fill('#fff');
    textSize(50);
    text(parseInt(this.pontos), width - 30, 50);
  }
  
  pontuar(){
  this.pontos = this.pontos + 1
  }
}