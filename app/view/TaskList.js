Ext.Date.patterns = {Date: "j/m/Y"};

Ext.define('MyApp.view.TaskList', {
    extend: 'Ext.dataview.List',
       alias : 'widget.TaskList',


    requires: [
        'MyApp.store.TaskStore'
    ],

    config: {

        id: 'taskList',
        displayField: 'title',
        store: Ext.create('MyApp.store.TaskStore'),
        itemTpl: '<div class="task completed_{completed}">{title}</div>',
        items: [
            {
            xtype: 'toolbar',
            title: 'Liste des aliments à préparer',
            docked: 'top',
            ui: 'light'
            }
        ]
    }}
);


