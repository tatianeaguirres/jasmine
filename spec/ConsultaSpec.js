describe("Consulta", function() {

    var tatiane;

    beforeEach(function() { //todo codigo repetido vai para o "beforeEach" >> boas praticas
        tatiane = new PacienteBuilder().comIdade(23).comPeso(53).constroi();
    });

    describe("Consultas do tipo retorno", function() {
        it("não deve cobrar nada se for um retorno", function() {
            var consulta = new Consulta(tatiane, [], true, true);
            expect(consulta.preco()).toEqual(0);
        });
    });

    describe("Consultas com procedimentos", function() {
        it("deve cobrar 25 por cada procedimento comum", function() {
            var consulta = new Consulta(tatiane, ["proc1", "proc2"], false, false);
            expect(consulta.preco()).toEqual(50);
        });

        it("deve cobrar preço especifico dependendo do procedimento", function() {
            var consulta = new Consulta(tatiane, ["procedimento-comum", "raio-x", "procedimento-comum", "gesso"], false, false);
            expect(consulta.preco()).toEqual(137);
        });

        it("deve cobrar o dobro do preço para procedimentos particulares", function() {
            var consulta = new Consulta(tatiane, ["procedimento-comum", "procedimento-comum"], true, false);
            expect(consulta.preco()).toEqual(100);
        });
    });

});
