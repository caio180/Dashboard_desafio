# LogiTrack

## Sobre o Projeto

O **LogiTrack** é um dashboard logístico desenvolvido para monitoramento e análise de entregas em tempo real, com foco em desempenho operacional, atrasos, priorização de demandas e visualização de dados estratégicos.

O sistema simula um ambiente de gestão logística, permitindo acompanhar o fluxo de entregas por região, identificar gargalos operacionais e apoiar a tomada de decisão com base em dados.

O objetivo do projeto é otimizar o controle logístico e demonstrar, na prática, como a tecnologia pode melhorar a eficiência de operações de transporte e distribuição.

---

## Funcionalidades

* Dashboard com visão geral das entregas;
* Tabela dinâmica com dados de pedidos;
* Classificação de prioridade (baixa, média e alta);
* Monitoramento de atrasos por região;
* Gráficos analíticos (rosca/doughnut e barras);
* Organização de dados por status operacional;
* Integração com backend em Node.js;
* Comunicação com banco de dados MySQL;
* Interface simples e responsiva para análise rápida.

---

## Tecnologias Utilizadas

### Front-end

* HTML5
* CSS3
* JavaScript
* Chart.js

### Back-end

* Node.js
* Express.js

### Banco de Dados

* MySQL

---

## Estrutura do Projeto

```text
LogiTrack/
│
├── backend/
│   ├── controllers/
│   │    └── entregasController.js
│   ├── database/
│   │    ├── connection.js
│   │    └── logitrack.sql
│   ├── models/
│   │    └── entregasModel.js
│   ├── routes/
│   │    └── entregasRoutes.js
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── charts.js
│
├── img/
│   └── (assets do dashboard)
│
└── README.md
```

---

## Banco de Dados

O sistema utiliza MySQL para armazenar informações das entregas e seus status operacionais.

### Exemplo de tabela

```sql
CREATE TABLE entregas (
    id_entrega INT AUTO_INCREMENT PRIMARY KEY,
    transportadora VARCHAR(100) NOT NULL,
    regiao VARCHAR(50) NOT NULL,
    atraso INT DEFAULT 0,
    prioridade VARCHAR(20) NOT NULL,
    status VARCHAR(50),
    data_entrega DATE
);
```

---

## Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seuusuario/LogiTrack.git
```

### 2. Acesse a pasta

```bash
cd LogiTrack
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure o banco de dados MySQL

```sql
CREATE DATABASE IF NOT EXISTS logitrack;
```

### 5. Configure o arquivo `.env`

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=logitrack
DB_PORT=3306
```

### 6. Inicie o servidor

```bash
node server.js
```

---

## Temas Abordados

* Gestão de cadeia logística (Supply Chain)
* Monitoramento de entregas em tempo real
* Análise de desempenho operacional
* Redução de atrasos e gargalos
* Priorização de demandas logísticas
* Visualização de dados aplicados
* Tomada de decisão baseada em dados

---

## Objetivo do Projeto

O LogiTrack foi desenvolvido com o propósito de demonstrar a aplicação prática de tecnologia na resolução de problemas reais de logística, especialmente relacionados ao controle de entregas, análise de atrasos e eficiência operacional. O sistema simula um ambiente corporativo onde dados são utilizados para otimizar decisões e melhorar o desempenho de transporte e distribuição.

---
## Desenvolvedores

**Murilo Ferreira Stresser**

<a href="https://www.linkedin.com/in/murilo-ferreira-stresser-9328b5384/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>
<a href="https://github.com/Murilo5660" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white"/>
</a>

**Caio Lima Viana**

<a href="https://www.linkedin.com/in/caio-lima-viana-004759397/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>
<a href="https://github.com/caio180" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white"/>
</a>

**André Fernandes dos Santos**

<a href="https://www.linkedin.com/in/andre-fernandes-dos-santos-6791b3326/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>
<a href="https://github.com/fernandessantosandre-source" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white"/>
</a>

---

## Licença

© 2026 LogiTrack. Todos os direitos reservados.

---
