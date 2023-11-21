<?php
header('Content-Type: application/json');

// Get form data from the POST request
$data = json_decode(file_get_contents('php://input'), true);

// You can add additional validation here if needed

// Send email
$to = 'rastorinte6@gmail.com'; // Replace with your email address
$subject = 'Restaurant Feedback';
$message = 'Name: ' . $data['name'] . "\r\n";
$message .= 'Email: ' . $data['email'] . "\r\n";
$message .= 'Feedback: ' . $data['feedback'];

$mailSuccess = mail($to, $subject, $message);

// Send a response to the client
if ($mailSuccess) {
    echo json_encode(['status' => 'success', 'message' => 'Thank you for your feedback!']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Failed to send feedback. Please try again later.']);
}
?>
