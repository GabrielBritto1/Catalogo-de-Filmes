<?php

class Conexao
{
    private PDO $conexao;

    public function __construct()
    {
        $banco = "mysql:host=localhost;dbname=filmesAndSeries";
        $usuario = 'root';
        $senha = '';
        $this->conexao = new PDO($banco, $usuario, $senha);
        $this->conexao->exec("set names utf8mb4");
    }

    public function getConexao()
    {
        return $this->conexao;
    }
}
