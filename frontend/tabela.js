alert("tabela.js carregou");
console.log("Tabela.js carregado");

fetch("http://localhost:3000/api/tabela")
.then(res => res.json())
.then(dados => {

    console.log("Dados recebidos:", dados);

    const tbody = document.getElementById("tabela-entregas");

    tbody.innerHTML = "";

    dados.forEach(item => {

        tbody.innerHTML += `
            <tr class="${item.linha}">
                <td>${item.id_entrega}</td>
                <td>${item.transportadora}</td>
                <td>${item.regiao}</td>
                <td>${item.atraso} dias</td>
                <td class="${item.classe}">
                    ${item.prioridade}
                </td>
            </tr>
        `;
    });

})
.catch(err => {
    console.error("Erro ao carregar tabela:", err);
});