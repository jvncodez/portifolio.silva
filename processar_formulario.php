<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $celular = $_POST['celular'];
    $mensagem = $_POST['mensagem'];

    // Endereço de email para o qual enviar os dados
    $destinatario = 'jvn.silva01@gmail.com'; // Altere para o seu endereço de email do Gmail

    // Assunto do email
    $assunto = 'Novo formulário submetido';

    // Conteúdo do email
    $conteudo = "Nome: $nome\nEmail: $email\nCelular: $celular\nMensagem: $mensagem";

    // Cabeçalhos do email
    $cabecalhos = 'From: ' . $email;

    // Envio do email
    if (mail($destinatario, $assunto, $conteudo, $cabecalhos)) {
        echo 'Mensagem enviada com sucesso!';
    } else {
        echo 'Erro ao enviar mensagem.';
    }
} else {
    // Redireciona para a página do formulário se o usuário acessar o script diretamente
    header("Location: formulario.php");
}
?>
