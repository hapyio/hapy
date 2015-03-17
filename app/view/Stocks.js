
Ext.define('MyApp.view.Stocks', {
    extend: 'Ext.Container',
    alias: 'widget.stocksview',
    config: {

        items: [

                {
                    xtype: 'selectfield',

                    label: 'Restaurant',
                    //usePicker: false,
                    autoSelect : false,
                    placeHolder : 'Choississez...',
                    options: opts,
                    margin: 10,
                    style : 'width:20%;margin-left:auto;'

                },
                {

                        height :400,
                        id : 'stocklist',
                        docked : 'bottom',
                        xtype:'list',
                        itemTpl:'{ingredient} - {Quantité}'


                }



                ]
            }


});

