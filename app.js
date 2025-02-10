//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){
    let nomeAmigo;
    nomeAmigo = document.getElementById("amigo").value;
    if(nomeAmigo == "" || nomeAmigo == null){
        alert("Por favor, digite um nome!");
    } else {
        amigos.push(nomeAmigo);
    }
    atualizarLista();
    document.getElementById("amigo").value = "";
}

function atualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.innerHTML = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }
    // Sorteia um índice aleatório da lista de amigos
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;
}



