Ext.define('MyApp.store.ReportStore', {
    extend: 'Ext.data.Store',
    xtype: 'reportstore',
    requires: [
        'Ext.data.proxy.Rest',
        'Ext.data.JsonP'
    ],
    config: {
        model: 'MyApp.model.report',
        storeId: 'reportStore',
        proxy: {
            type:'ajax',
            url:'http://hapy.io/json.php',
            reader: {
                type:'json',
                rootProperty: 'reports'

            },
            callback: function( data ) { console.log(data); }

        }
    }
});