let xBolinha = 300
let yBolinha = 200
let diametro = 40
let raio = diametro / 2

let velocidadeXBolinha = 6
let velocidadeYBolinha = 6
let raqueteComprimento = 10
let raqueteAltura = 90

let xRaquete = 5
let yRaquete = 150

let xRaqueteOponente = 580
let yRaqueteOponente = 150
let velocidadeYOponente = 6


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha()
  movimentaBolinha()
  verificaColisao()
  mostraRaquete()
  mostraRaqueteOponete ()
  movimentaMinhaRaquete()
  verificaColisaoRaquete()
  movimentaRaqueteOponente()
   
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro)
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}

function verificaColisao() {
  if (xBolinha + raio > width || 
      xBolinha - raio < 0) {
    velocidadeXBolinha *= -1
  }
  if (yBolinha + raio > height || 
      yBolinha - raio < 0){
    velocidadeYBolinha *= -1
  }
}

function mostraRaquete (){
  rect(xRaquete, yRaquete, raqueteComprimento,         raqueteAltura)
}

function mostraRaqueteOponete (){
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura)
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete +=10
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1
  }
}

function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30
  yRaqueteOponente += velocidadeYOponente
}

