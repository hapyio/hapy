<?php
function sendtoddb($data)
{
    $dbhost = 'localhost';
    $dbuser = 'c3hapy';
    $dbpass = 'JJkdlMs8839HMnnj';
    $database = "c3hapy";

    $conn = mysql_connect($dbhost, $dbuser, $dbpass);

    if(! $conn )
    {
        die('Could not connect: ' . mysql_error());
    }

    $sql = "INSERT INTO site ".
        "(id,texte) ".
        "VALUES (default,'".$data."')";

    mysql_select_db($database);
    $retval = mysql_query( $sql, $conn );
    if(! $retval )
    {
        die('Could not enter data: ' . mysql_error());
    }
    echo "Entered data successfully\n";
    mysql_close($conn);

}
?>