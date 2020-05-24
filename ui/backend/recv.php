<?php
    // test php locally: php -S localhost:8000
    header('Access-Control-Allow-Origin: *');
    $json = $_POST["data"];
    $data = json_decode($json);
    if (strlen($data->userid)>0)
    {
        $filename = 'data/'.$data->userid.'.json';
        $fp = fopen($filename, 'w');
        fwrite($fp, $json);
        fclose($fp);
        if (file_exists($filename)) echo 'true';
        else echo 'false';
    } else echo 'false';
?>
