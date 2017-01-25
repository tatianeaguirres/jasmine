function Agendamento() {

  var clazz = {

    para : function(consulta) {
      var umDiaEmMillisegundo = 1000 * 60 * 60 * 24;
      var vinteDiasEmMilliSegundos = umDiaEmMillisegundo * 20;
      var novaData = new Date(consulta.getData().getTime() + vinteDiasEmMilliSegundos);
      while (novaData.getDay() == 0 || novaData.getDay() == 6) { // domingo = 0 // sabado = 6
        novaData = new Date(novaData.getTime() + umDiaEmMillisegundo);
      }
      var novaConsulta = new Consulta(consulta.getNome(), consulta.getProcedimentos(), consulta.ehParticular(), true, novaData);
      return novaConsulta;
    }

  };

  return clazz;
};
