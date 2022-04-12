import separarCodigo from "./separador"
import recibirCodigo from "./jugadorA"

class vacaToro{
    mensajeFelicidades(){
        return "Felicidades Adivinaste El codigo";
    }
    
    buscarVacaToro(codigoSecreto,codigoIngresado){    
        let coonf = false;
        const codVec1 = separarCodigo(codigoSecreto);
        const codVec2 = separarCodigo(codigoIngresado);
        let output="";
        for(var i = 0;i<codVec1.length;i++){
            if(codVec1[i]==codVec2[i]){
                output += "!";
                coonf=true;
            }
            else{
                if(codVec1.includes(codVec2[i])){
                    output += "*";
                    coonf=true;
                }                                    
            }    
        }    
        if(coonf==false){
            output = "Codigo imcompatible";
        }                
        return output;
    }

    unir(cod){
        let output="";
        for(var i = 0;i<cod.length;i++){
            output += cod[i];
        }
        return output;
    }    
   
    compararCodigo(codigoSecreto, codigoIngresado){
        let output = recibirCodigo(codigoIngresado)
        if(codigoSecreto == codigoIngresado){
            output = this.mensajeFelicidades();
        }
        if(output != "Codigo Vacio" && codigoSecreto!=codigoIngresado){
            output = this.buscarVacaToro(codigoSecreto,codigoIngresado);            
            if(output != "Codigo imcompatible")                
                output = this.unir(separarCodigo(output).sort()) 
        }
        return output;
    }
}
export default vacaToro;