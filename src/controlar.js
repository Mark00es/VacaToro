import buscarVacaToro from "./vacaToro"
import separarCodigo from "./separador"

function juegoVacaToro(cod1,cod2,cant){
    let resp;
    for(var i = cant; i>0;i--){
        resp = buscarVacaToro(cod1,cod2);        
    }        
}