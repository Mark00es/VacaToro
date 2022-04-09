import codigoSecreto from "./jugadorA.js"
import recibirCodigoB from "./jugadorB.js"
import separarCodigo from "./separador"
import compararCodigo from "./vacaToro"


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
  it("si jugador ingresa numero 457896 este debe devolver el numero en vector [4,5,7,8,9,6]", () => {    
    expect(separarCodigo(457896)).toEqual([4,5,7,8,9,6]);
  });
  it("si jugador A ingresa numero 3412 y el B ingresa 7604 deberia retornar * ", () => {
    const codVec1 = separarCodigo(3412);
    const codVec2 = separarCodigo(7604);
    expect(compararCodigo(codVec1,codVec2)).toEqual("*");
  });
  /*i12561256digo secreto es 1234 y jugador B ingresa 0916 debe mostrar el simbolo de vaca (*)", () => {
    expect(buscarVaca(1234,0916)).toEqual("*");
  });*/
  //si el codigo es 1111 y el jugador b coloca 1123
  // Que pasa si el es codigo repetido que debe mostrar :v ?  
});

