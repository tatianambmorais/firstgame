//codigo do carro
let yCarros = [40, 96, 150, 210, 270, 318]
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3]
let xCarros = [600, 600, 600, 600, 600, 600]

function mostraCarro(){
  for (let i=0; i < imagensCarro.length; i = i + 1){
    
    image(imagensCarro[i], xCarros [i], yCarros [i], 50, 40);
  }
}

function movimentaCarro(){
  for (let i=0; i < imagensCarro.length; i=i+1){ 
  xCarros[i]-=velocidadeCarros [i];
  }
}

function voltaPosiçãoInicialDoCarro(){
  for (let i=0; i < imagensCarro.length; i=i+1){
  if(passouTodaATela (xCarros[i])){
    xCarros[i]=600
  }
}
}

function passouTodaATela (xCarro){
  return xCarro < -50;
}