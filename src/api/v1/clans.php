<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
include_once './request.php';

$baseUrl = "https://api.clashofclans.com/v1";
$clanTag = isset($_GET['tag']) ? $_GET['tag'] : null;
$subType = isset($_GET['subtype']) ? $_GET['subtype'] : null;
$rawOpt = isset($_GET['opt']) ? $_GET['opt'] : null;

$reqUrl = $baseUrl . "/clans" . ($clanTag != null ? "/" . $clanTag : "") . ($clanTag !== null && $subType != null ? "/" . $subType: "");

$opts = ""; 
$resOpt = array(); 
if($rawOpt != null) {
    $optSet = explode("&", $rawOpt); 
    foreach($optSet as $eachOpt) {
        $splitOpt = explode("=",$eachOpt); 
        if(count($splitOpt) >= 2) {
            array_push($resOpt, $splitOpt[0] ."=". urlencode($splitOpt[1]));
        }
    }
    $opts = implode("&",$resOpt); 
}

$reqUrl = $reqUrl . ($opts != "" ? "?" . $opts : ""); 

$clanReq = new Request($reqUrl); 
$clanInfo = $clanReq->send();
echo $clanInfo; 

?>