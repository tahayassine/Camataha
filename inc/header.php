<div class="header">
  <div class="title">

  </div>
  <div id="login">
  <?php
  require "inc/login.php";
  ?></div>
  <?php
  if (isset($_SESSION['connect'])) {
    require "inc/menu.php";
  }
   ?>
</div>
