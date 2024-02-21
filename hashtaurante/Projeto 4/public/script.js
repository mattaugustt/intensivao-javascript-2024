const botaoEnviar = document.getElementById('enviar');
const caixaMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');

// estabelecendo a conexão do socket com o front-end
const socket = io();

botaoEnviar.addEventListener('click', () => {
    if (caixaMensagem.value !== '') {
        socket.emit('nova mensagem', caixaMensagem.value);
        caixaMensagem.value = '';
    }
})

socket.addEventListener('nova mensagem', (msg) => {
    const elementoMensagem = document.createElement('li');
    //cria uma tag <li></li>
    elementoMensagem.textContent = msg;
    //adiciona a mensagem (msg) no li
    elementoMensagem.classList.add('mensagem');
    chat.appendChild(elementoMensagem);
});