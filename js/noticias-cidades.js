function getSelected() { // Retorna o valor do item selecionado

    var selected = document.getElementById('cidade').value; // Pega o valor do item selecionado
    console.log(selected); // Imprime no console o valor do item selecionado

    var cardTitle = document.getElementsByClassName('card-title'); // Pega todos os elementos com a classe card-title
    for (var i = 0; i < cardTitle.length; i++) { // Percorre todos os elementos com a classe card-title
        cardTitle[i].innerHTML = selected; // Substitui o valor do item selecionado pelo valor do item selecionado
    } // Fim for

} // Fim getSelected