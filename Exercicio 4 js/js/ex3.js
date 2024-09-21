var lista = ["Banana", "Maça", "Pera", "Maracuja"]
alert(lista.join(", "))
var frutas = ""
Comprar_frutas()

function Comprar_frutas() {
    Frutas = prompt("Escolha uma fruta")
    if (lista.includes(Frutas)) {
        removeA(lista, Frutas)
        alert("A fruta " + Frutas + " Foi removida")
        if (lista.length === 0) {
            alert("Lista de compras finalizada")
        } else {
            inicio()
        }

    } else {
        alert("Escreva uma fruta da lista")
        Comprar_frutas();
    }
}

function inicio() {
    alert(lista.join(","))
    if (lista.length === 0) {
        alert("Lista de compras finalizada")
    } else {
        Comprar_frutas()
    }
}
function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L]; while ((ax = arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}