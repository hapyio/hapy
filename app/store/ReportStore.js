Ext.define('Hapy.store.ReportStore', {
    extend: 'Ext.data.Store',
    xtype: 'reportstore',
    requires: [
        'Ext.data.proxy.Rest',
        'Ext.data.JsonP'
    ],
    config: {
        model: 'Hapy.model.report',
        storeId: 'reportStore',
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