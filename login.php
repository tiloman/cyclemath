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
    <a href="rechner.php">Rechner</a>
    <a href="#home" >Neu</a>

      <?php
      if(isset($_SESSION['name'])) {
        echo "<a href='profile.php' class='active' style='float: right'>".$_SESSION['name']."</a>";
      } else {
      echo "<a href='login.php' class='active' style='float: right'>Login</a>";
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

<h2> Bitte gib deine Daten ein:</h2>

<form action="welcome.php" method="post">

  <input type="text" name="name" placeholder="Vorname"></input><br>
  <input type="password" name="passwort" placeholder="Passwort"></input><br><br>

  <input type="submit" name="submit" value="Submit" />
</section>









    <footer>
     <ul>
    <li><a href="impressum.php">Impressum</a></li>
    <li><a style="float:left; algin: left" href="http://www.google.de"><i class="fa fa-instagram" style="font-size: 1.5em"></i></a></li>
    </ul>

    </footer>


</body>
</html>
