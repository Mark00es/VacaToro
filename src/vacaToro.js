import separarCodigo from "./separador"
import recibirCodigo from "./jugadorA"
function mensajeFelicidades(){
    return "Felicidades Adivinaste El codigo";
}
function buscarVacaToro(codigoSecreto,codigoIngresado){    
    const codVec1 = separarCodigo(codigoSecreto);
    const codVec2 = separarCodigo(codigoIngresado);
    let output="";
    for(var i = 0;i<codVec1.length;i++){
        if(codVec1[i]==codVec2[i])
            output += "!";
        else{if(codVec1.includes(codVec2[i]))
                output += "*";
        }    
    }    
    return output;
}
function compararCodigo(codigoSecreto, codigoIngresado){
    let output = recibirCodigo(codigoIngresado)
    if(codigoSecreto == codigoIngresado){
        output = mensajeFelicidades();
    }
    if(output != "Codigo Vacio" && codigoSecreto!=codigoIngresado){
        output = buscarVacaToro(codigoSecreto,codigoIngresado);
    }
    return output;
}
export default compararCodigo;
