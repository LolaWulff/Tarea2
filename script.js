function calcular() {
    // recuperar los valores de la página
    // sumarlos
    // agregarlos en la página en el lugar adecuado
    var op1=document.getElementById("op1").value;
    var op2=document.getElementById("op2").value;
    var opSelected= document.getElementById("select").value;
    var result = "";

    switch (opSelected){
        case "*": 
            result = parseInt(op1)*parseInt(op2);
            break;
        case "/": 
            if (op2 == 0){
                result = "No se puede dividir por 0";
            }else
                result = parseInt(op1)/parseInt(op2);
                break;
        case "+": 
            result = parseInt(op1)+parseInt(op2);
            break;
        case "-":  
            result = parseInt(op1)-parseInt(op2);
            break;
        default:
            result = "La operación no se puede realizar";
            document.getElementById("resultado").innerHTML= result;
            
    }
    document.getElementById("resultado").innerHTML=result;
    
}