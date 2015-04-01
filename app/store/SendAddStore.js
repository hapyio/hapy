Ext.define('Hapy.store.SendAddStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Hapy.model.AddModel'
    ],

    config: {

        model: 'Hapy.model.AddModel',
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