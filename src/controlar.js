import buscarVacaToro from "./vacaToro"

function juegoVacaToro(cod1,cod2,cant){
    let resp;
    for(var i = cant; i>0;i--){
        resp = buscarVacaToro(cod1,cod2);        
    }        
}