function somar() {
    let numero1 = +document.getElementById("primeiroNumero").value
    let numero2 = +document.getElementById("segundoNumero").value
    const resultado = document.getElementById("resultado")
    resultado.value = numero1 + numero2
}

function subtrair() {
    let numero1 = +document.getElementById("primeiroNumero").value
    let numero2 = +document.getElementById("segundoNumero").value
    const resultado = document.getElementById("resultado")
    resultado.value = numero1 - numero2
}

function multiplicar() {
    let numero1 = +document.getElementById("primeiroNumero").value
    let numero2 = +document.getElementById("segundoNumero").value
    const resultado = document.getElementById("resultado")
    resultado.value = numero1 * numero2
}

function dividir() {
    let numero1 = +document.getElementById("primeiroNumero").value
    let numero2 = +document.getElementById("segundoNumero").value
    const resultado = document.getElementById("resultado")
    resultado.value = numero1 / numero2
}