Ext.define('MyApp.store.ReportDetailStore', {
    extend: 'Ext.data.Store',
    xtype: 'reportdetailstore',
    requires: [
        'Ext.data.proxy.Rest',
        'Ext.data.JsonP'
    ],
    config: {
        model: 'MyApp.model.report',
        storeId: 'reportDetailStore',
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