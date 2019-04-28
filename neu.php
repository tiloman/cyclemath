<?php
session_start();
 ?>

<!DOCTYPE HTML>
<html>
<head>

    <title>cyclemath - ride better with math.</title>

    <link rel="stylesheet" type="text/css" href="stylesheet.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"> <!-- font awesome... -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script>

    <!-- Wowzaplayer library -->
     <script type="text/javascript" src="https://player.wowza.com/player/latest/wowzaplayer.min.js"></script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>


<body>


  <div class="topnav" id="myTopnav">
    <a href="index.php">Home</a>
    <a href="rechner.php" >Rechner</a>
    <a href="#home" class="active">Neu</a>

      <?php
      if(isset($_SESSION['name'])) {
        echo "<a href='profile.php' style='float: right'>".$_SESSION['name']."</a>";
      } else {
      echo "<a href='login.php' style='float: right'>Login</a>";
      }
      ?>

    </a>
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

  <div id="chart_container">
    <canvas id="bar_chart_str"></canvas>
  </div>

</section>

    <section>
<br><h2>Willkommen</h2><br><br>

        Name: <br><input type="text" id="name" /><br><br>
        Alter: <br><input type="number" id="age" /><br><br>
        <button type="button" id="welcome_btn">Los!</button>
        <br><br>
    <div id="ergebnis"></div>
</section>




<section class="zwischenbild">

</section>


<div class="slide_down_text" style="display: none"> Dieser <br>Text soll<br> bei Mouseover <br>eingeblendet werden</div>










    <footer>
     <ul>
    <li><a href="impressum.php">Impressum</a></li>
    <li><a style="float:left; algin: left" href="http://www.google.de"><i class="fa fa-instagram" style="font-size: 1.5em"></i></a></li>
    </ul>

    </footer>

    <script src="https://code.jquery.com/jquery-latest.js"></script>

    <script src="rechner_barchart_str.js"> </script>

    <script src="jquery.js"></script>
    <script src="java.js"></script>
    <script src="https://requirejs.org/docs/release/2.3.5/minified/require.js"></script>

    <script src="strava.js"></script>




</body>
</html>
