describe("Paciente", function() {

  it("deve calcular o imc", function() {

    var elias = new Paciente("Elias", 34, 76, 1.80);
    expect(elias.imc()).toEqual(76 / (1.80 * 1.80));
  });

});
