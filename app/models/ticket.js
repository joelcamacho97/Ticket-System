import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({

    Cliente: attr('string'),
    Solicitante: attr('string'),
    Morada: attr('string'),
    Localidade: attr('string'),
    Telemovel: attr('string'),
    NIF: attr('string'),
    dateValue: attr('string'),
    hora: attr('string'),
    Recebido_por: attr('string'),
    Análise: attr('boolean'),
    Orçamento: attr('boolean'),
    Instalação: attr('boolean'),
    Manutenção: attr('boolean'),
    Software: attr('boolean'),
    Hardware: attr('boolean'),
    Formação: attr('boolean'),
    descrição: attr('string'),
    nivel: attr('string'),
    estado: attr('string'),
    logs: Model.extend({
        nome: attr('string'),
        date: attr('string')
    })
});


// defaultValue: function() { return new Date(); }