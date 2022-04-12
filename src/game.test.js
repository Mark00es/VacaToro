describe("Codigo Secreto", () => {
    it("Cuando jugador A ingrese un codigo secreto vacio deberia devolver codigo vacio ", () => {
      let juego = new vacaToro();
      expect(juego.validarCodigo("")).toEqual("Codigo Vacio");
    });
});