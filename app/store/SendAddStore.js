Ext.define('MyApp.store.SendAddStore', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.AddModel'
    ],

    config: {

        model: 'MyApp.model.AddModel',
        storeId: 'sendAdd',
        proxy: {
            type: 'ajax',
            actionMethods: 'POST',
            url: 'http://hapy.io/post.php',
            reader: {
                type: 'json'
            }
        },
        listeners: [
            {
                fn: 'onArraystoreBeforeLoad',
                event: 'beforeload'
            }
        ]
    }
});