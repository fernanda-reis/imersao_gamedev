function preload() {
  
  fita = loadJSON('fita/fita.json');
  
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  
  imagemVida = loadImage('imagens/assets/coracao.png');
  
  imagemPocao = loadImage('imagens/assets/pocao.png');
      
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  
  imagemInimigoGotinha = loadImage('imagens/inimigos/gotinha.png');
  
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  
  somJogo = loadSound('sons/trilha_jogo.mp3');
  
  somPulo = loadSound('sons/somPulo.mp3');
  
  somHit = loadSound('sons/hit.mp3');
  
  somTwinkle = loadSound('sons/twinkle.mp3');
  
}