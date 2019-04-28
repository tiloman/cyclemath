
function sitzhoehe(beinlaenge){

        var lemond = beinlaenge * 0.886;
        var gerundet = Math.round(lemond,2);
        document.getElementById("out_sitzhoehe").innerHTML = "<b>Sitzhöhe (nach LeMond):</b> <br>"+gerundet + " cm<br><br>";
    }

function rahmengroesse(koerpergroesse){

        if (koerpergroesse < 150) {

            document.getElementById("out_rahmengroesse").innerHTML = "<b>klassisch empfohlene Rahmengröße:</b> <br>zu klein<br><br>";
        }

        if (koerpergroesse < 160) {

            document.getElementById("out_rahmengroesse").innerHTML = "<b>klassisch empfohlene Rahmengröße:</b> <br>47 - 49 cm<br><br>";
        }
        else if (koerpergroesse < 165) {
             document.getElementById("out_rahmengroesse").innerHTML = "<b>klassisch empfohlene Rahmengröße:</b><br> 49 - 51 cm<br><br>";

        }
        else if (koerpergroesse < 170) {
             document.getElementById("out_rahmengroesse").innerHTML = "<b>klassisch empfohlene Rahmengröße:</b><br> 51 - 53 cm<br><br>";

        }
         else if (koerpergroesse < 175) {
             document.getElementById("out_rahmengroesse").innerHTML = "<b>klassisch empfohlene Rahmengröße:</b><br> 53 - 55 cm<br><br>";

        }
        else if (koerpergroesse < 180) {
             document.getElementById("out_rahmengroesse").innerHTML = "<b>klassisch empfohlene Rahmengröße:</b> <br>53 - 55 cm<br><br>";

        }
         else if (koerpergroesse < 185) {
             document.getElementById("out_rahmengroesse").innerHTML = "<b>klassisch empfohlene Rahmengröße:</b> <br>57 - 60 cm<br><br>";

        }
          else if (koerpergroesse < 190) {
             document.getElementById("out_rahmengroesse").innerHTML = "<b>klassisch empfohlene Rahmengröße:</b> <br>60 - 62 cm<br><br>";

        }
         else if (koerpergroesse < 210) {
             document.getElementById("out_rahmengroesse").innerHTML = "<b>klassisch empfohlene Rahmengröße:</b> <br>62 - 64 cm<br><br>";

        }else {
          document.getElementById("out_rahmengroesse").innerHTML = "zu groß";

        }

    }

function sitzlaenge(rumpflaenge, armlaenge){
  if (armlaenge =="" || rumpflaenge == ""){
    document.getElementById("out_sitzlaenge").innerHTML = "";

  }else {

        var sitzlaenge = ((rumpflaenge*1 + armlaenge*1) * 0.535) - 16.44;
        x=Math.round(sitzlaenge,2);
        document.getElementById("out_sitzlaenge").innerHTML = "<b>Sitzlänge:</b><br> "+ x + " cm <br><br>";
    }
    }

function p_stack_fn(p_stack){
    var gerundet = Math.round(p_stack,2);
    document.getElementById("out_stack").innerHTML = "<b>persönlicher Stack:</b> <br>"+gerundet + " mm<br><br>";
}

function p_reach_fn(p_reach){
    var gerundet = Math.round(p_reach,2);
    document.getElementById("out_reach").innerHTML = "<b>persönlicher Reach:</b> <br>"+gerundet + " mm<br><br>";

}


function p_str(beinlaenge, bike_reach, corr_str_gerundet, p_stack){
  if (bike_reach == ""){
    document.getElementById("out_p_str").innerHTML = "";
  }else {
  var p_str = p_stack / bike_reach;
  var p_str_gerundet = Math.round(p_str*1000)/1000;
  document.getElementById("out_p_str").innerHTML = "<b>persönlicher Stack to Reach: </b>"+corr_str_gerundet;
}
}
function bike_str(bike_reach, bike_stack){
  if (bike_reach == ""){
    document.getElementById("out_p_str").innerHTML = "";
  }else {
  var bike_str = (bike_stack/10) / bike_reach;
  var bike_str_gerundet = Math.round(bike_str*1000)/1000;
  document.getElementById("out_bike_str").innerHTML = "<b>Stack to Reach: </b>"+bike_str_gerundet;
};
}



