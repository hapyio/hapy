Ext.define('MyApp.model.report', {
    extend: 'Ext.data.Model',
    config :  {
        fields: [
            { name: 'name_restaurant', type: 'string' },
            { name: 'day', type: 'date' },
            { name: 'service', type: 'string' },
            { name: 'sales', type: 'int' },
            { name: 'note', type: 'string' },
            { name: 'warning_note', type: 'string' },
            { name: 'weather', type: 'string' }
        ]


    }
});

