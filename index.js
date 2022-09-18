const input = document.querySelector('#input-list');
const buttonSend = document.querySelector('#send');
const buttonClear = document.querySelector('#clear');
const itemList = document.querySelector('#item-list');

let list = [];
// addEventListener -> adiciona um evento ao acontecer o 'click'
buttonSend.addEventListener('click', (event) => {
    // evita padrão que é recarregar a pagina e "enviar"
    event.preventDefault();
    if(input.value){
        addOnList();
        console.log(list);
    }
});

// funcao que adiciona o item na lista
const addOnList = () => {
    // cria um elemento div
    const div = document.createElement('div');
    // seta os atributos da div class="item"
    div.setAttribute('class', 'item');
    // adiciona o valor do input na lista
    list.push(input.value);

    // para cada item da lista
    list.map(item => {
        // class="item" -> item em string
        div.innerText = item;
        // <div>item</div>
        itemList.appendChild(div);
        console.log(item);
    })
    // foca no input
    focusInput();
}

// zera o input e foca no input
const focusInput = () => {
    input.value = "";
    input.focus();
}


buttonClear.addEventListener('click', (e) => {
    e.preventDefault();
    list =[]

})
