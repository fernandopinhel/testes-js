// Pegando o value do option
// function eventoClick(){
//     let e = document.getElementById("exampleFormControlSelect1");
//     let itemSelecionado = e.options[e.selectedIndex].value;
//     let textArea = document.getElementById("exampleFormControlTextarea1");
//     textArea.innerHTML = itemSelecionado
// }
// Fim pegando o value do option

// Pegando o texto do option
function eventoClick(){
    let e = document.getElementById("exampleFormControlSelect1");
    let itemSelecionado = e.options[e.selectedIndex].text;
    let textArea = document.getElementById("exampleFormControlTextarea1");
    textArea.innerHTML = itemSelecionado

    let divs = document.querySelector('[divs]')
    divs.classList.remove("hide")
}

function eventoClickNull(){
    let e = document.getElementById("exampleFormControlSelect1");
    let itemSelecionado = e.options[e.selectedIndex = "0"].text;
    let textArea = document.getElementById("exampleFormControlTextarea1");
    textArea.innerHTML = " "
}
// Fim Pegando o texto do option


