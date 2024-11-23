<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nama = trim($_POST['nama'] ?? '');

    if (empty($nama)) {
        echo json_encode([
            'success' => false,
            'message' => 'Nama tidak boleh kosong!',
        ]);
    } else {
        echo json_encode([
            'success' => true,
            'message' => "Halo, selamat datang di AJAX, $nama!",
        ]);
    }
    exit;
}
