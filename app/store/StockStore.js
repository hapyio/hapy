//http://hapy.io/jsonHisto.php?jour=2014-02-25&restaurant=Argout



Ext.define('Hapy.store.StockStore', {
    extend: 'Ext.data.Store',
    xtype: 'stockstore',
    requires: [
        'Ext.data.proxy.Rest',
        'Ext.data.JsonP'
    ],
    config: {
        model: 'Hapy.model.Stock',
        storeId: 'stockstore',
        autoload : true,
        proxy: {
            type:'ajax',
            url:'http://hapy.io/jsonStocks.php',
            reader: {
                type:'json',
                rootProperty: 'stocks'

            },
            callback: function( data ) { console.log(data); }

        }
    }
});