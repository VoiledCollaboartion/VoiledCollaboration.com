
function showHT(){
    document.getElementById("HT").style.display = "block";
    document.getElementById("sSParent").style.display = "none";
}

function showsS(){
    document.getElementById("HT").style.display = "none";
    document.getElementById("sSParent").style.display = "block";
}
//end


function iconText(){
    let aside = document.getElementById("aside");
    let iconTextB = document.getElementById("iconText");
    let showB = document.getElementById("show");
    let hideB = document.getElementById("hide");
    let iconDesc1 = document.getElementById("iconDesc1");
    let iconDesc2 = document.getElementById("iconDesc2");
    let iconDesc3 = document.getElementById("iconDesc3");
    let iconDesc4 = document.getElementById("iconDesc4");
    let important = document.getElementById("iS");
    let asideControl = document.getElementById("asideControl");
    let bigLogo = document.getElementById("txtLogo");
    let container = document.getElementById("container");
    let hToSection = document.getElementById("hToSec");
    let icon1 = document.getElementById("icon1")
    let icon2 = document.getElementById("icon2")
    let icon3 = document.getElementById("icon3")
    let icon4 = document.getElementById("icon4")

    aside.style.width = "60px";
    iconTextB.style.display = "none";
    showB.style.display = "block";
    asideControl.style.left = "48px";
    bigLogo.style.display = "none";
    iconDesc1.style.display = "none";
    iconDesc2.style.display = "none";
    iconDesc3.style.display = "none";
    iconDesc4.style.display = "none";
    important.style.display = "none";
    container.style.gridTemplateColumns = "70px 1px 1fr";
    icon1.style.justifyContent = "center"
    icon2.style.justifyContent = "center"
    icon3.style.justifyContent = "center"
    icon4.style.justifyContent = "center"
    hToSection.style.marginLeft = ""
}


function show(){
        let aside = document.getElementById("aside");
        let iconTextB = document.getElementById("iconText");
        let showB = document.getElementById("show");
        let hideB = document.getElementById("hide");
        let iconDesc1 = document.getElementById("iconDesc1");
        let iconDesc2 = document.getElementById("iconDesc2");
        let iconDesc3 = document.getElementById("iconDesc3");
        let iconDesc4 = document.getElementById("iconDesc4");
        let important = document.getElementById("iS");
        let asideControl = document.getElementById("asideControl");
        let bigLogo = document.getElementById("txtLogo");
        let container = document.getElementById("container");
        let hToSection = document.getElementById("hToSec");
        let icon1 = document.getElementById("icon1");
        let icon2 = document.getElementById("icon2");
        let icon3 = document.getElementById("icon3");
        let icon4 = document.getElementById("icon4");

        aside.style.width = "240px";
        iconTextB.style.display = "block";
        showB.style.display = "none";
        asideControl.style.left = "196px";
        bigLogo.style.display = "block";
        iconDesc1.style.display = "block";
        iconDesc2.style.display = "block";
        iconDesc3.style.display = "block";
        iconDesc4.style.display = "block";
        important.style.display = "block";
        // container.style.gridTemplateColumns = "240px 10px";
        icon1.style.justifyContent = "center";
        icon2.style.justifyContent = "center";
        icon3.style.justifyContent = "center";
        icon4.style.justifyContent = "center";
        hToSection.style.marginLeft = "";
};


$(document).ready(function () {
    var cards = $(".card").toArray();
  
    for (var i = cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)); // Random index between 0 and i (inclusive)
  
      // Swap elements
      var temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
  
    // Reorder the shuffled elements within the container
    $(".scriptSec").empty(); // Remove the old order
    for (var i = 0; i < cards.length; i++) {
      $(".scriptSec").append(cards[i]);
    }
  });

   
    

  var isSVisible = false; // Variable to track the visibility state of sS
var isS2Visible = false; // Variable to track the visibility state of sS2

function ViewM() {
    let viewM = document.getElementById("viewM1");
    let sS = document.getElementById("sS");

    if (!isSVisible) { // Check if sS is currently hidden
        viewM.innerHTML = "View Less";
        sS.style.height = "830px";
    } else {
        viewM.innerHTML = "View More";
        sS.style.height = "420px";
    }

    isSVisible = !isSVisible; // Toggle the visibility state
}

function ViewM2() {
    var viewM2 = document.getElementById("viewM2");
    var sS2 = document.getElementById("sS2");

    if (!isS2Visible) { // Check if sS2 is currently hidden
        viewM2.innerHTML = "View Less";
        sS2.style.height = "830px";
    } else {
        viewM2.innerHTML = "View More";
        sS2.style.height = "420px";
    }

    isS2Visible = !isS2Visible; // Toggle the visibility state
}