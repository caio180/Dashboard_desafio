CREATE DATABASE IF NOT EXISTS dashboard;

USE dashboard;

CREATE TABLE dashboard (
    id_entrega INT PRIMARY KEY,
    transportadora VARCHAR(100),
    regiao VARCHAR(100),
    prazo_dias INT,
    dias_reais INT
);

INSERT INTO dashboard VALUES
(301,'RotaMax','Sudeste',3,7),
(302,'ViaCargo','Sul',5,5),
(303,'FlashLog','Nordeste',4,9),
(304,'RotaMax','Norte',6,4),
(305,'ViaCargo','Centro-Oeste',2,6),
(306,'FlashLog','Sul',5,12),
(307,'RotaMax','Sul',6,9),
(308,'ViaCargo','Sudeste',3,4),
(309,'FlashLog','Norte',5,5),
(310,'ViaCargo','Nordeste',4,8);