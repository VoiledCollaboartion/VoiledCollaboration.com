
function showHT(){
    document.getElementById("HT").style.display = "block";
    document.getElementById("sS").style.display = "none";
}

function showsS(){
    document.getElementById("HT").style.display = "none";
    document.getElementById("sS").style.display = "flex";
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
    container.style.gridTemplateColumns = "70px 0px";
}
