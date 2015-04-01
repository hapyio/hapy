Ext.define('Hapy.store.ReportDetailStore', {
    extend: 'Ext.data.Store',
    xtype: 'reportdetailstore',
    requires: [
        'Ext.data.proxy.Rest',
        'Ext.data.JsonP'
    ],
    config: {
        model: 'Hapy.model.report',
        storeId: 'reportDetailStore',
        proxy: {
            type:'ajax',
            actionMethods: 'POST',
            url:'http://hapy.io/json.php',
            reader: {
                type:'json',
                rootProperty: 'reports'

            },
            callback: function( data ) { console.log(data); }

        }
    }
});