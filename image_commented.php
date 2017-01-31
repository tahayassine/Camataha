<?php
session_start();
require 'inc/class/autoloader.php';
Autoloader::register();
require("inc/class/database.php");
require("inc/class/serveur.php");
require("inc/class/image.php");
$bdd = new Database($DB_DSN, $DB_USER, $DB_PASSWORD);
  if (isset($_POST['img']) && isset($_POST['com']) && isset($_SESSION['user_key'])) {
    $com = trim($_POST['com']);
    $img_key = trim($_POST['img']);
    $user_key = $_SESSION['user_key'];
    $imglog = $bdd->prepare("SELECT * FROM comments WHERE img_key=? and user_key=?", array($img_key, $user_key));
    if ($imglog) {
      $bdd->prepare("UPDATE comments set comment=? WHERE img_key=? and user_key=?", array($com, $img_key, $user_key));
      echo "ici";
    }else {
      $bdd->prepare("INSERT INTO comments(comment, img_key, user_key)
      VALUES(:comment,:img_key,:user_key)",
      array("comment" => $com,"img_key" => $img_key,"user_key" => $user_key),null);
      echo "LA";
    }
    echo "HELLO";
  }
 ?>
