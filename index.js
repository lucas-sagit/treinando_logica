function eleicao() {
    const input_name = document.getElementById("nome").value;
    const input_idade = document.getElementById("idade").value;

    const idade = parseInt(input_idade); // Convertemos a entrada para número inteiro

    if (idade < 16) {
        document.getElementById("resultado").innerText = `Menor de idade, não pode votar! ${input_name}`;
    } else if (idade < 18 || idade >= 71) {
        document.getElementById("resultado").textContent = `Voto opcional para ${input_name}`;
    } else {
        document.getElementById("resultado").textContent = `Voto obrigatório para ${input_name}`;
    }
}