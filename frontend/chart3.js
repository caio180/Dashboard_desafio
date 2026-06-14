const ctxHorizontal = document.getElementById("horizontalchart").getContext("2d");

const horizontalchart = new Chart(ctxHorizontal, {
    type: "bar",
    data: {
        labels: ["Entrega 306","Entrega 303","Entrega 301","Entrega 305","Entrega 310"],
        datasets: [{
            label: "Dias de Atraso",
            data: [7,5,4,4,4],
            backgroundColor: [
                "#DC3545",
                "#FD7E14",
                "#FFC107",
                "#20C997",
                "#0D6EFD"
            ],
            borderColor: [
                "#B02A37",
                "#C75A00",
                "#CC9A06",
                "#198754",
                "#084298"
            ],
            borderWidth: 2
        }]
    },
    options: {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: {
                display: true
            },
            title: {
                display: true,
                text: "Top Entregas Críticas"
            }
        },
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});