


Ext.define('MyApp.view.ReportsDetail', {
    extend: 'Ext.Container',
    alias : 'widget.reportsdetailview',

    config: {

        items: [
            {
                xtype : 'image',
                src : './resources/icons/BlendBurgerHautDePage.png',
                mode : 'image',
                margin : 10
            },
            {
                xtype :'label',
                name : 'date',
               style: 'font-weight:bold;text-align:center;display:block;'

            },
            {
                xtype :'label',
                name : 'restaurant',
                style: 'font-weight:bold;text-align:center;display:block;'


            },
            {
                xtype :'container',
                style : "margin-top:30px;",
                layout: 'hbox',

                items : [
                    {
                        layout : 'vbox',
                        style : 'width:50%',
                        items : [{
                            html : "Service midi",
                            style: 'font-weight:bold;text-align:center;display:block;'


                            },
                            {
                                xtype : 'label',
                                name : 'ca_midi',
                                style: 'font-weight:bold;text-align:center;display:block;'

                            },

                            {
                                xtype : 'label',
                                name : 'remarque_midi',
                                style: 'font-weight:bold;text-align:center;display:block;'

                            },
                            {
                                xtype : 'label',
                                name : 'meteo_midi',
                                style: 'font-weight:bold;text-align:center;display:block;'
                            },

                            {
                                xtype : 'label',
                                name : 'remarque_urgente_midi',
                                style: 'font-weight:bold;text-align:center;display:block;'

                            }

                        ]
                    },
                    {
                        layout : 'vbox',
                        style : 'width:50%;',
                        items : [{
                            html : "Service soir",
                            style: 'font-weight:bold;text-align:center;display:block;'


                        },
                            {
                                xtype : 'label',
                                name : 'ca_soir',
                                style: 'font-weight:bold;text-align:center;display:block;'

                            },

                            {
                                xtype : 'label',
                                name : 'remarque_soir',
                                style: 'font-weight:bold;text-align:center;display:block;'

                            },
                            {
                                xtype : 'label',
                                name : 'meteo_soir',
                                style: 'font-weight:bold;text-align:center;display:block;'
                            },

                            {
                                xtype : 'label',
                                name : 'remarque_urgente_soir',
                                style: 'font-weight:bold;text-align:center;display:block;'

                            }

                        ]
                    }
                ]


            }
        ]

    },


    updateWithRecord: function(day, rest_name, date_picked) {


        labeldate = this.down('label[name="date"]');
        labelrestaurant = this.down('label[name="restaurant"]');


            labeldate.setHtml(day);
        labelrestaurant.setHtml(rest_name);


        store =  Ext.getStore('reportDetailStore');




           store.getProxy().setExtraParams({
                'jour': date_picked,
                'restaurant': rest_name
            });


        store.load();

        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Chargement...'
        });

        var ca_midi =  this.down('label[name="ca_midi"]');
        var remarque_midi =   this.down('label[name="remarque_midi"]');
        var meteo_midi =  this.down('label[name="meteo_midi"]');
        var remarque_urgente_midi =   this.down('label[name="remarque_urgente_midi"]');
        var ca_soir = this.down('label[name="ca_soir"]');
        var remarque_soir =   this.down('label[name="remarque_soir"]');
        var meteo_soir =  this.down('label[name="meteo_soir"]');
        var remarque_urgente_soir =  this.down('label[name="remarque_urgente_soir"]');



        store.on('load', function() {
            Ext.Viewport.setMasked(false);
            var servicemidi = Ext.getStore('reportDetailStore').getAt(0);
            var servicesoir = Ext.getStore('reportDetailStore').getAt(1);

            ca_midi.setHtml(servicemidi.get('sales') + " €");
            remarque_midi.setHtml(servicemidi.get('note'));
            meteo_midi.setHtml(servicemidi.get('weather'));
            remarque_urgente_midi .setHtml(servicemidi.get('warning_note'));
            ca_soir.setHtml(servicesoir.get('sales') + " €");
            remarque_soir.setHtml(servicesoir.get('note'));
            meteo_soir.setHtml(servicesoir.get('weather'));
            remarque_urgente_soir.setHtml(servicesoir.get('warning_note'));
        });
    }

});