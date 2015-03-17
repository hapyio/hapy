//http://hapy.io/json.php?jour=2014-02-25&restaurant=Argout&service=midi

var m_number = new Array("01", "02", "03",
    "04", "05", "06", "07", "08", "09",
    "10", "11", "12");


Ext.define('MyApp.view.Reports', {
    extend: 'Ext.navigation.View',
    alias: 'widget.reportsview',
    config: {
        id: 'nvViewReports',
        items: [

            {
                xtype: 'panel',
                title: 'Rapport',
                id: 'ViewReports1',
                items: [
                    {
                        margin:'40',
                        xtype: 'datepickerfield',
                        dateFormat :'d/m/Y',
                        label: 'Date',
                        id : 'ReportsDatePicker',
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


                                    var date_picked = value.getFullYear() + "-" + m_number[value.getMonth()]  + "-" + value.getDate();


                                    var task = Ext.create('Ext.util.DelayedTask', function () {

                                        Ext.getStore('reportStore').getProxy().setExtraParams({
                                            'jour': date_picked,
                                            'somme' : 1
                                        });
                                        Ext.getStore('reportStore').load();
                                        Ext.getCmp('reportsList').setStore(Ext.getStore('reportStore'));


                                    });

                                    task.delay(500);
                                }
                            }
                        }

                    },

                    {

                        height :400,
                        id : 'reportsList',
                        docked : 'bottom',
                        xtype:'list',
                        itemTpl:'{name_restaurant} - {sales}€',
                        title:'Tests'

                    }



                ]
            }
        ]
    }
});

