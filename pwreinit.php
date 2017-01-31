<?php
  session_start();
  require 'inc/class/autoloader.php';
  Autoloader::register();
  if (!isset($bdd)){
    require_once("install.php");
  }
  require "inc/class/user.php";
 ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Camagru</title>
  </head>
  <body>
    <div class="pwreinit"><p>
      <?php
      if (isset($_GET['user']) && isset($_GET['key']) &&
      $userlog = $bdd->prepare("SELECT * FROM users WHERE reini_key=? and user_login=?", array($_GET['key'], $_GET['user']),null,TRUE))
      {
        //$userlog = new User($userlog);
       if (isset($_POST['submit']) && isset($_POST['password']) && isset($_POST['nwpassword']) && isset($_POST['confnwpassword']))
        {
          if($_POST['nwpassword'] === $_POST['confnwpassword']){
              $bdd->prepare("UPDATE users SET reini_key = null, user_password=:user_password WHERE user_login=:username", array('user_password' => $_POST['confnwpassword'],'username' => $_GET['user']));
              ?>
              <p><strong>Votre mot de passe a été modifié !</strong></p>
          		<p>Vous allez être redirigé dans 5 secondes	</p>
          		<p>Si la page ne se rafraichit pas automatiquement, <a href="index.php">cliquez ici.</a></p>
          	</div>
            <?php
          	header('Refresh: 5;url=http://localhost/Camataha/index.php');
          }else{
            echo "mot de passe de confirmation ne corespond pas!";
          }
        }
        ?>
        <label> renisialiser votre mot de passe:</label>
        <form class="form" action="" method="post">
          <p>Nouveau mot de passe :<input type="password" name="nwpassword" value="" required="password"></p>
          <p>Confirmer votre nouveau mot de passe :<input type="password" name="confnwpassword" value="" required="password"></p>
          <input type="submit" name="submit" value="envoyer">
        </form>
        <?php
        $userlog = $bdd->prepare("SELECT * FROM users WHERE reini_key=? and user_login=?", array($_GET['key'], $_GET['user']));
        if (isset($userlog)&&$userlog != null){
          var_dump($userlog[0]->actif);
          if ( $userlog[0]->actif === '0'){
            $bdd->prepare("UPDATE users SET actif = 1, user_key=:key WHERE user_login=:username", array('key' => $_GET['key'],'username' => $_GET['user']));
              echo "votre compte a été validé avec succès!!";
          }else {
            echo "votre conpte est deja Valider!";
          }
        }else{
          echo "votre conte nexiste pas.";
        }
      }else {
        echo "tu fais quoi ici?";
          }
       ?>
       <p>
         <a href="index.php">clic ici pour retourner au site</a>
    </div>
    <?php require_once "inc/footer.php" ?>
  </body>
</html>
