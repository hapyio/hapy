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
        cls:'myList',
        store: Ext.create('MyApp.store.TaskStore'),
        itemTpl: new Ext.XTemplate(
            '<tpl for=".">',
            '<tpl if="completed ==true"">',
            '<div style="color: #038000;">Done : {title}</div>',
            '</tpl>',
            '<tpl if="completed !=true"">',
            '<div  class="">Todo : {title}</div>',
            '</tpl>',
            '</tpl>'
        ),

        items: [
            {
            xtype: 'toolbar',
            title: 'Liste des aliments à préparer',
            docked: 'top'
            }
        ]
    }}
);


