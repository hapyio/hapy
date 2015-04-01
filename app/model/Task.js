Ext.define('Hapy.model.Task', {
    extend: 'Ext.data.Model',

    config: {
        fields: [{
            name: 'date',
            type: 'string'
        },

            {
                name: 'completed',
                type: 'boolean'
            },

            {
                name: 'title',
                type: 'string'
            },

            {
                name: 'quantity',
                type: 'string'
            }
        ],
        idProperty: 'id'
    }
});

