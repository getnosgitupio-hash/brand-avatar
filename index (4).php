<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    function clean_input($data) {
        return htmlspecialchars(trim($data));
    }

    $name       = clean_input($_POST['name'] ?? '');
    $brand      = clean_input($_POST['brand'] ?? '');
    $phone      = clean_input($_POST['phone'] ?? '');
    $eventType  = clean_input($_POST['eventType'] ?? '');

    date_default_timezone_set("Asia/Kolkata");
    $submittedAt = date("d-m-Y h:i A");

    $to = "sriethiraj@getnos.io,seetharaman@getnos.io";
    $subject = "New Event Strategy Call Booking";

    $message  = "EVENT BOOKING DETAILS\n\n";
    $message .= "Name: $name\n";
    $message .= "Brand / Company: $brand\n";
    $message .= "Phone: $phone\n";
    $message .= "Event Type: $eventType\n";
    $message .= "Submitted: $submittedAt\n";

    $headers  = "From: hello@getnos.io\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode([
            "status" => "success",
            "redirect" => "https://tidycal.com/brandavatar/discovery-call"
        ]);
    } else {
        echo json_encode([
            "status" => "error"
        ]);
    }

    exit();
}
?>