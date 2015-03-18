
Ext.define('MyApp.view.Stocks', {
    extend: 'Ext.Container',
    alias: 'widget.stocksview',

    config: {

        items: [

            {

                xtype: 'titlebar',
                docked: 'top',
                title: 'Stocks'


            },

                {
                    xtype: 'selectfield',

                    label: 'Restaurant',
                    //usePicker: false,
                    autoSelect : false,
                    placeHolder : 'Choississez...',
                    options: opts,
                    margin: 10,
                    style : 'width:20%;margin-left:auto;',
                    listeners: {
                        show: function(component, eOpts) {
                            var choix = this.getValue();
                        },
                        cancel: function(picker, eOpts) {

                        },
                        change: function(picker, value) {





                            var task = Ext.create('Ext.util.DelayedTask', function () {

                                Ext.getStore('stockstore').getProxy().setExtraParams({
                                    'restaurant': value
                                });
                                Ext.getStore('stockstore').load();
                                Ext.getCmp('stocklist').setStore(Ext.getStore('stockstore'));


                            });

                            task.delay(500);
                        }
                    }
                },
                {

                 height :400,
                 id : 'stocklist',
                 docked : 'bottom',
                 xtype:'list',
                 itemTpl:'{name_ingredient} : {quantite}g'


                }



                ]
            }


});

