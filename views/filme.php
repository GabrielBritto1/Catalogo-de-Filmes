<?php
include '../include/header.php';
include '../models/DAO/usuarioDAO.php';

$usuarioDAO = new UsuarioDAO();
$teste = $usuarioDAO->getAll();
echo '<pre>';
print_r($teste);
echo '</pre>';
?>


<main id="movies-container">
    <span class="visually-hidden">Carregando...</span>
</main>
</body>

</html>

<?php
include '../include/footer.php';
?>