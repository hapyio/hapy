Ext.define('MyApp.model.Stock', {
    extend: 'Ext.data.Model',
    config :  {
        fields: [
            { name: 'name_ingredient', type: 'string' },
            { name: 'quantite', type: 'int' }
        ]


    }
});

