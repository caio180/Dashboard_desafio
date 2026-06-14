const ctx = document.getElementById("doughnutchart").getContext("2d");

const doughnutchart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: ["Sul", "Sudeste", "Centro-Oeste", "Nordeste", "Norte"],
        datasets: [{
            label: "Atrasos por Região",
            data: [2, 2, 1, 2, 0],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(79, 192, 75)",
                "rgb(255, 205, 86)",
                "rgb(153, 102, 255)"
            ],
            borderWidth: 2,
            borderColor: [
                "rgb(255, 0, 0)",
                "rgb(0, 69, 116)",
                "rgb(27, 163, 0)",
                "rgb(202, 142, 0)",
                "rgb(36, 0, 107)"
            ]
        }]
    },
    options: {
        responsive: true
    }
});