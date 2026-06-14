const ctxBar = document.getElementById("barVerticalchart").getContext("2d");

const barVerticalchart = new Chart(ctxBar, {
    type: "bar",
    data: {
        labels: ["RotaMax", "ViaCargo", "FlashLog"],
        datasets: [{
            label: "Atrasos por transportadora",
            data: [2, 3, 2],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(79, 192, 75)"
            ],
            borderColor: [
                "rgb(255, 0, 0)",
                "rgb(0, 69, 116)",
                "rgb(27, 163, 0)"
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true
    }
});