Ext.define('Hapy.model.APImeteo', {
    extend: 'Ext.data.Model',
    config :  {
        fields: ['cod', 'message', 'city', 'cnt', 'list']
    }
});

