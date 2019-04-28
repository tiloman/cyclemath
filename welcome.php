<?php

session_start();

$_SESSION['name'] = $_POST['name'];

$myfile = fopen("testphp.txt","a");

$vorname = $_SESSION['name'];
fwrite($myfile, $vorname."\n");
fclose($myfile);


?>

<!DOCTYPE html>
<!DOCTYPE HTML>
<html>
<head>

    <title>Alles ums Rennrad</title>

    <link rel="stylesheet" type="text/css" href="stylesheet.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"> <!-- font awesome... -->

    <script src="java.js"></script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>


<body>


<div class="topnav" id="myTopnav">
  <a href="index.php">Home</a>
  <a href="rechner.php" >Rechner</a>
  <a href="#home">Neu</a>

<?php
if(isset($_SESSION['name'])) {
  echo "<a href='profile.php' style='float: right' class='active'>".$_SESSION['name']."</a>";
} else {
echo "<a href='login.php' style='float: right'>Login</a>";
}
?>
  <a href="javascript:void(0);" class="icon" onclick="ResponsiveNav()">
    <i class="fa fa-bars"></i>
  </a>
</div>

<!-- Ende der Navigation!! -->


<header id="slider">
<div><h1 id="heading"><br><br>cyclemath</h1>
<h2 id="claims">ride better with math</h2>
<br><br><br><br>
</div>
</header>

<!-- Beginn des INhalts -->


<section>

<h2> Willkommen <?php echo$_SESSION['name']?></h2>

<p>Hier alle jemals angemeldeten Benutzer:</p>

  <?php
  $read = file('testphp.txt');
  foreach ($read as $line) {
  echo $line.", <br>";
  }

  ?>

</section>









    <footer>
     <ul>
    <li><a href="impressum.php">Impressum</a></li>
    <li><a style="float:left; algin: left" href="http://www.google.de"><i class="fa fa-instagram" style="font-size: 1.5em"></i></a></li>
    </ul>

    </footer>


</body>
</html>
