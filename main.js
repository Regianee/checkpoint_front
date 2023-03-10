//Capturando os elementos, através dos seletores do DOM
let toggleswitch = document.getElementById('toggleSwitch');
let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let p = document.querySelector('p');
let cardsList = document.querySelectorAll('.card');

/* Função que é chamada pelo onChanged ao clicar no ToggleSwitch */
function alteraTema() {

    // Verifica qual o valor que é retornado pelo Switch
    //console.log(switchValue.checked);

    if (toggleswitch.checked) { //Caso seja verdadeiro, ou seja, o botão foi clicado

        /* Adicionando as classes (dark-mode) css nos elementos capturados */
        cardsList.forEach(card => {
            card.classList.add('cards-dark');
            body.classList.add('body-dark');
            h1.classList.add('h1-dark');
            h2.classList.add('h2-dark');
            p.classList.add('p-dark');
        });

        cardsList.forEach(card => {
            card.querySelector('h2').classList.add('h2-dark')
            card.querySelector('p').classList.add('p-dark')
        });

        /* Remove as classes adicionadas anteiormente, assim, a página volta para o "modo-claro" */
    } else {

        //body.classList.remove('body-dark');//funcionando
        // h1.classList.remove('h1-dark');//só o primeiro card
        // h2.classList.remove('h2-dark');//só o primeiro card
        // p.classList.remove('p-dark');//só o primeiro card

        //Percorre a lista de elementos, para fazer a remoção em cada um dos itens
        cardsList.forEach(card => {
            card.classList.remove('cards-dark');
            p.classList.remove('p-dark');
            h2.classList.remove('h2-dark');
        });
    }
}