<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);


$name= $request->nombre;
$phone= $request->telefono;
$email= $request->correo;


$send_to = "soporte@cecr.com.ar";
$from = "soporte@cecr.com.ar";

$body='
<html>
<head>
  <title>Solicitud de contacto</title>
</head>
<body>
  <table cellpadding="15" cellspacing="0">
    
    <tr>
    <td><th>Name</th></td> <td> '.$name.' </td>
    </tr>
    <tr>
    <td><th>Email</th><td>'. $email .'</td>
    </tr>
    <tr>
    <td><th>Telephone</th></td><td> '.$phone.' </td>
    </tr>    
  </table>
</body>
</html>
';
$head  = 'MIME-Version: 1.0' . "\r\n";
$head .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$head .= 'From: ' . $from . "\r\n";

if(mail($send_to,$company,$body ,$head,)){
    echo json_encode(true);
}
else{
    echo json_encode(false);
}
?>