function koerpertyp_fn(beinlaenge, koerpergroesse, bike_reach){
  var ausgabe_koerpertyp = document.getElementById("out_koerpertyp");
  var ausgabe_radposition = document.getElementById("out_radposition");

  ausgabe_koerpertyp.innerHTML = "<b>Körpertyp:</b> <br>";
  ausgabe_radposition.innerHTML = "<b>Position auf dem Rad:</b><br>";


  var koerpertyp = beinlaenge / koerpergroesse;
  var koerpertyp_gerundet = Math.round(koerpertyp*100)/100;
  var p_stack = beinlaenge * 0.69;
  var p_reach = (p_stack / 1.5)*10;


//Nachbildung der diagonalen "normal, langbeiner und sitzriese"
  var i = koerpergroesse - 158;
  var y = i * 0.000909;
  var normaler_koerpertyp = 0.440 + y;



  if (koerpertyp_gerundet > normaler_koerpertyp && koerpertyp_gerundet < (normaler_koerpertyp +0.03)) {
    ausgabe_koerpertyp.innerHTML += "Normal ( - lange Beine)";
    var corr_str = p_stack / bike_reach;

    if (corr_str < 1.45) {
      ausgabe_radposition.innerHTML += "Wettkampf<br><br>";
    } else if (corr_str > 1.55) {
      ausgabe_radposition.innerHTML += "Komfortabel<br><br>";
    } else {
      ausgabe_radposition.innerHTML += "Normal/Sportlich<br><br>";
    }

  }

  else if (koerpertyp_gerundet > (normaler_koerpertyp + 0.03)) {
    ausgabe_koerpertyp.innerHTML += "Langbeiner";
    var corr_str = (p_stack / bike_reach)-0.1;
    document.getElementById("note").innerHTML = "Die Berechnung von p.Stack und p.Reach für Langbeiner noch nicht passend!";
    // document.getElementById("out_p_str").innerHTML += "<h5>Da du als Langbeiner eine verhältnismäßig kurze Reach/ langen Stack hast, wurde dein Wert um -0.1 korrigiert</h5>";

    if (corr_str < 1.45) {
      ausgabe_radposition.innerHTML += "Wettkampf<br><br>";
    } else if (corr_str > 1.55) {
      ausgabe_radposition.innerHTML += "Komfortabel<br><br>";
    } else {
      ausgabe_radposition.innerHTML += "Normal/Sportlich<br><br>";
    }
  }

  else if (koerpertyp_gerundet < normaler_koerpertyp && koerpertyp_gerundet > (normaler_koerpertyp - 0.03)) {
    ausgabe_koerpertyp.innerHTML += "Normal (- langer Oberkörper)";
    var corr_str = p_stack / bike_reach;

    if (corr_str < 1.45) {
      ausgabe_radposition.innerHTML += "Wettkampf<br><br>";
    } else if (corr_str > 1.55) {
      ausgabe_radposition.innerHTML += "Komfortabel<br><br>";
    } else {
      ausgabe_radposition.innerHTML += "Normal/Sportlich<br><br>";
    }

  }


  else if (koerpertyp_gerundet < (normaler_koerpertyp - 0.03)) {
    ausgabe_koerpertyp.innerHTML += "Sitzriese";
    document.getElementById("note").innerHTML = "Die Berechnung von p.Stack und p.Reach für Sitzriesen noch nicht passend!";


    var corr_str = (p_stack / bike_reach)+0.1;

    if (corr_str < 1.45) {
      ausgabe_radposition.innerHTML += "Wettkampf<br><br>";
    } else if (corr_str > 1.55) {
      ausgabe_radposition.innerHTML += "Komfortabel<br><br>";
    } else {
      ausgabe_radposition.innerHTML += "Normal/Sportlich<br><br>";
    }
  }
  else {
    ausgabe_koerpertyp.innerHTML += "Normales Verhältnis";
    var corr_str = p_stack / bike_reach;

    if (corr_str < 1.45) {
      ausgabe_radposition.innerHTML += "Wettkampf<br><br>";
    } else if (corr_str > 1.55) {
      ausgabe_radposition.innerHTML += "Komfortabel<br><br>";
    } else {
      ausgabe_radposition.innerHTML += "Normal/Sportlich<br><br>";
    }




  }

//Prüfen, ob das ausgewählte Rad in Frage kommt (REACH)...Langbeiner oder Sitzriese muss noch eingerechnet werden...
if (bike_reach*10 - p_reach> 15) {
document.getElementById("note_reach").innerHTML =  "Das ausgewählte Rad ist vermutlich zu lang!<br>";
} else if ((bike_reach*10) - p_reach< -15) {
document.getElementById("note_reach").innerHTML =  "Das ausgewählte Rad ist vermutlich zu kurz!<br>";
} else {

}


}

