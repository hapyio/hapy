Ext.define('Hapy.store.SessionStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Hapy.model.Session',
        autoLoad: true,

        proxy: {
            type: 'localstorage',
            id  : 'SessionStore'
        }
    }
});