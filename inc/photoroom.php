
  <?php  require "inc/filters.php" ?>
  <div class="content">
    <div class="camera">
      <video id="video">Video stream not available.</video>
      <img id="filtreactive" src="">
      <br />
      <button id="startbutton">Prendre une photo</button>
      <?php  require "inc/download_img.php" ?>
      <form class="" action="" method="post" enctype="multipart/form-data">
        <input type="file" name="img"/>
        <input type="submit" name="submit"/>
      </form>
      <br />
      <div class="output">
        <img id="photo" style="" src= "<?php if(file_exists($file = "img/tmp/".$_SESSION['user_key'].".png"))echo $file ;?>">
        <img  id="filter" src="img/filter/bisous.png" onmousedown="on_mouse_down_square(event)" alt="filter" style="left:0px;top:0px;">
      </div>
      <button id="pushImg" onclick="request(addToGalrie)">je suis satisfais de cette photo</button>
      <canvas id="canvas" style="display:none"></canvas>
    </div>
    <?php require "inc/gallery.php" ?>
  </div>
<script src="js/oXHR.js"></script>
<script src="js/webcam.js"></script>
<script src="js/app.js"></script>
<script src="js/ajax.js"></script>
