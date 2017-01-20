describe("Consulta", function() {

  it("não deve cobrar nada se for um retorno", function() {
    var elias = new Paciente("Elias", 34, 76, 1.80);
    var consulta = new Consulta(elias, [], true, true);

    expect(consulta.preco()).toEqual(0);
  });

  it("deve cobrar 25 por cada procedimento comum", function() {
    var elias = new Paciente("Elias", 34, 76, 1.80);
    var consulta = new Consulta(elias, ["proc1", "proc2"], false, false);

    expect(consulta.preco()).toEqual(50);
  });

  it("deve cobrar preço especifico dependendo do procedimento", function() {
    var tatiane = new Paciente("Tatiane", 24, 55, 1.65);
    var consulta = new Consulta(tatiane, ["procedimento-comum", "raio-x", "procedimento-comum", "gesso"], false, false);

    expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
  });

  it("deve cobrar o dobro do preço para procedimentos particulares", function() {
    var tatiane = new Paciente("Tatiane", 24, 55, 1.65);
    var consulta = new Consulta(tatiane, ["procedimento-comum", "procedimento-comum"], true, false);

    expect(consulta.preco()).toEqual((25 + 25) * 2);
  })
});
