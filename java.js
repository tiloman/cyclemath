function gobutton(){
    alert("Wohin willst du denn gehen???");
}



/* Responsive Navi */
function ResponsiveNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* Array für die Slider-Bilder */
var i = 0;
var new_img = [
        "img/slider_02.jpg",
        "img/ssh_title3.jpeg",
        "img/slider_03.jpg",
        "img/slider_04.jpg"
    ];

var refresh_img = setInterval(change_header,5000);

function change_header() {
   if (i < new_img.length - 1) {
       i++;
    }else {
        i=0;
    }
    document.getElementById("slider").style.backgroundImage = "url("+ new_img[i] +")";
}

/*Ende Array Bilder */
