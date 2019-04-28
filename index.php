<?php

session_start();

?>

<!DOCTYPE HTML>

<html>
<head>

    <title>cyclemath - ride better with math.</title>

    <link rel="stylesheet" type="text/css" href="stylesheet.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"> <!-- font awesome... -->

    <script src="java.js"></script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>


<body>


  <div class="topnav" id="myTopnav">
    <a href="index.php" class="active">Home</a>
    <a href="rechner.php" >Rechner</a>
    <a href="neu.php">Neu</a>

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
<br><br><br><br><button type="button" id="headbutton" onclick="gobutton()">Go!</button>
</div>
</header>

<!-- Beginn des Inhalts-->

<section class="section_white">

<div class="flex_container_start">
    <div>
        <a href="rechner.php" class="symbole">
            <i class="fa fa-calculator" style="font-size: 8em"></i><br>
            <p class="symbolunterschrift"><b>Größenrechner</b><br />Berechne deine passende Radgröße mit dem Größenrechner!</p>
        </a>
    </div>

    <div>
       <a href="neu.php" class="symbole">
         <i class="fa fa-bicycle" style="font-size: 8em"></i><br>
         <p class="symbolunterschrift"><b>Fahrrad</b><br />Irgendwas mit Fahrrädern kommt hier hin ...</p>
      </a>
    </div>


    <div>
      <a href="neu.php" class="symbole">
          <i class="fa fa-bar-chart" style="font-size: 8em"></i><br>
          <p class="symbolunterschrift"><b>Cloud</b><br />Coming soon: Analysiere deine GPX Files</p>
      </a>
    </div>


</div>

<!-- Ende Flexbox -->
</section>


<section class="section_white"><br>
    <video controls preload="metadata">
        <source src="img/flim.m4v#t=0.5" type=video/mp4>
        browser unterstützt kein Video Tag
        </video>

    </section>


<section class="section_white">
    <article>
        <h2>Das Rennrad</h2>
          Heutige Rennräder wiegen meist zwischen 8 und 9 kg. Laut UCI-Reglement ist aber bei Wettbewerbsrädern ein Mindestgewicht von 6,8 kg zu beachten. Das leichteste je in einem UCI-Rennen eingesetzte Rennrad war die Zeitfahrmaschine von Eddy Merckx, mit der er 1972 einen Stundenweltrekord aufstellte. Es ist ein Bahnrad mit gemufftem Stahlrahmen von Ernesto Colnago und wiegt 5,75 kg. Allerdings gibt es auch schon eine Designstudie, in der ein Rennrad unter 3 kg realisiert wurde.[1] Inwieweit dieses Modell unter Rennbedingungen fahrbar ist, wird kontrovers diskutiert.
          <br><br>
          Mit der Reglementänderung aus dem Jahr 2000 (Definition des Begriffs Rennrad) hat die UCI ein Rennrad wie das von Merckx verwendete für Stundenweltrekordversuche als Standard festgelegt (d. h. Bügellenker, Sattelspitze hinter Tretlager usw.) und alle Rekorde der 28 vorhergehenden Jahre annulliert.
          <br><br>
          Die UCI argumentiert damit, dass bei einem Wettrüsten zum technisch optimierten Fahrrad schlechter ausgerüstete Sportler oder Radsportverbände auf der Strecke blieben.
          <br><br>
          Die heute üblichen Rennräder haben sehr schmale Felgen und Reifen, einen Rennlenker, den sogenannten Bügellenker, der verschiedene Griffpositionen erlaubt und schmaler ist als sonst übliche Lenker (im UCI-Reglement sind max. 50 cm zulässig, es werden jedoch selten breitere als 44 cm verwendet). Die Breite des Lenkerbügels (gemessen von Rohrmitte zu Rohrmitte, meist an den Rohrenden, manchmal an der vordersten Stelle der Vorbiegung; selten ist auch die Lenkergesamtbreite von Außenkante zu Außenkante angegeben) richtet sich nach der Schulterbreite des Fahrers (gemessen von Außenseite zu Außenseite der Schulterknochen) und sollte dieser grob entsprechen.[2] Randonneure nehmen eher etwas breitere Lenker (mehr Kontrolle, Brustkorb weiter geöffnet), Wettkampffahrer nehmen eher etwas schmalere Lenker (aerodynamischere Sitzhaltung, weniger Platzbedarf im Peloton). Aus aerodynamischen Gründen werden beim Triathlon und Zeitfahren Speziallenker bzw. Lenkeraufsätze für konventionelle Bügellenker verwendet, bei denen der Fahrer mit den Unterarmen aufliegt und mit den Händen nach vorne greift. Um ergonomisch Sinn zu ergeben ist hierfür jedoch eine spezielle Geometrie des Rahmens erforderlich (steilerer Sitzwinkel).
          <br><br>
          Rennräder haben keine Gepäckträger und keine Schutzbleche und auch keine dafür vorgesehenen Aufnahmen an Rahmen und Gabel. Fest montierte Beleuchtungseinrichtungen und Dynamos besitzen sie grundsätzlich nicht. In der Regel sind ein bis zwei Halter für Trinkflaschen am Unterrohr und Sitzrohr montiert.
    </article>
</section>




    <footer>
    <ul>
    <li><a href="impressum.php">Impressum</a></li>
    <li><a style="float:left; algin: left" href="http://www.google.de"><i class="fa fa-instagram" style="font-size: 1.5em"></i></a></li>
    </ul>

    </footer>


</body>
</html>
