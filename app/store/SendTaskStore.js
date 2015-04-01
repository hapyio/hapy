Ext.define('Hapy.store.SendTaskStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Hapy.model.Task'
    ],

    config: {

        model: 'Hapy.model.Task',
        storeId: 'SendTaskStore',

        proxy: {
            type: 'ajax',
            actionMethods: 'POST',
            url: 'http://hapy.io/SENENENENEND.php',
            reader: {
                type: 'json'
            }
        }



    }
});