function diff_reach(bike_reach, beinlaenge, p_reach, p_stack) {

  var diff_reach = p_reach - (bike_reach*10);
  var diff_reach_prozent = Math.round(((diff_reach/p_reach)*100)*100)/100;

  document.getElementById("diff_reach").innerHTML = "<h5> Dein persönlicher Reach beträgt: " + p_reach +" mm.<br> Das ausgewählte Bike hat eine Reach von: " + bike_reach*10 + " mm.";
}

function diff_stack(bike_stack, beinlaenge, p_reach, p_stack) {
  var diff_stack = p_stack - (bike_stack);
  var diff_stack_prozent = Math.round(((diff_stack/p_stack)*100)*100)/100;

  document.getElementById("diff_stack").innerHTML = "<h5> Dein persönlicher Stack beträgt: " + p_stack +" mm.<br> Das ausgewählte Bike hat einen Stack von: " + bike_stack + " mm.";

  //Prüfen, ob das ausgewählte Rad in Frage kommt (STACK)...
  if (bike_stack - p_stack> 50) {
  document.getElementById("note_stack").innerHTML =  "Das ausgewählte Rad ist vermutlich zu hoch!<br>";
} else if (bike_stack - p_stack< -50) {
  document.getElementById("note_stack").innerHTML =  "Das ausgewählte Rad ist vermutlich zu niedrig!<br>";
  } else {

  }

}


