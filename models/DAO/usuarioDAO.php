<?php
include_once(__DIR__ . '/../../database/conexao.php');
class usuarioDAO
{
    private $conexao;

    public function __construct()
    {
        $con = new Conexao();
        $this->conexao = $con->getConexao();
    }

    public function getAll()
    {
        $sql = "SELECT * FROM `filmesAndSeries`.`usuarios`;";

        $stmt = $this->conexao->prepare($sql);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
