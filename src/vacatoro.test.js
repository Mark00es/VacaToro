import validarCodigo from "./jugadorA.js"
//import compararCodigo from "./vacaToro"
import separarCodigo from "./separador"
import vacaToro from "./vacaToro"

describe("Codigo Secreto", () => {
  it("Cuando jugador A ingrese un codigo secreto vacio deberia devolver codigo vacio ", () => {
    expect(validarCodigo("")).toEqual("Codigo Vacio");
  });
  it("Cuando jugador A ingrese un codigo secreto de 4 digitos deberia devolver dicho codigo ", () => {
    expect(validarCodigo(1206)).toEqual(1206);
  });  
  it("Cuando jugador A ingrese un codigo secreto de 4 digitos deberia devolver dicho codigo ", () => {
    expect(validarCodigo(4578)).toEqual(4578);
  });  
  it("Cuando jugador B ingrese un codigo secreto vacio para adivinar el codigo, deberia mostrar, 'Ingresaste codigo vacio'  ", () => {    
    expect(validarCodigo("")).toEqual("Codigo Vacio");
  });
  it("si jugador ingresa numero 5786 este debe devolver el numero en vector [5,7,8,6]", () => {    
    expect(separarCodigo(5786)).toEqual([5,7,8,6]);
  });
  it("si jugador ingresa numero 457896 este debe devolver el numero en vector [4,5,7,8,9,6]", () => {    
    expect(separarCodigo(457896)).toEqual([4,5,7,8,9,6]);
  });
  it("si jugador A ingresa numero 3412 y el B ingresa 7604 deberia retornar * ", () => {    
    let juego = new vacaToro();
    expect(juego.compararCodigo(3412,7604)).toEqual("*");
  });
  
  it("si jugador A ingresa numero 9231 y el B ingresa 1708 deberia retornar ** ", () => {    
    let juego = new vacaToro();
    expect(juego.compararCodigo(8231,1708)).toEqual("**");
  });  
  it("si jugador A ingresa numero 8125 y el B ingresa 4065 deberia retornar ! ", () => {  
    let juego = new vacaToro();  
    expect(juego.compararCodigo(8125,4065)).toEqual("!");
  });
  it("si jugador A ingresa numero 1234 y el B ingresa 1530 deberia retornar !! ", () => {    
    let juego = new vacaToro();
    expect(juego.compararCodigo(1234,1530)).toEqual("!!");
  });
  it("si jugador A ingresa numero 9165 y el B ingresa 9053 deberia retornar !* ", () => {    
    let juego = new vacaToro();
    expect(juego.compararCodigo(9165,9053)).toEqual("!*");
  });
  it("si jugador A ingresa numero 12334  y el B ingresa 36589 deberia retornar * ", () => {    
    let juego = new vacaToro();
    expect(juego.compararCodigo(12334,36589)).toEqual("*");
  });
  it("si jugador A ingresa numero 1111  y el B ingresa 1234 deberia retornar ! ", () => {    
    let juego = new vacaToro();
    expect(juego.compararCodigo(1111,1234)).toEqual("!");
  });
  it("si jugador A ingresa numero 4723  y el B ingresa vacio deberia retornar ingresas codigo vacio ", () => {    
    let juego = new vacaToro();
    expect(juego.compararCodigo(4721,"")).toEqual("Codigo Vacio");
  });  
  it("si jugador A ingresa numero 32421  y el B ingresa 32421 deberia retornar ", () => {
    let juego = new vacaToro();    
    expect(juego.compararCodigo(32421,32421)).toEqual("Felicidades Adivinaste El codigo");
  });
  it("si jugador A ingresa numero 32421  y el B ingresa 987789 deberia retornar 'Codigo imcompatible'", () => {
    let juego = new vacaToro();    
    expect(juego.compararCodigo(32421,987789)).toEqual("Codigo imcompatible");
  });
  //si el codigo es 1111 y el jugador b coloca 1123
  // Que pasa si el es codigo repetido que debe mostrar :v ?  */
});

