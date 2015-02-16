//http://hapy.io/json.php?jour=2014-02-25&restaurant=Argout&service=midi





Ext.define('MyApp.view.Reports', {
    extend: 'Ext.Container',
    alias: 'widget.reportsview',
    config: {
        items: [{
            xtype: 'fieldset',
            items: [{
                xtype: 'datepickerfield',
                label: 'Birthday',
                name: 'birthday',
                value: new Date()
            }]
        }]
    }
});


/*Ext.define('MyApp.view.Reports', {


    extend: 'Ext.form.Panel',
    alias: 'widget.reportsview',
    layout : 'fit',
    requires: ['MyApp.store.ReportStore'],

    config: {
        itemTpl: '{Jour},{Service}, {Ca},{Remarque}, {Remarque Urgence},{Meteo}, {Nom Restaurant}',
        store: 'ReportStore'
    }
});*/

/*  { name: 'jour', type: 'date' },
 { name: 'service', type: 'string' },
 { name: 'ca', type: 'int' },
 { name: 'remarque', type: 'string' },
 { name: 'remarque_urgente', type: 'string' },
 { name: 'meteo', type: 'string' },
 { name: 'nom_restaurant', type: 'string' }*/







/*
var list = Ext.create("Ext.List", {
    fullscreen: true,
    id : 'list',
    store: myStore,
    itemTpl: "{jour}, {service}, {ca}, {remarque}, {remarque_urgente}, {meteo}, {nom_restaurant}"
});
*/
/*Ext.define('MyApp.view.Reports', {
    extend: 'Ext.Container',
    alias: 'widget.reportsview',
    config: {
       // items: [list]
    }
});*/

