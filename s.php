<?php

$url = "https://ty5sstsmlg.execute-api.ap-south-1.amazonaws.com/v1/sendEmail";

$dataString = json_encode(array(
    'name' => 'george',
    'email' => 'test@bi.com',
    'phone' => '09809890890',
    'desc' => 'test'
));

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $dataString);

$headers = array(
   "Content-Type: application/json",
   "Content-Length: 0",
    'Access-Control-Allow-Origin: http://alombre.localhost',
    'Access-Control-Allow-Credentials: true',
    'Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'
);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
//for debug only!
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$resp = curl_exec($curl);
curl_close($curl);
var_dump($resp);
