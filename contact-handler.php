<?php
// Contact form handler for Raidii website
// This file handles form submissions and sends emails to hello@raidii.com

// Check if form was submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get form data
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $company = isset($_POST['company']) ? trim($_POST['company']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';
    
    // Basic validation
    $errors = [];
    
    if (empty($name)) {
        $errors[] = "Name is required";
    }
    
    if (empty($email)) {
        $errors[] = "Email is required";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }
    
    if (empty($message)) {
        $errors[] = "Message is required";
    }
    
    // If no errors, send email
    if (empty($errors)) {
        
        // Email configuration
        $to = "hello@raidii.com";
        $subject = "New Contact Form Submission from " . $name;
        
        // Email body
        $email_body = "New contact form submission:\n\n";
        $email_body .= "Name: " . $name . "\n";
        $email_body .= "Email: " . $email . "\n";
        $email_body .= "Company: " . ($company ? $company : "Not provided") . "\n";
        $email_body .= "Message:\n" . $message . "\n\n";
        $email_body .= "Submitted on: " . date('Y-m-d H:i:s') . "\n";
        $email_body .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";
        
        // Email headers
        $headers = "From: " . $email . "\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        // Send email
        if (mail($to, $subject, $email_body, $headers)) {
            // Success response
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'message' => 'Thank you for your message! We\'ll get back to you soon.'
            ]);
        } else {
            // Error sending email
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Sorry, there was an error sending your message. Please try again.'
            ]);
        }
        
    } else {
        // Validation errors
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Please correct the following errors: ' . implode(', ', $errors)
        ]);
    }
    
} else {
    // Not a POST request
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed'
    ]);
}
?>
