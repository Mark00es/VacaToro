function separarCodigo(codigoSecreto){
    let numString = String(codigoSecreto);
    const array = []    
    for(var i = 0;i<numString.length;i++){
        let valInsert = +numString.charAt(i);
        array.push(valInsert);        
    }
    return array;
}
export default separarCodigo;
