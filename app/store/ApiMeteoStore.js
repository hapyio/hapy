Ext.define('MyApp.store.ApiMeteoStore', {
    extend: 'Ext.data.Store',
    xtype: 'apimeteostore',
    requires: [

        'Ext.data.JsonP'
    ],
    config: {
        model: 'MyApp.model.APImeteo',
        storeId : 'apimeteoStore',
        //autoLoad: true,
        proxy: {
            type: 'jsonp',
            url : 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Paris,fr&mode=json&units=metric&cnt=6&lang=fr',
            reader: {
                type: 'json'
            }
        }
    }
});