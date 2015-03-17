//http://hapy.io/jsonHisto.php?jour=2014-02-25&restaurant=Argout



Ext.define('MyApp.store.StockStore', {
    extend: 'Ext.data.Store',
    xtype: 'stockstore',
    requires: [
        'Ext.data.proxy.Rest',
        'Ext.data.JsonP'
    ],
    config: {
        model: 'MyApp.model.Stock',
        storeId: 'stockstore',
        proxy: {
            type:'ajax',
           // url:'http://hapy.io/jsonHisto.php',
            reader: {
                type:'json',
                rootProperty: 'stocks'

            },
            callback: function( data ) { console.log(data); }

        }
    }
});