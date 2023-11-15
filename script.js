function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Não é possível dividir por zero.";
    }
    return a / b;
}

let continuar = true;

while (continuar) {
    let operacao = window.prompt("Escolha a operação: soma, subtração, multiplicação, divisão ou sair.");

    switch (operacao.toLowerCase()) {
        case 'soma':
            let num1 = parseFloat(window.prompt("Digite o primeiro número:"));
            let num2 = parseFloat(window.prompt("Digite o segundo número:"));
            alert(`Resultado da soma: ${soma(num1, num2)}`);
            break;
        case 'subtração':
            num1 = parseFloat(window.prompt("Digite o primeiro número:"));
            num2 = parseFloat(window.prompt("Digite o segundo número:"));
            alert(`Resultado da subtração: ${subtracao(num1, num2)}`);
            break;
        case 'multiplicação':
            num1 = parseFloat(window.prompt("Digite o primeiro número:"));
            num2 = parseFloat(window.prompt("Digite o segundo número:"));
            alert(`Resultado da multiplicação: ${multiplicacao(num1, num2)}`);
            break;
        case 'divisão':
            num1 = parseFloat(window.prompt("Digite o primeiro número:"));
            num2 = parseFloat(window.prompt("Digite o segundo número:"));
            alert(`Resultado da divisão: ${divisao(num1, num2)}`);
            break;
        case 'sair':
            continuar = false;
            alert("Até a próxima!");
            break;
        default:
            alert("Operação inválida.");
            break;
    }
}
