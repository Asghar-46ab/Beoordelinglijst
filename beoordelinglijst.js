function berekencijfer(inputcijfer1) {
    
    if (inputcijfer1 <= 49) {
        return "onvoldoende";
    } else if (inputcijfer1 <= 59) {
        return "matig";
    } else if (inputcijfer1 <= 74) {
        return "voldoende";
    } else {
        return "Goed";
    }
}

function rekencijfer1() {
    var cijfer = parseInt(document.getElementById("inputcijfer1").value);
    var woord = berekencijfer(cijfer);
    document.getElementById("resultaat").innerHTML +="Het cijfer is : "+cijfer + " dus " +  woord+"<br/>";
}


function rekencijfer2() {
    var cijfer = parseInt(document.getElementById("inputcijfer2").value);
    var woord = berekencijfer(cijfer);
    document.getElementById("resultaat").innerHTML +="De beoordeling is: "+ woord + " want het cijfer is: " + cijfer+"<br/>";
}

