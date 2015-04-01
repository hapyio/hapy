/*   'id_restaurant' : 1,
 'day' : today,
 'service' : 'midi',
 'sales': Chiffre,
 'note': Remarque,
 'warning_note': RemarqueU,
 'weather': Meteo
*/





 Ext.define('Hapy.model.AddModel', {
    extend: 'Ext.data.Model',
    config :  {
        fields: [
            { name: 'id_restaurant', type: 'int' },
            { name : 'restaurant', type : 'string'},
            {  name: 'day', type: 'string'},
            {  name: 'service', type: 'string'},
            {  name: 'sales', type: 'int'},
            {  name: 'note', type: 'string'},
            {  name: 'warning_note', type: 'string'},
            {  name: 'weather', type: 'string'}
        ]


    }
});

