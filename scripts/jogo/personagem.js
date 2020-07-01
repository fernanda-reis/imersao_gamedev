class Personagem extends Animacao {

  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {

    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

    this.invencivel = false;

    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    this.pulos = 0;
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
    this.alturaDoPulo = -30;

  }

  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      somPulo.play();
      this.pulos++;
    }
  }
  
  anda() {
    if(keyIsDown(LEFT_ARROW) && this.x > 0 ){
      this.x = this.x - 10;
    } else if (keyIsDown(RIGHT_ARROW) && this.x < width - 100) {
      this.x = this.x + 10;
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }

  tornarInvencivel() {
    this.invencivel = true;
    
    setTimeout(() => {
      this.invencivel = false;
    }, [1000])
  }
  
  

  colidindoInimigo(inimigo) {
    
    if(this.invencivel){ return false; }
    
    //const precisao = .7

    const colisao = collideCircleCircle(

      /* this.x, 
       this.y,
       this.largura * precisao, 
       this.altura * precisao,
       inimigo.x, 
       inimigo.y,
       inimigo.largura * precisao, 
       inimigo.altura * precisao */

      this.x + this.largura / 2,
      this.y + this.altura / 2,
      this.largura * 0.6,
      inimigo.x + inimigo.largura / 2,
      inimigo.y + inimigo.altura / 2,
      inimigo.largura * 0.6


    )
    return colisao;
  }
  
  colidindoPocao(pocao){
    
     //if(this.invencivel){ return false; }

     const colisao = collideCircleCircle(

      this.x + this.largura / 2,
      this.y + this.altura / 2,
      this.largura * 0.6,
      pocao.x + pocao.largura / 2,
      pocao.y + pocao.altura / 2,
      pocao.largura * 0.6
    )
    return colisao;
  
  }
}