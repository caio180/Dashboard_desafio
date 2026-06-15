fetch("http://localhost:3000/api/kpis")
.then(res => res.json())
.then(dados => {

    document.getElementById("kpi-total")
        .textContent = dados.totalEntregas;

    document.getElementById("kpi-atrasadas")
        .textContent = dados.entregasAtrasadas;

    document.getElementById("kpi-taxa")
        .textContent = dados.taxaAtraso + "%";

    document.getElementById("kpi-transportadora")
        .textContent = dados.maisAtrasos;
})
.catch(err => {
    console.error("Erro ao carregar KPIs:", err);
});