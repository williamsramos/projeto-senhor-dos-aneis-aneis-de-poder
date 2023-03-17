/*
    OBJETIVO -  quando clicarmos no botão temos  que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemnto HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    passo 4 - marcar o botão clicando como se estivesse selecionada
    passo 5 - esconder a imagem de fundo anterior 
    passo 6 fazer aparecer a imagem  de fundo correspondente ao botão clicado
*/

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) =>{
    botao.addEventListener('click', () =>{
        
        deativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);


        esconderImagemAtiva();

        mostarImagemdeFundo(indice);

    })
})

function mostarImagemdeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function deativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
