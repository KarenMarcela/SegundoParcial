
//FUNCION ENVIAR
function Enviar(){
    var name1 = document.getElementById("name1").value.trim();
    var name2 = document.getElementById("name2").value.trim();
    var apellido1 = document.getElementById("apellido1").value.trim();
    var apellido2 = document.getElementById("apellido2").value.trim();

    if((name1.length < 5) || (apellido1.length < 5 ) ){
        Swal.fire({
            
            title: "Cajas de texto vacías",
            text: "Ingrese valores mayores o iguales 5 caracteres",
            icon : "error",
            timer : 3000
        });
        document.getElementById("name1").style.boderColor = "red";
        document.getElementById("name2").style.boderColor = "red";
    }
    
    else  {
        // document.getElementById("resultado").innerHTML =  "<strong>Su nombre completo es: "+name1+" "+name2+" "+apellido1+" "+apellido2+"</strong>";
        if((name1.length > 5) && (apellido1.length>5)){
            document.getElementById("resultado").innerHTML = "Su nombre completo es: "+name1+" "+apellido1;
        }
        else{
            document.getElementById("resultado").innerHTML =  "<strong>Su nombre completo es: "+name1+" "+name2+" "+apellido1+" "+apellido2+"</strong>";
        }
    }
}

//FUNCION LIMPIAR
function Limpiar(){
    document.getElementById("name1").value ="";
    document.getElementById("name2").value ="";
    document.getElementById("apellido1").value ="";
    document.getElementById("apellido2").value ="";
    document.getElementById("resultado").value ="";

}