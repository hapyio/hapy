Ext.define('MyApp.model.Node', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'version', type: 'int' },
            { name: 'user_id', type: 'int' },
            { name: 'tstamp', type: 'date' },
            { name: 'changeset_id', type: 'int' },
            { name: 'tags', type: 'string' },
            { name: 'geom', type: 'string'}
        ],

        idProperty: 'id'
    }
});