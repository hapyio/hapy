Ext.define('MyApp.store.TaskStore', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.Task'
    ],

    config: {
        autoLoad: true,
        autoSync: true,
        model: 'MyApp.model.Task',
        storeId: 'TaskStore',

            data: [
                {
                    completed: '0',
                    title: 'Pains à hamburger',
                    description: '100'
                },
                {
                    completed: '0',
                    title: 'Sauce tomate',
                    description: '100'
                },
                {
                    completed: '0',
                    title: 'Fromage',
                    description: '100'
                },
                {
                    completed: '0',
                    title: 'Viande hachée',
                    description: '100'
                },
                {
                    completed: '0',
                    title: 'Salade',
                    description: '100'
                },
                {
                    completed: '0',
                    title: 'Pickles',
                    description: '100'
                }
            ]

        /*proxy: {
            type: 'localstorage',
            id: 'senchatasks'
        },*/
    }
});

