Ext.Date.patterns = {Date: "j/m/Y"};

Ext.define('MyApp.view.TaskList', {
        extend: 'Ext.Container',
        alias : 'widget.TaskList',

        requires: [
            'MyApp.store.TaskStore'
        ],

        config: {
            items: [
                {
                    xtype: 'list',
                    docked: 'top',
                    id: 'taskList',
                    style: "height:80%;",
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
                        '</tpl>'),
                    items: [
                        {
                            xtype: 'toolbar',
                            title: 'Liste des aliments à préparer'
                        }
                    ]
                },
                {
                    xtype: 'button',
                    text: 'Terminer',
                    docked: 'bottom',
                    style : 'margin:1%;'
                }
            ]
        }}
);