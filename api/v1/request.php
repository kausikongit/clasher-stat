<?php 

class Request{
 
    // specify your own credentials
    private $auth = "";
    private $reqUrl = "";

    public function __construct($url){
        $this->authToken = $this->getAuthToken();
        $this->reqUrl = $url;
    }

    // get the database connection
    public function send(){
        try{
            // Get cURL resource
            $curl = curl_init();
            
            // Set some options - we are passing in a useragent too here
            curl_setopt_array($curl, array(
                CURLOPT_HTTPHEADER => array("authorization:".$this->authToken),
                CURLOPT_RETURNTRANSFER => 1,
                CURLOPT_URL => $this->reqUrl
            ));

            // Send the request & save response to $resp
            $resp = curl_exec($curl);
            if(!$resp ){
                die('Error: "' . curl_error($curl) . '" - Code: ' . curl_errno($curl));
            }
            // Close request to clear up some resources
            curl_close($curl);

        }catch(Exception $e) {
            echo 'Message: ' .$e->getMessage();
        }

        return $resp; 
    }

    private function getAuthToken() {
        //set ip as global variable and fetch public ip address for auth tokens
        $GLOBALS["ip"] = isset($GLOBALS["ip"]) ? $GLOBALS["ip"] : $this->getIpAddr();
        $authTokens = json_decode(file_get_contents("./../auth/authTokens.json"),true);
        if(!isset($authTokens[$GLOBALS["ip"]])) {
           die('Message: ' ."Error no auth token found for IP: ".$GLOBALS["ip"]);
        }
        return $authTokens[$GLOBALS["ip"]]["token"]["authorization"];
    }

    private function getIpAddr()
    {
        // Get cURL resource
        $curl = curl_init();
        
        // Set some options - we are passing in a useragent too here
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => "http://freegeoip.net/json/"
        ));

        // Send the request & save response to $resp
        $resp = curl_exec($curl);
        if(!$resp ){
            die('Error: "' . curl_error($curl) . '" - Code: ' . curl_errno($curl));
        }
        // Close request to clear up some resources
        curl_close($curl);

        return json_decode($resp)->ip;
    }
}
?>