fetch("http://localhost:3000/api/atrasos-transportadora")
.then(res => res.json())
.then(dados => {

    const labels = dados.map(item => item.transportadora);

    const valores = dados.map(item => item.atrasos);

    const ctxBar = document
        .getElementById("barVerticalchart")
        .getContext("2d");

    new Chart(ctxBar, {
        type: "bar",
        data: {
            labels,
            datasets: [{
                label: "Atrasos por transportadora",
                data: valores,
                backgroundColor: [
                    "rgb(255,99,132)",
                    "rgb(54,162,235)",
                    "rgb(79,192,75)"
                ],
                borderWidth: 2
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
})
.catch(err => {
    console.error("Erro ao carregar chart1:", err);
});