function berechnung() {

    //Auslesen der Eingaben
    var rumpflaenge = document.getElementById("in_rumpflaenge").value;
    var armlaenge = document.getElementById("in_armlaenge").value;
    var beinlaenge = document.getElementById("in_beinlaenge").value;
    var koerpergroesse = document.getElementById("in_groesse").value;
    var bike_db_nr = parseInt(document.getElementById('bikes').value);
    var bike_reach_in = document.getElementById("in_bike_reach").value / 10;
    var bike_stack_in = document.getElementById("in_bike_stack").value;

    //Prüfen ob Stack und Reach selbst eingegeben wurden
    if (typeof bike_db[bike_db_nr] === "undefined"){
      document.getElementById("ausgewaehltes_rad").innerHTML = "Individuelle Eingabe";
      } else {
        var ausgewaehltes_rad = bike_db[bike_db_nr].Marke + " " + bike_db[bike_db_nr].Name;
        document.getElementById("ausgewaehltes_rad").innerHTML = "<b>"+ausgewaehltes_rad+"</b>";
      };

    //REACH :entweder Eingabe oder Auswahl
    if (bike_reach_in == ""){
      var bike_reach = bike_db[bike_db_nr].Reach / 10;
    }else {
      var bike_reach = bike_reach_in;
    }

    //STACK : entweder Eingabe oder Auswahl
    if (bike_stack_in == ""){
      var bike_stack = bike_db[bike_db_nr].Stack ;
    }else {
      var bike_stack = bike_stack_in;
    }

    var p_stack = (beinlaenge*10 )* 0.69;
    var p_reach = (p_stack / 1.5);

    //korrigierten Stack to Reach Berechnen

    var koerpertyp = beinlaenge / koerpergroesse;
    var koerpertyp_gerundet = Math.round(koerpertyp*100)/100;

    var i = koerpergroesse - 158;
    var y = i * 0.000909;
    var normaler_koerpertyp = 0.440 + y;

//Ermittlung der Abweichung vom normalen Körpertyp und Korrektur in 0.01er Schritten für StR

      var abweichung_koerpertyp = koerpertyp_gerundet - normaler_koerpertyp;
      var korrekturfaktor = abweichung_koerpertyp/0.003; //0.003 entspricht einem zehntel von 0.03. Bei Abweichung von 0.03 muss StR um 0.1 korrigiert werden; Bei 0.003 entsprechend um 0.01. Hier wird der Korrekturfaktor berrehcnet. Wenn Abweichung = 0.03 => x = 10 ;
      var corr_str = (p_stack / bike_reach)/10 + (korrekturfaktor/100);


var corr_str_gerundet = Math.round(corr_str*1000)/1000;


//Sicherstellen dass richtige Daten eingegeben wurden..
  if (koerpergroesse <=150 || koerpergroesse >= 210 || beinlaenge <= 40 || beinlaenge >= 120){
    alert("Bitte korrigieren Sie Ihre Angaben.");
    }
    else {

        //Aufrufen der einzelnen Funktionen
        sitzhoehe(beinlaenge);
        rahmengroesse(koerpergroesse);
        sitzlaenge(rumpflaenge, armlaenge);
        p_stack_fn(p_stack);
        p_reach_fn(p_reach);
        p_str(beinlaenge, bike_reach, corr_str_gerundet, p_stack);
        bike_str(bike_reach, bike_stack);
        koerpertyp_fn(beinlaenge, koerpergroesse, bike_reach);
        diff_reach(bike_reach, beinlaenge, p_reach, p_stack);
        diff_stack(bike_stack, beinlaenge, p_reach, p_stack);
        updateChart_2(bike_reach, corr_str);
        updateChart_3(bike_reach, beinlaenge, p_reach, p_stack);
        updateChart_4(bike_stack, beinlaenge, p_reach, p_stack);
        updateChart_5(beinlaenge, koerpergroesse, bike_reach);

        // perfect_bike(bike_reach, bike_stack, beinlaenge);

        // Ergebnis-Box und Chart mit jqueery einblenden
        $('#results_content').slideDown('slow');
        $('#chart_container').slideDown('slow');

        // Zum Ergebnis DIV scrollen
        var scroll_results = document.getElementById("results_content");
        scroll_results.scrollIntoViewIfNeeded({behavior: 'smooth', block: 'start'});

        //Beschriftung des Buttons aktualisieren
        var berechnungs_btn = document.getElementById("berechnungs_btn");
        berechnungs_btn.innerHTML = "Aktualisieren";


    }
}


function display_details() {
  // Details mit jqueery einblenden
  $('#results_details').slideDown('slow');

  //Beschriftung des Buttons aktualisieren
  var berechnungs_btn = document.getElementById("details_btn");
  berechnungs_btn.innerHTML = "Details ausblenden";

  berechnungs_btn.addEventListener("click", hide_details);

}

function hide_details() {
  // Details mit jqueery einblenden
  $('#results_details').slideUp('slow');

  //Beschriftung des Buttons aktualisieren
  var berechnungs_btn = document.getElementById("details_btn");
  berechnungs_btn.innerHTML = "Details einblenden";

  berechnungs_btn.addEventListener("click", display_details);
}

function display_sitzposition() {
  // Details mit jqueery einblenden
  $('#sitzposition').slideDown('slow');

  //Beschriftung des Buttons aktualisieren
  var berechnungs_btn = document.getElementById("sitzposition_btn");
  berechnungs_btn.innerHTML = "";

  berechnungs_btn.addEventListener("click", hide_sitzposition);

}

function hide_sitzposition() {
  // Details mit jqueery einblenden
  $('#sitzposition').slideUp('slow');

  //Beschriftung des Buttons aktualisieren
  var berechnungs_btn = document.getElementById("sitzposition_btn");
  berechnungs_btn.innerHTML = "<i>Gleich die Sitzposition mitberechnen</i>";

  berechnungs_btn.addEventListener("click", display_sitzposition);
}

