

function myf(){
document.getElementById("img1").style.height = "110%"
}
function myfS(){
    document.getElementById("img1").style.height = "100%"
    }

function myf2(){
    document.getElementById("img2").style.height = "110%"
}
function myfS2(){
    document.getElementById("img2").style.height = "100%"
}

function myf3(){
    document.getElementById("img3").style.height = "110%"
}
function myfS3(){
    document.getElementById("img3").style.height = "100%"
}



// About Moving Funcion




function move() {
    setTimeout(function() {
        let card1 = document.getElementById("card1");
        let card2 = document.getElementById("card2");
        let card3 = document.getElementById("card3");

        let B1 = document.getElementById("B1");
        let B2 = document.getElementById("B2");
        let B3 = document.getElementById("B3");

        card1.style.left = "-400px";
        card2.style.left = "-400px";
        card3.style.left = "-400px";

        B2.style.backgroundColor = "var(--greencolor)"

        // Pause for 4 seconds, then move to -800px
        setTimeout(function() {
            card1.style.left = "-800px";
            card2.style.left = "-800px";
            card3.style.left = "-800px";
            B3.style.backgroundColor = "var(--greencolor)"

            // Pause for 4 seconds, then move to 0px
            setTimeout(function() {
                card1.style.left = "0px";
                card2.style.left = "0px";
                card3.style.left = "0px";
                B3.style.backgroundColor = "var(--greencolor)";

                setTimeout(function() {
                    B1.style.backgroundColor = "var(--greencolor)";
                    B2.style.backgroundColor = "transparent";
                    B3.style.backgroundColor = "transparent";
                    finished = true
                }, 0); // 4000 milliseconds = 4 seconds

            }, 4000); // 4000 milliseconds = 4 seconds
        }, 4000); // 4000 milliseconds = 4 seconds
    }, 2000)
}




function clickToMoveB1(){
    let card1 = document.getElementById("card1");
    let card2 = document.getElementById("card2");
    let card3 = document.getElementById("card3"); 

    let B1 = document.getElementById("B1");
    let B2 = document.getElementById("B2");
    let B3 = document.getElementById("B3");
    setTimeout(function() {

    card1.style.left = "0px";
    card2.style.left = "0px";
    card3.style.left = "0px";

    B1.style.backgroundColor = "var(--greencolor)";
    B2.style.backgroundColor = "transparent";
    B3.style.backgroundColor = "transparent";

}, 0)

}

function clickToMoveB2(){
    let card1 = document.getElementById("card1");
    let card2 = document.getElementById("card2");
    let card3 = document.getElementById("card3");

    let B1 = document.getElementById("B1");
    let B2 = document.getElementById("B2");
    let B3 = document.getElementById("B3");

    
    setTimeout(function() {
        card1.style.left = "-400px";
        card2.style.left = "-400px";
        card3.style.left = "-400px";
        B1.style.backgroundColor = "var(--greencolor)"
        B2.style.backgroundColor = "var(--greencolor)"
        B3.style.backgroundColor = "transparent"
        
        
    }, 0)
}

function clickToMoveB3(){
    let card1 = document.getElementById("card1");
    let card2 = document.getElementById("card2");
    let card3 = document.getElementById("card3");

    let B1 = document.getElementById("B1");
    let B2 = document.getElementById("B2");
    let B3 = document.getElementById("B3");

    
    setTimeout(function() {
        card1.style.left = "-800px";
        card2.style.left = "-800px";
        card3.style.left = "-800px";
        B2.style.backgroundColor = "var(--greencolor)"
        
        B1.style.backgroundColor = "var(--greencolor)";
        B2.style.backgroundColor = "var(--greencolor)";
        B3.style.backgroundColor = "var(--greencolor)";
    }, 0)
}