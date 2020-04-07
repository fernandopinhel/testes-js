// function disparar(){
//     let criarDiv = document.createElement('div')
//     let pegarCol = document.querySelector('.col')
//     pegarCol.appendChild(criarDiv)
//     criarDiv.className = "d1"

//     let criarParagrafo = document.createElement('p')
//     criarDiv.appendChild(criarParagrafo)

//     function Pessoa(nome, idade, sexo, profissao){
//         this.nome = nome;
//         this.idade = idade;
//         this.sexo = sexo;
//         this.profissao = profissao;
//     }

//     let fernando = new Pessoa("Fernando", "28", "Masculino", "Dev")

//     criarParagrafo.innerHTML = fernando.nome + " " + fernando.idade + " " + fernando.sexo + " " + fernando.profissao
// }



// function dispararLoop(){
//     for(i = 1; i < 2; i++){
        
//         let criarDiv = document.createElement('div')
        
//         let pegarCol = document.querySelector('.col')

//         let id = document.createAttribute('id')

//         id.value = 'div-' + i
        
//         criarDiv.setAttributeNode(id)
        
//         pegarCol.appendChild(criarDiv)
        
//         criarDiv.className = "d1"
        
//         let criarParagrafo = document.createElement('p')
        
//         criarDiv.appendChild(criarParagrafo)
        
//         function Pessoa(nome, idade, sexo, profissao){
//             this.nome = nome;
//             this.idade = idade;
//             this.sexo = sexo;
//             this.profissao = profissao;
//         }

//         let fernando = new Pessoa("Fernando", "28", "Masculino", "Dev")

//         criarParagrafo.innerHTML = fernando.nome + " " + fernando.idade + " " + fernando.sexo + " " + fernando.profissao
//     }   
// }


let cont = 0

function dispararLoop(){
    let criarDiv = document.createElement('div')

    let pegarCol = document.querySelector('.col')

    let id = document.createAttribute('id')

    cont++    
    id.value = 'div-' + (cont)

    criarDiv.setAttributeNode(id)

    pegarCol.appendChild(criarDiv)

    criarDiv.className = "d1"

    let criarParagrafo = document.createElement('p')

    criarDiv.appendChild(criarParagrafo)

    function Pessoa(nome, idade, sexo, profissao){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.profissao = profissao;
    }

    let fernando = new Pessoa("Fernando", "28", "Masculino", "Dev")

    criarParagrafo.innerHTML = fernando.nome + " " + fernando.idade + " " + fernando.sexo + " " + fernando.profissao   
}