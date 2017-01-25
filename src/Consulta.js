function Consulta(paciente, procedimentos, particular, retorno, data) {
    var clazz = {
        preco: function() {
            if (retorno) return 0;
            var precoFinal = 0;
            procedimentos.forEach(function(procedimento) {
                if ("raio-x" == procedimento) precoFinal += 55;
                else if ("gesso" == procedimento) precoFinal += 32;
                else precoFinal += 25; //valor do procedimento padrão
            });
            if (particular) precoFinal *= 2; //consulta particular é o dobro do valor
            return precoFinal;
        },
        getNome : function() { return paciente; },
        getProcedimentos : function() { return procedimentos; },
        ehParticular : function() { return particular; },
        ehRetorno : function() { return retorno; },
        getData : function() { return data; }
    };
    return clazz;
}
