function getgrade(){
    var x = Number(document.getElementById("m1").value) ;
    var y = Number(document.getElementById("m2").value) ;
    var z = Number(document.getElementById("m3").value) ;

    avg = (x + y + z) / 3 ;

    if (avg >= 90){
        alert(grade = "S");
    }
    else if (avg >= 80){
        alert(grade = "A");
    }
    else if (avg >= 70){
        alert(grade = "B");
    }
    else if (avg >= 35){
        alert(grade = "C");
    }
    else{
        alert(grade = "Fail");
    }

}