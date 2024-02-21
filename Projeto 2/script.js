const imagemVisualizacao = document.getElementById('imagem-visualizacao');


const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
};

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
};

const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
};

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
};

const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};


const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];


let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    // charAt pega o caractere na posição indicada (no caso na posição 0)
    // precisamos do caractere 0 pois o id está no formato '0-imagem'
    // dessa forma vamos saber a imagem pelo numero

    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg'; 
}


const tituloProduto = document.getElementById('titulo-produto');


const opcoesTamanho = ['41 mm', '45 mm'];


function trocarTamanho() {
    //atualizar variavel de controle de tamanho ('tamanhoSelecionado') da caixa
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);

    // mudar o titulo do produto (de um tamanho pra outro)
    tituloProduto.innerText = 'Pulseira loop esportiva ' + opcoesCores[corSelecionada].nome + ' para caixa de ' + opcoesTamanho[tamanhoSelecionado];
    // innerText -> texto dentro da tag

    // mudar o tamanho da imagem de acordo com a opção
    if (opcoesTamanho[tamanhoSelecionado] === '41 mm') {
        imagemVisualizacao.classList.add('caixa-pequena');
    }
    else {
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
}



const tituloCor = document.getElementById('nome-cor-selecionada');


const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');

function trocarCor() {
    // atualizar a corSelecionada
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);

    // trocar titulo da pagina para a cor especifica
    tituloProduto.innerText = 'Pulseira loop esportiva ' + opcoesCores[corSelecionada].nome + ' para caixa de ' + opcoesTamanho[tamanhoSelecionado];
    
    // trocar titulo da cor
    tituloCor.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome;

    // trocar as imagens miniaturas para a cor selecionada
    miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg'; 
    miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg'; 
    miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg'; 

    // trocar a imagemVisualização para a cor selecionada
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg'; 

}
