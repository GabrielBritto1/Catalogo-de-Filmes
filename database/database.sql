CREATE DATABASE IF NOT EXISTS `filmesAndSeries`;
USE `filmesAndSeries`;

CREATE TABLE IF NOT EXISTS `filmesAndSeries`.`usuarios` (
	idUsuario INT PRIMARY KEY,
    nome VARCHAR (80),
    email VARCHAR (80),
    senha VARCHAR (80)
);

insert into usuarios values (1, 'Gabriel', 'cabecinha@guidao.com', 'senha');

SELECT * FROM `filmesAndSeries`.`usuarios`;