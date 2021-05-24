<?php
require_once(__DIR__.'/vendor/autoload.php');
use \Mailjet\Resources;

define('API_USER','5249d84dcfd508afc3263eb7b33f6d83');
define('API_LOGIN', '	
9a82eea494150eed0de322e3c4be7cfb');

$mj = new \Mailjet\Client(API_USER,API_LOGIN,true,['version' => 'v3.1']);

if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['subject']) && !empty($_POST['message']))
{
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    if(filter_var($email, FILTER_VALIDATE_EMAIL))
    {
        $body = [
            'Messages' => [
              [
                'From' => [
                  'Email' => "jeremy.ah33@gmail.com",
                  'Name' => "Dubois Jeremy"
                ],
                'To' => [
                  [
                    'Email' => "dubois.jeremy33@gmail.com",
                    'Name' => "Dubois Jeremy"
                  ]
                ],
                'Subject' => "Contact",
                'TextPart' => "$name, $email, $subject, $message",
              ]
            ]
          ];
          $response = $mj->post(Resources::$Email, ['body' => $body]);
          $response->success();
          echo "Email envoyé";
          header('Location:index.php#contact');
    }else
    {
        echo "L'Email n'est pas valide";
    }
}else
{
    header('Location:index.php#contact');
    die();
}