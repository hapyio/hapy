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
                    completed: 'false',
                    title: 'Pains à hamburger',
                    description: '100'
                },
                {
                    completed: 'true',
                    title: 'Sauce tomate',
                    description: '100'
                },
                {
                    completed: 'false',
                    title: 'Fromage',
                    description: '100'
                },
                {
                    completed: 'false',
                    title: 'Viande hachée',
                    description: '100'
                },
                {
                    completed: 'false',
                    title: 'Salade',
                    description: '100'
                },
                {
                    completed: 'false',
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

