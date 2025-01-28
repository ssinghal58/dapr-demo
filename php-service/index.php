<?php
// Simple PHP microservice exposing a /greet endpoint
header('Content-Type: application/json');

if ($_SERVER['REQUEST_URI'] == '/greet' && $_SERVER['REQUEST_METHOD'] == 'GET') {
    echo json_encode(["message" => "Hello from PHP!"]);
} else {
    http_response_code(404);
    echo json_encode(["error" => "Not Found"]);
}
?>
