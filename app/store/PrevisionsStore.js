//http://hapy.io/jsonHisto.php?jour=2014-02-25&restaurant=Argout



Ext.define('MyApp.store.PrevisionsStore', {
    extend: 'Ext.data.Store',
    xtype: 'previsionsstore',
    requires: [
        'Ext.data.proxy.Rest',
        'Ext.data.JsonP'
    ],
    config: {
        model: 'MyApp.model.report',
        storeId: 'previsionsstore',
        proxy: {
            type:'ajax',
            url:'http://hapy.io/jsonHisto.php',
            reader: {
                type:'json',
                rootProperty: 'reports'

            },
            callback: function( data ) { console.log(data); }

        }
    }
});