function display_bike_reach(){
var individual_input = document.getElementById("bikes").value;
if (individual_input == "individual"){
  $('#display_bike_reach').slideDown('slow');
  $('#display_bike_stack').slideDown('slow');

}else {
  $('#display_bike_reach').slideUp('slow');
  $('#display_bike_stack').slideUp('slow');



}

}

//zweiter chart_container

var bar_chart_str = document.getElementById('bar_chart_str').getContext('2d');

var barChartStr = new Chart(bar_chart_str, {
  type: 'horizontalBar',
  data: {
        datasets: [{
            type: 'bubble',
            data: [0],
            backgroundColor: "#0489B1",
            label: "Eingabe",
        },
        {
            data: [-0.3],
            backgroundColor: 'rgba(4,137,177,0.2)',
            hoverBackgroundColor: "rgba(4,137,177,0.5)",
            label: 'sportlich',

        },{
            data: [0.3],
            backgroundColor: 'rgba(80,150,120,0.2)',
            hoverBackgroundColor: "rgba(80,150,120,0.5)",
            label: 'komfortabel',
        }]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true,
      },
      scales: {
            xAxes: [{
              ticks: {
                    max: 0.3,
                    min: -0.3,
                    stepSize: 0.20,
                    beginAtZero: false,
                    display: false,

                }
            },
          ],
            yAxes: [{
              stacked: true,
              gridLines: {
              display:false},


        }]
        }

    }
});



function updateChart_2(bike_reach, corr_str) {
var beinlaenge = document.getElementById('in_beinlaenge').value;
var p_stack = beinlaenge * 0.69;
var p_str = p_stack / bike_reach; //Bike_reach muss noch ausgelesen werden
var p_str_gerundet = Math.round(p_str*1000)/1000;

barChartStr.data.datasets[0].data[0] = {x: corr_str - 1.45, r: 8};
barChartStr.update();
}

//ENDE BARCHART STR

//zweiter chart_container für REACH

var bar_chart_reach = document.getElementById('bar_chart_reach').getContext('2d');



var barChartReach = new Chart(bar_chart_reach, {
  type: 'horizontalBar',
  data: {


    datasets: [{
      type: 'bubble',
      label: 'Eingabe',
      backgroundColor: '#0489B1',
      data: [{x: -0.30, r: 8}]
    },{
      label: 'lang',
      backgroundColor: 'rgba(4,137,177,0.2)',
      hoverBackgroundColor: 'rgba(4,137,177,0.5)',

      data: [-50]
    },{
      label: 'kurz',
      backgroundColor: 'rgba(80,150,120,0.2)',
      hoverBackgroundColor: "rgba(80,150,120,0.5)",
      data: [50]
    }
  ]
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
  scales: {
        xAxes: [{
          ticks: {
                max: 50,
                min: -50,
                stepSize: 25,
                beginAtZero: false,
                display: false,

            }
        },
      ],
        yAxes: [{
          stacked: true,
          gridLines: {
          display:false},

    }]
    }

}
});


function updateChart_3(bike_reach, beinlaenge, p_reach, p_stack) {
  var diff_reach = p_reach - (bike_reach*10);
  var diff_reach_prozent = Math.round(((diff_reach/p_reach)*100)*100)/100;

barChartReach.data.datasets[0].data[0] = {x: diff_reach, r: 8};
barChartReach.update();
}

//ENDE BARCHART REACH

//dritter chart_container für STACK

var bar_chart_stack = document.getElementById('bar_chart_stack').getContext('2d');



var barChartStack = new Chart(bar_chart_stack, {
  type: 'horizontalBar',
  data: {
    datasets: [{
      type: 'bubble',
      label: 'Eingabe',
      backgroundColor: '#0489B1',
      data: [{x: -0.30, r: 8}]
    },{
      label: 'hoch',
      backgroundColor: 'rgba(4,137,177,0.2)',
      hoverBackgroundColor: 'rgba(4,137,177,0.5)',
      data: [-100]
    },
    {
      label: 'niedrig',
      backgroundColor: 'rgba(80,150,120,0.2)',
      hoverBackgroundColor: "rgba(80,150,120,0.5)",
      data: [100]
    }
  ]
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
  scales: {
        xAxes: [{
          ticks: {
                max: 100,
                min: -100,
                stepSize: 50,
                beginAtZero: false,
                display: false,

            }
        },
      ],
        yAxes: [{
          stacked: true,
          gridLines: {
          display:false},

          // scaleLabel: {
          //   display: true,
          //   labelString: 'Hoch',
          // }
    }]
    }

}
});


