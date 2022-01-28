var estrada,imagemEstrada,corredor,imagemCorredor
function preload(){
  //imagens pré-carregadas~
  imagemEstrada=loadAnimation('path.png')
  imagemCorredor=loadAnimation('Runner-1.png','Runner-2.png')
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  estrada=createSprite(200,200)
  corredor=createSprite(200,350)
  estrada.addAnimation('estrada',imagemEstrada)
  corredor.addAnimation('corredor',imagemCorredor)
  corredor.scale=0.1
  estrada.velocityY=2
}

function draw() {
  background(0);
drawSprites()
corredor.x=mouseX
if(estrada.y>400){
  estrada.y=estrada.width/2
}
}

