<?php


if (isset($_POST["message"]))
{
    include 'database_config.php';
    sendtoddb($_POST["message"]);
}
else die("error");

?>