function updateChart_4(bike_stack, beinlaenge, p_reach, p_stack) {
  var diff_stack = p_stack - (bike_stack);

barChartStack.data.datasets[0].data[0] = {x: diff_stack, r: 8};
barChartStack.update();
}

//ENDE BARCHART STACK

//dritter chart_container für Körpertyp

var bar_chart_koerpertyp = document.getElementById('bar_chart_koerpertyp').getContext('2d');



var barChartKoerpertyp = new Chart(bar_chart_koerpertyp, {
  type: 'horizontalBar',
  data: {
    datasets: [{
      type: 'bubble',
      label: 'Du',
      backgroundColor: '#0489B1',
      data: [{x: -0.0, r: 8}]
    },
    {
      label: 'Sitzriese',
      backgroundColor: 'rgba(4,137,177,0.2)',
      hoverBackgroundColor: "rgba(4,137,177,0.5)",
      data: [-0.04]
    }
    ,{
      label: 'Langbeiner',
      backgroundColor: 'rgba(80,150,120,0.2)',
      hoverBackgroundColor: 'rgba(80,150,120,0.5)',
      data: [0.04]
    },
  ]
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
  scales: {
        xAxes: [{
          ticks: {
                max: 0.04,
                min: -0.04,
                stepSize: 0.03,
                beginAtZero: false,
                display: false,

            }
        },
      ],
        yAxes: [{
          stacked: true,
          gridLines: {
          display:false},

          // scaleLabel: {
          //   display: true,
          //   labelString: 'Hoch',
          // }
    }]
    }

}
});


function updateChart_5(beinlaenge, koerpergroesse, bike_reach) {

    var koerpertyp = beinlaenge / koerpergroesse;
    var koerpertyp_gerundet = Math.round(koerpertyp*100)/100;
    var p_stack = beinlaenge * 0.69;
    var p_reach = (p_stack / 1.5)*10;


  //Nachbildung der diagonalen "normal, langbeiner und sitzriese"
    var i = koerpergroesse - 158;
    var y = i * 0.000909;
    var normaler_koerpertyp = 0.440 + y;
    var diff_koerpertyp = koerpertyp -normaler_koerpertyp;

barChartKoerpertyp.data.datasets[0].data[0] = {x: diff_koerpertyp, r: 8};

barChartKoerpertyp.update();
}

//ENDE BARCHART Körpertyp


//Aufbau Bike Datenbank
var i = 0;

var bike_db = new Array();

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Canyon";
bike_db[i]['Name'] = "Aeroad CF SLX 2XS";
bike_db[i]['Reach'] = 363;
bike_db[i]['Stack'] = 494;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Canyon";
bike_db[i]['Name'] = "Aeroad CF SLX XS";
bike_db[i]['Reach'] = 376;
bike_db[i]['Stack'] = 509;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Canyon";
bike_db[i]['Name'] = "Aeroad CF SLX S";
bike_db[i]['Reach'] = 391;
bike_db[i]['Stack'] = 533;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Canyon";
bike_db[i]['Name'] = "Aeroad CF SLX M";
bike_db[i]['Reach'] = 397;
bike_db[i]['Stack'] = 550;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Canyon";
bike_db[i]['Name'] = "Aeroad CF SLX L";
bike_db[i]['Reach'] = 403;
bike_db[i]['Stack'] = 570;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Canyon";
bike_db[i]['Name'] = "Aeroad CF SLX XL";
bike_db[i]['Reach'] = 417;
bike_db[i]['Stack'] = 592;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Canyon";
bike_db[i]['Name'] = "Aeroad CF SLX 2XL";
bike_db[i]['Reach'] = 423;
bike_db[i]['Stack'] = 612;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Canyon";
bike_db[i]['Name'] = "Ultimate CF SLX 2XS";
bike_db[i]['Reach'] = 369;
bike_db[i]['Stack'] = 500;

