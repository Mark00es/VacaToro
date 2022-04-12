import vacaToro from "./vacaToro";

class juego{
    constructor(codigoSecreto, intentos){
        const codigoSecreto = codigoSecreto
        let intentos = intentos;    
        let vacaToro = new vacaToro();    
    }
    jugar(codigoIngresado){ 
        let val2 = vacaToro.validarCodigo(codigoIngresado);
        let resultado = vacaToro.compararCodigo(codigoSecreto,val2);  
        intentos--
        if(intentos==0){            
            div.innerHTML = "<p>" + "Perdiste el juego por falta de intentos. " +" El codigo secreto era: "+ secreto +"</p>";
          }
          else{
            div.innerHTML = "<p>" + resultado + " Te quedan: " + intentos + " intentos" + "</p>";
          }
    }
}
export default juego;