
Ext.define('Hapy.model.Session', {
    extend: 'Ext.data.Model',
    config: {

        identifier: 'uuid',
        fields: [
            'sessionId', 'permission', 'restaurant', 'id_restaurant'
        ]
    }
});