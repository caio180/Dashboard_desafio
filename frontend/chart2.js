fetch("http://localhost:3000/api/regioes")
.then(res => res.json())
.then(dados => {

    const labels = dados.map(item => item.regiao);

    const valores = dados.map(item => item.total);

    const ctx =
        document.getElementById("doughnutchart")
        .getContext("2d");

    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels,
            datasets: [{
                data: valores,
                backgroundColor: [
                    "rgb(255,99,132)",
                    "rgb(54,162,235)",
                    "rgb(79,192,75)",
                    "rgb(255,205,86)",
                    "rgb(153,102,255)"
                ]
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: "bottom"
                }
            }
        }
    });
})
.catch(err => {
    console.error("Erro ao carregar chart2:", err);
});