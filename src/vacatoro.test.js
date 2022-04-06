import codigoSecreto from "./jugadorA.js"
import recibirCodigoB from "./jugadorB.js"


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
    // compararCodigo(Codigo JugB,Codigo JugA)
    expect(recibirCodigoB("")).toEqual("Ingresaste codigo vacio");
  });

  //si el codigo es 1111 y el jugador b coloca 1123
  // Que pasa si el es codigo repetido que debe mostrar :v ?  
});

