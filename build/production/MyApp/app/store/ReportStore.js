/*Ext.define('MyApp.store.ReportStore', {
    extend: 'Ext.data.Store',
    xtype: 'ReportStore',

    requires: [
        'Ext.data.proxy.Rest'
    ],
    config: {

        model: {config :  {
            fields: ['Jour', 'Service', 'Ca', 'Remarque', 'Remarque Urgence', 'Meteo', 'Nom Restaurant']
        }},
        storeId: 'reportStore',
        autoLoad: true,
        proxy: {
            type:'rest',
            url:'http://hapy.io/json.php?jour=2014-02-25&restaurant=Argout&service=midi',
            reader: {
                type:'json'
            }
        }
    }
});*/


