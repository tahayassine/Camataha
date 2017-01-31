<?php
class autoloader{

  static function register(){
    spl_autoload_register(array(__CLASS__, 'autoload'));
  }

  static function autoload($class_name){
    require __DIR__ . $class_name .'.php';
  }
}
 ?>
