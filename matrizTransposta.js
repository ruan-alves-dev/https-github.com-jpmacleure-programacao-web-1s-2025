function transporMatriz(A) {
    console.log("Matriz Original:");
    A.forEach(linha => console.log(linha.join(" "))); // Imprime a matriz original

    const matrizTransposta = A[0].map((_, coluna) => A.map(linha => linha[coluna])); // Realiza a transposição

    console.log("\nMatriz Transposta:");
    matrizTransposta.forEach(linha => console.log(linha.join(" "))); // Imprime a matriz transposta

    return matrizTransposta; // Retorna a matriz transposta, se necessário
}
