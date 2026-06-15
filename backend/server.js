const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const dashboard = [
    { id_entrega: 301, transportadora: "RotaMax", regiao: "Sudeste", prazo_dias: 3, dias_reais: 7 },
    { id_entrega: 302, transportadora: "ViaCargo", regiao: "Sul", prazo_dias: 5, dias_reais: 5 },
    { id_entrega: 303, transportadora: "FlashLog", regiao: "Nordeste", prazo_dias: 4, dias_reais: 9 },
    { id_entrega: 304, transportadora: "RotaMax", regiao: "Norte", prazo_dias: 6, dias_reais: 4 },
    { id_entrega: 305, transportadora: "ViaCargo", regiao: "Centro-Oeste", prazo_dias: 2, dias_reais: 6 },
    { id_entrega: 306, transportadora: "FlashLog", regiao: "Sul", prazo_dias: 5, dias_reais: 12 },
    { id_entrega: 307, transportadora: "RotaMax", regiao: "Sul", prazo_dias: 6, dias_reais: 9 },
    { id_entrega: 308, transportadora: "ViaCargo", regiao: "Sudeste", prazo_dias: 3, dias_reais: 4 },
    { id_entrega: 309, transportadora: "FlashLog", regiao: "Norte", prazo_dias: 5, dias_reais: 5 },
    { id_entrega: 310, transportadora: "ViaCargo", regiao: "Nordeste", prazo_dias: 4, dias_reais: 8 }
];

app.get("/api/atrasos-transportadora", (req, res) => {

    const resultado = {};

    dashboard.forEach(item => {

        if (item.dias_reais > item.prazo_dias) {

            resultado[item.transportadora] =
                (resultado[item.transportadora] || 0) + 1;
        }
    });

    res.json(
        Object.keys(resultado).map(nome => ({
            transportadora: nome,
            atrasos: resultado[nome]
        }))
    );
});

app.get("/api/regioes", (req, res) => {

    const resultado = {};

    dashboard.forEach(item => {

        if (item.dias_reais > item.prazo_dias) {

            resultado[item.regiao] =
                (resultado[item.regiao] || 0) + 1;
        }
    });

    res.json(
        Object.keys(resultado).map(nome => ({
            regiao: nome,
            total: resultado[nome]
        }))
    );
});

app.get("/api/prioridade", (req, res) => {

    const resultado = dashboard
        .filter(item => item.dias_reais > item.prazo_dias)
        .map(item => ({
            id_entrega: item.id_entrega,
            atraso: item.dias_reais - item.prazo_dias
        }))
        .sort((a, b) => b.atraso - a.atraso)
        .slice(0, 5);

    res.json(resultado);
});

// =====================================
// KPIs
// =====================================

app.get("/api/kpis", (req, res) => {

    const totalEntregas = dashboard.length;

    const entregasAtrasadas = dashboard.filter(
        item => item.dias_reais > item.prazo_dias
    ).length;

    const taxaAtraso =
        ((entregasAtrasadas / totalEntregas) * 100).toFixed(0);

    const contagemTransportadoras = {};

    dashboard.forEach(item => {

        if (item.dias_reais > item.prazo_dias) {

            contagemTransportadoras[item.transportadora] =
                (contagemTransportadoras[item.transportadora] || 0) + 1;
        }
    });

    let maisAtrasos = "";
    let maiorValor = 0;

    for (const transportadora in contagemTransportadoras) {

        if (contagemTransportadoras[transportadora] > maiorValor) {

            maiorValor = contagemTransportadoras[transportadora];
            maisAtrasos = transportadora;
        }
    }

    res.json({
        totalEntregas,
        entregasAtrasadas,
        taxaAtraso,
        maisAtrasos
    });
});

// =====================================
// TABELA
// =====================================

app.get("/api/tabela", (req, res) => {

    const resultado = dashboard
        .map(item => {

            const atraso =
                item.dias_reais - item.prazo_dias;

            let prioridade = "🟢 Nenhuma";
            let classe = "";
            let linha = "";

            if (atraso >= 7) {
                prioridade = "🔴 Alta";
                classe = "prioridade-alta";
                linha = "linha-alta";
            }
            else if (atraso >= 4) {
                prioridade = "🟠 Média-Alta";
                classe = "prioridade-media-alta";
                linha = "linha-media-alta";
            }
            else if (atraso >= 1) {
                prioridade = "🟡 Média";
                classe = "prioridade-media";
                linha = "linha-media";
            }
            else {
                classe = "prioridade-baixa";
            }

            return {
                id_entrega: item.id_entrega,
                transportadora: item.transportadora,
                regiao: item.regiao,
                atraso,
                prioridade,
                classe,
                linha
            };
        })
        .sort((a, b) => b.atraso - a.atraso);

    res.json(resultado);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})