<?php
    // test php locally: php -S localhost:8000
    header('Access-Control-Allow-Origin: *');
    $token = $_GET["token"];
    if (strlen($token)>0)
    {
        $filename = '/data/convsty/'.$token.'.json';
        if (file_exists($filename)) echo 'true';
        else echo 'false';
    } else echo 'false';
?>
