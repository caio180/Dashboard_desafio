fetch("http://localhost:3000/api/prioridade")
.then(res => res.json())
.then(dados => {

    const labels =
        dados.map(item =>
            `Entrega ${item.id_entrega}`
        );

    const valores =
        dados.map(item =>
            item.atraso
        );

    const ctxHorizontal =
        document.getElementById("horizontalchart")
        .getContext("2d");

    new Chart(ctxHorizontal, {
        type: "bar",
        data: {
            labels,
            datasets: [{
                label: "Dias de atraso",
                data: valores,
                backgroundColor: [
                    "#DC3545",
                    "#FD7E14",
                    "#FFC107",
                    "#20C997",
                    "#0D6EFD"
                ]
            }]
        },
        options: {
            indexAxis: "y"
        }
    });
});