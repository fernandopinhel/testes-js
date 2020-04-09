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

    // const divs = document.querySelectorAll('[divs]')
    // console.log(divs) 
    //divs.forEach((el) => el.classList.remove("hide"));
}

function eventoClickNull(){
    let e = document.getElementById("exampleFormControlSelect1");
    let itemSelecionado = e.options[e.selectedIndex = "0"].text;
    let textArea = document.getElementById("exampleFormControlTextarea1");
    textArea.innerHTML = " "
}


// Jquery
// carregando divs do select

$(function() { //onload aqui
    $('#exampleFormControlSelect1').on('change', function() {
      $('[divs]').hide();
      let idSelecionado = $(this).val(); //construir o id
      if (idSelecionado != "")
      $("#" + idSelecionado).show(); //mostrar o elemento
    });
  
    $('#exampleFormControlSelect1').trigger("change"); //aplicar a lógica do change
  })

// Fim Pegando o texto do option


 
 