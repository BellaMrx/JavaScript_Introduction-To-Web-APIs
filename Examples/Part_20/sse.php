<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$time = time();
$val = mt_rand(100, 999);

/*echo "data: {\n";
echo "data: \"msg\": \"New update is there\" ,  \n";
echo "data: \"time\": \"$time\", \n";
echo "data: \"val\": $val\n";
echo "data: }\n\n";*/

echo "retry: 15000\n"; // every 15 seconds 
echo "data: ($val) New update is there {$time}\n\n";
flush();
?>