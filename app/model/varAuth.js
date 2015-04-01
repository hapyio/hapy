Ext.define('Hapy.model.varAuth', {
    extend: 'Ext.data.Model',

    config: {
        fields: [{
            name: 'token',
            type: 'string'
        },

            {
                name: 'perm',
                type: 'int'
            },

            {
                name: 'name_restaurant',
                type: 'string'
            },

            {
                name: 'id_restaurant',
                type: 'string'
            }
        ]
    }
});

