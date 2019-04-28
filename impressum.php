<?php

session_start();

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
  <a href="#home" >Neu</a>

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
  <h2>Impressum</h2>
<article>
  <p>Timo Lohmann<br />
  Siegfriedstraße 5-7<br />50996 Köln</p>
  <p>Telefon: --<br />
  E-Mail: <a href="mailto:lohmanntimo@gmail.com">lohmanntimo@gmail.com</a><br />
  </p>
  <br /><br /><h2>Disclaimer – rechtliche Hinweise</h2>
  § 1 Warnhinweis zu Inhalten<br />
  Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.<br />
  <br />
  § 2 Externe Links<br />
  Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.<br />
  <br />
  § 3 Urheber- und Leistungsschutzrechte<br />
  Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.<br />
  <br />
  Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.<br />
  <br />
  § 4 Besondere Nutzungsbedingungen<br />
  Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.
</article>



</section>





    <footer>
     <ul>
    <li><a href="impressum.php">Impressum</a></li>
    <li><a style="float:left; algin: left" href="impressum.php"><i class="fa fa-instagram" style="font-size: 1.5em"></i></a></li>
    </ul>

    </footer>


</body>
</html>
