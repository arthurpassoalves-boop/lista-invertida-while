//Lista inicial de estudantes armazenada em um array

const listaDeEstudantes = [
    "Beatriz Oliveira",
    "Carlos Eduardo",
    "Daniela Santos",
    "Gabriel Ferreira",
    "Helena Rodrigues",
    "Lucas Vinícius",
];

//obtendo as referências dos elementos HTML por ID.

const elementoLista = document.getElementById("listaEstudantes");
const elementoContados = document.getElementById("contadorNomes");
//.value = pega o valor. sem .value = pega todo o elemento.

function exibirListaAutomaticamente() {
    //Limp o conteúdo atual da lista para evitar duplicações indesejadas

    elementoLista.innerHTML = "";
    //innerHTML = muda o HTML do elemento.

    //Percorre cada posição do Array usando o laço For.
    for (let i = 0; i < listaDeEstudantes.length; i++) { //elemento.length = usa o valor atribuído ao elemento para comparar
        const itemLI = document.createElement("li"); //<li></li> //criação na memória e depois inserção no HTML.
        itemLI.className = "item-nome"; //<li class="item-nome"></li>

        //Define o conteúdo interno do item com o nome e sua respectiva ordem visual.
        itemLI.innerHTML = `
        <span>${listaDeEstudantes[i]}</span>
        <span class="posicao-tag">#${i + 1}</span> 
        `; //i + 1 vai exibir cada aluno a partir da sua posição numérica.

        //anexa o item criado dentro da tag <ul> da página
    elementoLista.appendChild(itemLI);
    //appendChild -> cria um elemento filho dentro do <li>
    }

    // Atualiza a mensagem da barra de status com o total de registros lidos pelo laço.
    elementoContados.innerText = `Total exibido: ${listaDeEstudantes.length} estudantes cadastrados.`;

    elementoContados.style.color = "#16a34a";

    console.log(`Lista exibida com sucesso: ${listaDeEstudantes.length} itens processados`);
}

function limparLista() {
    elementoLista.innerHTML = "";
    elementoContados.innerText = `Lista limpa pelo usuário. Nenhum nome na tela.`;

    elementoContados.style.color = "#475569";
    console.log("Tela limpa.");
    
}

function exibirOrdemInvertida() {
    elementoLista.innerHTML = "";

    let i = listaDeEstudantes.length - 1;

    while(i >= 0) {
        const LIItem = document.createElement("li");
        LIItem.className = "item-nome";

        LIItem.innerHTML = `
        <span>${listaDeEstudantes[i]}</span>
        <span class="posicao-tag">#${i + 1}</span>
        `;

        elementoLista.appendChild(LIItem);
        i--;
    }

    elementoContados.innerText = `Elementos da tabela invertidos.`;
    console.log("Lista invertida");
}