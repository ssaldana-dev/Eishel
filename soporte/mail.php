<?php 
    $destino= "soporteti@eishel.org";
    $nombre= $_POST["name"];
    $correo= $_POST["email"];
    $departamento= $_POST["department"];
    $asunto= $_POST["issue"];
    $mensaje= $_POST["message"];

    $asuntoCompleto = $departamento . ": " . $asunto;
    $mensajeCompleto = 'De: ' . $nombre . ' <' . $correo . '> <br /> <br />' . $mensaje;

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: Eishel Nuestro Hogar A.C.' . "\r\n";
    $headers .= 'Reply-To: ' . $correo;

    mail($destino, $asuntoCompleto, $mensajeCompleto, $headers);
    header("Location:../soporte");
?>