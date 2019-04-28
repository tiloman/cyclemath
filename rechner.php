<?php

session_start();

?>

<!DOCTYPE HTML>
<html>
<head>

    <title>cyclemath - ride better with math.</title>

    <link rel="stylesheet" type="text/css" href="stylesheet.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"> <!-- font awesome... -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script> <!-- Einbindung von Chartsjs -->

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>

<body>
<!-- Beginn Navigation -->

  <div class="topnav" id="myTopnav">
    <a href="index.php">Home</a>
    <a href="rechner.php" class="active">Rechner</a>
    <a href="neu.php">Neu</a>

    <!-- PHP für Session Login -->
      <?php
        if(isset($_SESSION['name'])) {
          echo "<a href='profile.php' style='float: right'>".$_SESSION['name']."</a>";
        }else {
        echo "<a href='login.php' style='float: right'>Login</a>";
        }
      ?>

    <a href="javascript:void(0);" class="icon" onclick="ResponsiveNav()"><i class="fa fa-bars"></i></a>
  </div>

<!-- Ende der Navigation!! -->

<header id="slider">
    <div><h1 id="heading"><br><br>cyclemath</h1>
    <h2 id="claims">ride better with math</h2>
    <br><br><br><br>
    </div>
</header>

<!-- Beginn des INhalts -->

<main>

    <section class="section_white">

      <h2>Deine Radgröße</h2><br>
      <img src="img/rennrad.png" alt="" class="img_responsive">

   </section>

    <section>

      <article class="section_white">
          Setting the correct seat height would seem to be such a fundamental part of cycling that you would have thought the boffins had agreed long ago on the best method. But you’d be wrong.
          One thing all the experts agree on however is that if you get the height wrong, the effects can be catastrophic. A study suggests that setting the height too low can decrease time to exhaustion by as much as 12 per cent.
          Consequently cyclists with limited time on their hands might actually get more out of a shorter session by lowering their seats to a sub-optimal level so as to make it harder.
          It’s an interesting theory, but even knowing how to get it wrong presupposes that you know how to get it right, and many don’t.  Read on to find out exactly how to do it.
      </article>

<!-- Beginn Flexboxen -->

      <div class="flex_rechner">

            <div class="flex-box" id="data_input">
                <h2 id="zieharmonika_head1">Passt das Rad?</h2>
                <form>
                  <input class="in" type="number" id="in_groesse" placeholder="Körpergröße" required/><br>
                  <input type="number" id="in_beinlaenge" placeholder="Beinlänge" required/><br>
                    <select id="bikes" onchange="display_bike_reach()">
                      <option value="">Rad wählen...</option>
                      <option value="individual">**Stack/Reach selbst eingeben**</option>
                      <optgroup label="Canyon">

                    </optgroup>
                  </select>

                  <div id="display_bike_reach"><br>
                  <input type="number" id="in_bike_reach" placeholder="Bike Reach in mm" />
                </div>
                  <div id="display_bike_stack"><br>
                  <input type="number" id="in_bike_stack" placeholder="Bike Stack in mm" />
                </div>

                  <div id="sitzposition">
                  <p>Optional zur Berechnung der Sitzposition </p>
                  <input type="number" id="in_armlaenge" placeholder="Armlänge"/><br>
                  <input type="number" id="in_rumpflaenge" placeholder="Rumpflänge"/><br>
                  </div>
                  <br><br>
                  <button type="button" onclick="berechnung(); updateChart()" id="berechnungs_btn">Berechnen</button>
                  <p onclick="display_sitzposition()" id="sitzposition_btn"><i> <i class="fa fa-info-circle"></i> Gleich die Sitzposition mitberechnen ...</i></p>

              </form>
                <br><br><br>
            </div>

            <div class="flex-box" id="results">
                <h2 id="zieharmonika_head2">Ergebnisse</h2>
                <div id="results_content">

                  <div id="out_koerpertyp"></div><br>
                  <div class="barchart_container" id="chart_container4">
                    <canvas id="bar_chart_koerpertyp"></canvas>
                  </div><br>
                  <hr>
                  <br>


                  <div id="ausgewaehltes_rad"></div><br>
                  <div id="out_bike_str"></div>
                  <h5>Dieser Wert sagt aus, wie sportlich die Geometrie des Rahmens ist. Je geringer der Wert, desto sportlicher sitzt der Fahrer darauf. Richtwert für eine "normale" Geometrie bei mittleren Rahmengrößen ist 1,45.</h5><br>
                  <div id="out_p_str"></div>
                  <h5>In Abhängigkeit der eingegebenen Körperproportionen und der Rahmengeometrie des ausgewählten Fahrrads wird hier ein persönlicher Stack To Reach Wert errechnet. </h5><br>
                  <div class="barchart_container" id="chart_container2">
                    <canvas id="bar_chart_str"></canvas>
                  </div><br>
                  <div id="out_radposition"></div><br>







                  <p onclick="display_details()" id="details_btn">Details/Trash einblenden </p>
                  <div id="results_details">
                    <br>
                    <div id="note" class="note"></div>
                    <p><b>Reach</b></p>
                    <div id="note_reach" class="note"></div>
                    <div id="diff_reach"></div>



                    <div class="barchart_container" id="chart_container3">
                      <canvas id="bar_chart_reach"></canvas>
                    </div><br>

                    <p><b>Stack</b></p>
                    <div id="note_stack" class="note"></div>
                    <div id="diff_stack"></div>

                    <div class="barchart_container" id="chart_container3">
                      <canvas id="bar_chart_stack"></canvas>
                    </div><br>

                    <div id="out_rahmengroesse"></div>
                    <div id="out_sitzhoehe"></div>
                    <div id="out_sitzlaenge"></div>
                    <div id="out_reach"></div>
                    <div id="out_stack"></div>

                    <h2 id="zieharmonika_head3">Körpertyp</h2>
                    <div id="chart_container">
                      <canvas id="myChart"></canvas>
                    </div>


                    <div id="perfect_bike"></div>

                </div>
                </div>
            </div>



      </div>
