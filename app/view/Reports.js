//http://hapy.io/json.php?jour=2014-02-25&restaurant=Argout&service=midi



Ext.define('MyApp.view.Reports', {
    extend: 'Ext.Container',
    alias: 'widget.reportsview',
    config: {
        layout : {
            type  : 'vbox',
            align : 'stretch'
        },
        items: [
            {
                margin:'40',
                xtype: 'datepickerfield',
                dateFormat :'d/m/Y',
                label: 'Date',
                name: 'rapportdate',
                value: new Date(),
                picker: {

                    slotOrder : ['day', 'month', 'year'],
                    yearFrom : new Date().getFullYear()-1,

                    listeners: {
                        show: function(component, eOpts) {
                            var date = this.getValue();
                        },
                        cancel: function(picker, eOpts) {

                        },
                        change: function(picker, value) {
                            // alert(value);

                            var task = Ext.create('Ext.util.DelayedTask', function () {
                                Ext.getStore('reportStore').load();
                                Ext.getCmp('Test').setStore(Ext.getStore('reportStore'));


                            });

                            task.delay(500);
                        }
                    }
                }

            },

            {

                height :400,
                id : 'Test',
                docked : 'bottom',
                xtype:'list',
                itemTpl:'{name_restaurant} - {sales}€',
                title:'Tests'

            }

        ]

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

