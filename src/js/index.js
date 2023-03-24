/* 

Objetivo 1 - Quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o video do trailer.

    Passo 1 - Dar um jeito de pegar o elemento que representa o botão na tela usando o js.
    Passo 2 - Dar um jeito de identificar quando o usuário clicar no botão.
    Passo 3 - Dar um jeito de pegar o elemento da modal no js.
    Passo 4 - Abrir a modal na tela.

Objetivo 2 - Quando o usuário clicar no X devemos fechar o modal.

    Passo 1 - Dar um jeito de pegar o elemento de fechar o modal usando o js.
    Passo 2 - Dar um jeito de identificar quando o usuário clicar no X
    Passo 3 - Fechar o modal

*/

// Objetivo 1

function alternarModal(){
    modal.classList.toggle('aberto')
}

// #Passo 1

const botaoTrailer = document.querySelector('.botao-trailer');

// #Passo 2
// #Passo 4

botaoTrailer.addEventListener('click', () => {
    alternarModal()
    video.setAttribute('src', linkDoVideo)
});

// #Passo 3

const modal = document.querySelector('.modal');

// Objetivo 2

// #Passo 1

const botaoFecharModal = document.querySelector('.fechar-modal');

// #Passo 2
// #Passo 3

botaoFecharModal.addEventListener('click', () => {
    alternarModal()
    video.setAttribute('src', '')
});

const video = document.getElementById('video');
const linkDoVideo = video.src;