<!-- Ende Flexbox-->

          <article>
            <br><br>
            <h2>Rahmengröße</h2>
            Rachel Andrew is a front and back-end web developer, author and speaker.
            Author or co-author of 22 books including The New CSS Layout and a regular contributor
            to a number of publications both on and offline. Rachel is co-founder of the CMS Perch
            and Notist, Editor in Chief of Smashing Magazine, a Google Developer Expert and a Member
            of the CSS Working Group. She writes about business and technology on her own site at
            rachelandrew.co.uk.<br><br>

            <h2>Sitzhöhe</h2>
            Die Hypotenuse (c) des Goldenen Dreiecks verläuft zwischen Tretlagermittelpunkt und Sattelmitte (Oberkante) und beschreibt die Sitzhöhe. Diese wird vom Bikefitter gemessen und auf dem Rad, in Abhängigkeit von Pedalsystem, Sohlendicke der Radschuhe und Dicke der Schuheinlagen angepasst.
            Du kannst Deine Sitzhöhe auch selbst ermitteln, indem Du Deine Innenbeinlänge mit dem Faktor 0,885 multiplizierst.
            Hier bleiben unterschiedliche Pedalsysteme und Schuhe unberücksichtigt. Bei mir ist das Ergebnis aber einigermaßen akkurat. Lt. Bikefitter (Radlabor) beträgt meine Innenbeinlänge 85,7 cm und ich soll eine Sitzhöhe von 76 cm fahren. Wende ich den Faktor 0,885 an, komme ich auf 75,84 cm.<br><br>

            <h2>Persönlicher Reach</h2>
            Der Wert Reach beschreibt, wie lang ein Rahmen wirklich ist.

            Oben hatte ich bereits erwähnt, das der Winkel β des Goldenen Dreiecks, also der Sitzwinkel keinen Einfluss darauf hat, wie lang bzw. wie “sportlich” ein Rahmen ist. Ändert sich der Sitzwinkel β, bleibt die Sattelposition (wie weit sich die Sattelmitte hinter der Tretlagermitte befindet) gleich. Die ist ja abhängig vom Fahrer. Je kleiner Winkel β ist, je länger ist das Oberrohr, ohne dass sich das für den Fahrer auswirkt … solange der Klemmbereich des Sattels passt (und hier kann man dann mit der Kröpfung der Sattelstütze arbeiten).

            Ergo, dachte sich die Industrie, hat die Oberrohrlänge Null Aussagekraft, wenn es darum geht, die Länge eines Rahmens zu beschreiben.

            Wenn also alles, was hinter der Tretlagermitte unerheblich ist, warum also nicht ab Tretlagermitte messen?

            Also, erfand die Industrie Reach.

            Reach bezeichnet Abstand zwischen Tretlagermitte und Mitte des oberen Endes des Steuerrohrs (Steuerkopfmitte),in der Horizontalen.

            Beachtenswert ist hier v.a. der Steuerkopfwinkel β des in meiner Grafik grau hinterlegten Dreiecks. Je größer Steuerkopfwinkel β ist, desto länger wird das Oberrohr (umgekehrte Logik wie beim Sitzwinkel β). Im Gegensatz zum Sitzwinkel β beeinflusst der Steuerkopfwinkel β aber in der Tat, wie lang ein Rad ist. Merke: Je größer Steuerkopfwinkel β, desto größer der Reach-Wert.

            Natürlich hat nicht nur der Steuerkopfwinkel β Auswirkungen auf Reach, sonder auch u.a. auch die Höhe des Steuerrohrs. Je höher das Steuerrohr, umso kürzer ist Reach. Umso kürzer ist auch das Oberrohr.

            <h2>Persönlicher Stack</h2>
            Der Wert Stack gibt an, wie hoch ein Rahmen ist.Er wird in der senkrechten gemessen, ausgehend von der Tretlagermitte. Allerdings, misst man nicht bis zum Lenker, sondern bis zum oberen Ende des Steuerrohrs. Ohne Einfluss der Gabelschaftlänge ist somit ein genauer Vergleich verschiedener Rahmen möglich. Je höher der Stack-Wert, desto höher kann man mit dem Lenker kommen, bzw. desto geringer wird der negative Wert der Lenkerhöhe. Logisch oder?<br><br>

            <h2>Persönlicher Stack to Reach</h2>
            Der entscheidende Wert, um einheitliche und gemittelte Rahmengrößen miteinander zu vergleichen, ist der sogenannte Stack to Reach Parameter.
            Stack bedeutet in dem Fall die normierte Höhe des Rahmens
            Reach die normierte Länge des Rennrads
            Je kleiner der Koeffizient (Stack/Reach) ausfällt, desto sportlicher/unkomfortabler ist die Sitzposition.
            Bei einem Aero-Bike beträgt der Stack to Reach bei Rose 1,4. Das X-Lite Six zum Beispiel (Race Bike) hat einen Koeffizienten von 1,45 und ein Marathonbike, wie das Team GF Four, einen Stack to Reach Koeffizienten i.H.v. 1,5 – gleicher Wert gilt übrigens für Roses Gravelbikes.
            <br><br>
            <b>Learning:</b><br>
            Diese Zahl sagt aus, wie aufrecht (größerer Wert) bzw. wie gestreckt (kleinerer Wert) der Fahrer auf dem Rennrad sitzt.
            <br><br>

            <h2>Körpertyp</h2>
            Rachel Andrew is a front and back-end web developer, author and speaker.
            Author or co-author of 22 books including The New CSS Layout and a regular contributor
            to a number of publications both on and offline. Rachel is co-founder of the CMS Perch
            and Notist, Editor in Chief of Smashing Magazine, a Google Developer Expert and a Member
            of the CSS Working Group. She writes about business and technology on her own site at
            rachelandrew.co.uk.<br><br>

            <h2>Sitzlänge</h2>
            Die Sitzlänge beschreibt die optimale Entfernung zwischen Sattelmitte und Lenker. Der Bikefitter misst dafür u.a. die Armlänge sowie die Länge des Oberkörpers. Die Sitzlänge ist allerdings auch abhängig von der Beweglichkeit Deiner Wirbelsäule und ob Du komfortabel, sportlich oder wettkampfmäßig auf dem Rad sitzen möchtest.
            Außerdem beeinflusst der Lenker die Sitzlänge. Unterschiedliche Lenker sind ggf. etwas länger als andere (hierzu mehr unter Lenker Drop/Reach).
            Idealerweise “erfühlst” Du Deinen optimalen zusammen mit dem Bikefitter. Auf dem Fittingbike sind unterschiedliche Längen kinderleicht anpassbar, sodass Du verschiedene Sitzlängen zusammen mit dem Experten testen und “erfühlen” kannst.<br><br>

            <h2>Radposition</h2>
            Rachel Andrew is a front and back-end web developer, author and speaker.
            Author or co-author of 22 books including The New CSS Layout and a regular contributor
            to a number of publications both on and offline. Rachel is co-founder of the CMS Perch
            and Notist, Editor in Chief of Smashing Magazine, a Google Developer Expert and a Member
            of the CSS Working Group. She writes about business and technology on her own site at
            rachelandrew.co.uk.<br><br>

            <h2>Quellen:</h2>
            <li>https://www.tour-magazin.de/service/radvermessung.html</li>
            <li>https://cycling.claude.de/2017/03/03/bikefitting-teil-5-geometrie-verstaendlich/</li>

          </article>


      </section>

</main>

<footer>
    <ul>
    <li><a href="impressum.php">Impressum</a></li>
    <li><a style="float:left; algin: left" href="http://www.google.de"><i class="fa fa-instagram" style="font-size: 1.5em"></i></a></li>
    </ul>
</footer>

<script src="rechner_chart.js"> </script>
<script src="rechner_barchart_str.js"> </script>

<script src="rechner.js"></script>
<script src="java.js"></script>
<script src="https://code.jquery.com/jquery-latest.js"></script>



</body>
</html>
