const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv/config");

const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect((err) => {
    if (err) {
        console.error("Erro ao conectar:", err);
        return;
    }

    console.log("MySQL conectado!");
});


// =====================================
// GRÁFICO 1
// =====================================

app.get("/api/atrasos-transportadora", (req, res) => {

    const sql = `
        SELECT
            transportadora,
            COUNT(*) AS atrasos
        FROM dashboard
        WHERE dias_reais > prazo_dias
        GROUP BY transportadora
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
});


// =====================================
// GRÁFICO 2
// =====================================

app.get("/api/regioes", (req, res) => {

    const sql = `
        SELECT
            regiao,
            COUNT(*) AS total
        FROM dashboard
        WHERE dias_reais > prazo_dias
        GROUP BY regiao
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
});


// =====================================
// GRÁFICO 3
// =====================================

app.get("/api/prioridade", (req, res) => {

    const sql = `
        SELECT
            id_entrega,
            (dias_reais - prazo_dias) AS atraso
        FROM dashboard
        WHERE dias_reais > prazo_dias
        ORDER BY atraso DESC
        LIMIT 5
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
});


// =====================================
// KPI'S
// =====================================

app.get("/api/kpis", (req, res) => {

    const sql = `
        SELECT
            COUNT(*) AS total_entregas,
            SUM(
                CASE
                    WHEN dias_reais > prazo_dias THEN 1
                    ELSE 0
                END
            ) AS atrasadas
        FROM dashboard
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result[0]);
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
