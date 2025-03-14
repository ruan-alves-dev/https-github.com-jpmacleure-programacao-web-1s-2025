function verificarNumeroPrimo(n) {
    if (n <= 1) {
        return false; // Números menores ou iguais a 1 não são primos
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // Se for divisível por qualquer número além de 1 e ele mesmo, não é primo
        }
    }

    return true; // Se passar por todas as verificações, é primo
}
