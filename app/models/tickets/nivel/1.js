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
    Análise: attr('string'),
    Orçamento: attr('string'),
    Instalação: attr('string'),
    Manutenção: attr('string'),
    Software: attr('string'),
    Hardware: attr('string'),
    Formação: attr('string'),
    descrição: attr('string'),
    nivel: attr('string'),
    estado: attr('string')

});









// defaultValue: function() { return new Date(); }