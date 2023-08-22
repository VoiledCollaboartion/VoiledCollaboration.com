
function testfunc(){
    let h1 = document.getElementById("tf");
    let results = document.getElementById("tf1");


    const Array1 = [ "Volvo", "Audi", "Ferrari"];
    const Array2 = [ "Passat", "Mercedes", "Lamborgini"];
        Array1[0] = "Volvo";

    let Array3 = Array1.sort().concat(Array2);

    results.innerHTML = Array1 + "<br>" + Array2 + "<br>" + Array3;




}