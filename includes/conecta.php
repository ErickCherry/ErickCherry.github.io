<?php

$server = "";
$user = "";
$passw = "";
$bd = "xdgu";
$conecta = mysqli_connect($server,$user,$passw,$bd);
if($conecta->connect_error){
    die("error al conectar la base de datos".$conecta->connect_error);
}


// <?php
//include 'includes/conecta.php';
//?>




?>