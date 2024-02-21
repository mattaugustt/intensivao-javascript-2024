

const botaoPlayPause = document.getElementById('play-pause');
// pega o elemento botão através do id no html.

const audioCapitulo = document.getElementById('audio-capitulo');

const botaoProximo = document.getElementById('proximo');

const botaoAnterior = document.getElementById('anterior');

const capitulo = document.getElementById('capitulo');

const numeroCapitulos = 10;
let taTocando = 0;
// variavel do tipo let é mutavel, diferente de const
let capituloAtual = 1;


function tocarFaixa() {
  audioCapitulo.play();
  botaoPlayPause.classList.remove('bi-play-circle-fill');
  botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa() {
  audioCapitulo.pause();
  botaoPlayPause.classList.remove('bi-pause-circle-fill');
  botaoPlayPause.classList.add('bi-play-circle-fill');
}


function tocarOuPausar() {
  if (taTocando === 0) {
    tocarFaixa();
    taTocando = 1;
  }
  else {
    pausarFaixa();
    taTocando = 0;
  }
}


function trocarNomeFaixa() {
  capitulo.innerText = 'Capitulo ' + capituloAtual;
}


function proximaFaixa() {
  if (capituloAtual === numeroCapitulos) {
    capituloAtual = 1;
  }
  else {
    capituloAtual = capituloAtual + 1;
}

  audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3'; 
  tocarFaixa();
  taTocando = 1;
  trocarNomeFaixa();

}



function faixaAnterior() {
  if (capituloAtual === 1) {
    capituloAtual = numeroCapitulos;
  }
  else {
    capituloAtual = capituloAtual - 1;
}

  audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3'; 
  tocarFaixa();
  taTocando = 1;
  trocarNomeFaixa();

}


// adiciona o evento de click no botão 
botaoPlayPause.addEventListener('click', tocarOuPausar);
// evento que queremos, função que vai ser executada

botaoProximo.addEventListener('click', proximaFaixa);

botaoAnterior.addEventListener('click', faixaAnterior);