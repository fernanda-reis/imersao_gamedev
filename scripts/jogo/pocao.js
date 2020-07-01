class Pocao extends Animacao {

  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {

    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.isItem = true;
    this.velocidade = 10;
    this.x = x;
    this.xInicial = x;
    
  }
  
    move() {
    this.x = this.x - this.velocidade;
      if(this.x  < 0){ 
        this.x = this.xInicial
      }
    }
  
  esconder(pocao) {
    pocao.x = this.xInicial;
  }
}