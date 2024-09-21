var planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"]
var us = prompt("Digite o nome de um planeta")

if ((planetas.includes(us)) == true){
    alert ("O planeta " + us + " está na lista")
}else{
    alert ("O planeta que você inseriu não está na lista")
}