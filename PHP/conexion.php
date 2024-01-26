<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
// Obtén la información de conexión desde las variables de entorno de Railway
$serverName = "monorail.proxy.rlwy.net";
$username = "root";
$password = "6e26h1eeeB6GbHbA5AdCfFDBH2h4h-2H";
$dbName = "railway";

// Conexión a la base de datos
$conn = new mysqli($serverName, $username, $password, $dbName);

// Verificación de la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
echo "Conexion exitosa";
