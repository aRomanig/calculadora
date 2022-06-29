let num1 = ''
let num2 = ''
let op;
let resultado;
let isNum2 = false
const display = document.getElementById('resultado')

function igual() {
    switch (op) {
        case 'soma':
            resultado = Number.parseFloat(num1) + Number.parseFloat(num2);
            break;
        case 'sub':
            resultado = Number.parseFloat(num1) - Number.parseFloat(num2);
            break;
        case 'mult': 
            resultado = Number.parseFloat(num1) * Number.parseFloat(num2);
            break;
        case 'div': 
            resultado = Number.parseFloat(num1) / Number.parseFloat(num2);
            break;
        default: 
            resultado = '%OP INVALIDA'
    }
    display.innerHTML = String(resultado)
}

function clique(btID) {
    botao = document.getElementById(btID)
    if (botao.classList.contains('espec')) {
        switch (btID) {
            case 'mais': 
                op = 'soma'
                break;
            case 'menos':
                op = 'sub'
                break;
            case 'vezes':
                op = 'mult'
                break;
            case 'barra':
                op = 'div'
                break;
            default:
                op = 'x'
        }
        isNum2 = true
    } else {
        if (!isNum2) {
            num1 += btID
            display.innerHTML = num1
        } else {
            num2 += btID
            display.innerHTML = num2
        }
    }
}

function reset() {
    document.location.reload()
}