i++;


bike_db[i] = new Object();
bike_db[i]['Marke'] = "Canyon";
bike_db[i]['Name'] = "Ultimate CF SLX XS";
bike_db[i]['Reach'] = 378;
bike_db[i]['Stack'] = 522;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Canyon";
bike_db[i]['Name'] = "Ultimate CF SLX S";
bike_db[i]['Reach'] = 385;
bike_db[i]['Stack'] = 546;

i++;


bike_db[i] = new Object();
bike_db[i]['Marke'] = "Canyon";
bike_db[i]['Name'] = "Ultimate CF SLX M";
bike_db[i]['Reach'] = 391;
bike_db[i]['Stack'] = 567;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Canyon";
bike_db[i]['Name'] = "Ultimate CF SLX L";
bike_db[i]['Reach'] = 399;
bike_db[i]['Stack'] = 592;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Canyon";
bike_db[i]['Name'] = "Ultimate CF SLX XL";
bike_db[i]['Reach'] = 418;
bike_db[i]['Stack'] = 613;

i++;


bike_db[i] = new Object();
bike_db[i]['Marke'] = "Canyon";
bike_db[i]['Name'] = "Ultimate CF SLX 2XL";
bike_db[i]['Reach'] = 428;
bike_db[i]['Stack'] = 631;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Rose";
bike_db[i]['Name'] = "X-Lite SIX 50cm";
bike_db[i]['Reach'] = 373;
bike_db[i]['Stack'] = 520;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Rose";
bike_db[i]['Name'] = "X-Lite SIX 53cm";
bike_db[i]['Reach'] = 380;
bike_db[i]['Stack'] = 538;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Rose";
bike_db[i]['Name'] = "X-Lite SIX 55cm";
bike_db[i]['Reach'] = 386;
bike_db[i]['Stack'] = 555;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Rose";
bike_db[i]['Name'] = "X-Lite SIX 57cm";
bike_db[i]['Reach'] = 394;
bike_db[i]['Stack'] = 572;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Rose";
bike_db[i]['Name'] = "X-Lite SIX 59cm";
bike_db[i]['Reach'] = 402;
bike_db[i]['Stack'] = 591;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Rose";
bike_db[i]['Name'] = "X-Lite SIX 62";
bike_db[i]['Reach'] = 416;
bike_db[i]['Stack'] = 611;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Giant";
bike_db[i]['Name'] = "TCR Advanced 2 Pro XS";
bike_db[i]['Reach'] = 372;
bike_db[i]['Stack'] = 517;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Giant";
bike_db[i]['Name'] = "TCR Advanced 2 Pro S";
bike_db[i]['Reach'] = 378;
bike_db[i]['Stack'] = 529;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Giant";
bike_db[i]['Name'] = "TCR Advanced 2 Pro M";
bike_db[i]['Reach'] = 383;
bike_db[i]['Stack'] = 545;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Giant";
bike_db[i]['Name'] = "TCR Advanced 2 Pro ML";
bike_db[i]['Reach'] = 398;
bike_db[i]['Stack'] = 562;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Giant";
bike_db[i]['Name'] = "TCR Advanced 2 Pro L";
bike_db[i]['Reach'] = 402;
bike_db[i]['Stack'] = 581;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "Giant";
bike_db[i]['Name'] = "TCR Advanced 2 Pro XL";
bike_db[i]['Reach'] = 412;
bike_db[i]['Stack'] = 595;

i++;

bike_db[i] = new Object();
bike_db[i]['Marke'] = "";

i++;

for (i=0; i< bike_db.length-1; i++){
  document.getElementById("bikes").innerHTML += "<option value='"+i+"'>"+bike_db[i].Marke + " "+bike_db[i].Name+"</option>";

  var y = i+1;

  if (bike_db[i].Marke == bike_db[y].Marke){
    console.log(i);
  }else {
    console.log(bike_db[i].Marke);
    document.getElementById("bikes").innerHTML += "<optgroup label='"+bike_db[y].Marke+"'</optgroup>";

  }
};
