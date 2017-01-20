describe("MaiorEMenor", function() {

    it("deve entender numeros em ordem não sequencial", function() {
        var algoritimo = new MaiorEMenor;
        algoritimo.encontra([5, 3, 7, 2, 9, 15]);
        expect(algoritimo.pegaMaior()).toEqual(15);
        expect(algoritimo.pegaMenor()).toEqual(2);
    });

    it("deve entender numeros em ordem crescente", function() {
        var algoritimo = new MaiorEMenor();
        algoritimo.encontra([5, 6, 7, 8]);
        expect(algoritimo.pegaMaior()).toEqual(8);
        expect(algoritimo.pegaMenor()).toEqual(5);
    });

    it("deve entender numeros em ordem decrescente", function() {
        var algoritimo = new MaiorEMenor();
        algoritimo.encontra([8, 7, 6, 5]);
        expect(algoritimo.pegaMaior()).toEqual(8);
        expect(algoritimo.pegaMenor()).toEqual(5);
    });
});
