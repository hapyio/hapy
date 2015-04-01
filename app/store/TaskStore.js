Ext.define('Hapy.store.TaskStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Hapy.model.Task'
    ],

    config: {
        autoLoad: true,
        autoSync: true,
        model: 'Hapy.model.Task',
        storeId: 'TaskStore',
        proxy: {
            type:'ajax',
            actionMethods: 'POST',
            url:'http://hapy.io/GEDATASK.JSON',
            reader: {
                type:'json',
                rootProperty: 'reports'

            }

        }
    }
});

