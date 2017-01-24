function PacienteBuilder() {

  var nome = "Tatiane";
  var idade = 24;
  var peso = 55;
  var altura = 1.65;

  var clazz = {

    constroi : function() {
      return Paciente(nome, idade, peso, altura);
    },

    comIdade : function(valor) {
      idade = valor;
      return this;
    },

    comPeso : function(valor) {
      peso = valor;
      return this;
    }

  };

  return clazz;

}
