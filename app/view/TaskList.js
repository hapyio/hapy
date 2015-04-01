Ext.Date.patterns = {Date: "j/m/Y"};

Ext.define('Hapy.view.TaskList', {
        extend: 'Ext.Container',
        alias : 'widget.TaskList',

        requires: [
            'Hapy.store.TaskStore'
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
                    store: Ext.create('Hapy.store.TaskStore'),
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
                    style : 'margin:1%;',
                    handler: function (btn, evt) {

                        var TaskStore =  Ext.getCmp('taskList').getStore();
                        var done = 0;

                        for(var i = 0; i< TaskStore.getCount(); i++)

                        {

                            if (TaskStore.getAt(i).data.completed == true)
                            {
                                done ++;
                            }

                        }

                        if(done ==TaskStore.getCount())
                        {

                            for(var j = 0; j< TaskStore.getCount(); j++) {

                                if (TaskStore.getAt(j).data.completed == true) {


                                    var record = TaskStore.getAt(j);
                                    Ext.getStore('SendTaskStore').add(record);

                                //  Ext.getStore('SendTaskStore').  Ext.getCmp('taskList').getStore()
                                }


                            }
                            Ext.getStore('SendTaskStore').load();
                        }

                        else {
                            Ext.Msg.alert("Hé !", "Vous n'avez pas fini toutes vos tâches !");

                        }


                    }


                }
            ]
        }}
);