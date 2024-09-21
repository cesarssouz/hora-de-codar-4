var estudantes = []

function cadastro(){
    while(true){
        var nome = prompt("Digite um nome para adicionar na lista de estudantes. Caso queria parar, digite 'PARE'")

        if(nome === "PARE"){
            final()
            break;
        }
        if(nome ){
            estudantes.push(nome)
        }
    }
}
function final(){
    document.write ("A lista de estudantes é " + estudantes.join(", "))
}
cadastro()