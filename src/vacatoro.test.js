import codigoSecreto from "./jugadorA.js"
import recibirCodigoB from "./jugadorB.js"
import separarCodigo from "./vacaToro"


describe("Codigo Secreto", () => {
  it("Cuando jugador A ingrese un codigo secreto vacio deberia devolver codigo vacio ", () => {
    expect(codigoSecreto("")).toEqual("Codigo Vacio");
  });
  it("Cuando jugador A ingrese un codigo secreto de 4 digitos deberia devolver dicho codigo ", () => {
    expect(codigoSecreto(1206)).toEqual(1206);
  });  
  it("Cuando jugador A ingrese un codigo secreto de 4 digitos deberia devolver dicho codigo ", () => {
    expect(codigoSecreto(4578)).toEqual(4578);
  });  
  it("Cuando jugador B ingrese un codigo secreto vacio para adivinar el codigo, deberia mostrar, 'Ingresaste codigo vacio'  ", () => {    
    expect(recibirCodigoB("")).toEqual("Ingresaste codigo vacio");
  });
  it("si jugador ingresa numero 5786 este debe devolver el numero en vector [5,7,8,6]", () => {    
    expect(separarCodigo(5786)).toEqual([5,7,8,6]);
  });
  /*i12561256digo secreto es 1234 y jugador B ingresa 0916 debe mostrar el simbolo de vaca (*)", () => {
    expect(buscarVaca(1234,0916)).toEqual("*");
  });*/
  //si el codigo es 1111 y el jugador b coloca 1123
  // Que pasa si el es codigo repetido que debe mostrar :v ?  
});

