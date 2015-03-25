var yearN1 = new Date().getFullYear() - 1;

var opts = [

    {
        text: 'Argout',
        value: 'Argout'
    }, {
        text: 'Beaumarchais',
        value: 'Beaumarchais'
    }, {
        text: 'R?publique',
        value: 'Republique'
    }, {
        text: 'M?nilmontant',
        value: 'Menilmontant'
    }];

var m_number = new Array("01", "02", "03",
    "04", "05", "06", "07", "08", "09",
    "10", "11", "12");



var weekday = new Array(7);
weekday[0]=  "Dim.";
weekday[1] = "Lun.";
weekday[2] = "Mar.";
weekday[3] = "Mer.";
weekday[4] = "Jeu.";
weekday[5] = "Ven.";
weekday[6] = "Sam.";





Ext.define('MyApp.view.Previsions', {
    extend: 'Ext.Container',
    alias : 'widget.previsionsview',

    config: {

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Previsions'
            },
            {
                xtype: 'image',
                src: './resources/icons/BlendBurgerHautDePage.png',
                mode: 'image',
                margin: 10
            },
            {
                xtype: 'selectfield',
                id: 'restpick',
                label: 'Restaurant',
                //usePicker: false,
                autoSelect : false,
                placeHolder : 'Choississez...',
                options: opts,
                margin: 10,
                //style : 'width:100%;margin-left:auto;'
            },

            {
                xtype: 'container',
                style: "margin-top:30px;",
                layout: 'hbox',
                //scrollable: 'vertical',

                items: [

                    {
                        layout: 'vbox',
                        style: 'width:25%',
                        items: [{
                            html: "Jour",
                            style: 'font-weight:bold;text-align:center;display:block;'


                        },
                            {
                                xtype: 'label',
                                name: 'J',
                                style: 'font-weight:bold;text-align:center;display:block;'
                            },

                            {
                                xtype: 'label',
                                name: 'J+1',
                                style: 'font-weight:bold;text-align:center;display:block;'
                            },
                            {
                                xtype: 'label',
                                name: 'J+2',
                                style: 'font-weight:bold;text-align:center;display:block;'
                            },

                            {
                                xtype: 'label',
                                name: 'J+3',
                                style: 'font-weight:bold;text-align:center;display:block;'
                            },
                            {
                                xtype: 'label',
                                name: 'J+4',
                                style: 'font-weight:bold;text-align:center;display:block;'
                            },
                            {
                                xtype: 'label',
                                name: 'J+5',
                                style: 'font-weight:bold;text-align:center;display:block;'
                            }
                        ]
                    },

                    {
                        layout: 'vbox',
                        style: 'width:25%',
                        items: [{

                            html: "CA" + " " + yearN1,
                            style: 'font-weight:bold;text-align:center;display:block;'
                        },
                            {
                                xtype: 'label',
                                name: 'CA_J',
                                style: 'font-weight:bold;text-align:center;display:block;'

                            },

                            {
                                xtype: 'label',
                                name: 'CA_J+1',
                                style: 'font-weight:bold;text-align:center;display:block;'
                            },
                            {
                                xtype: 'label',
                                name: 'CA_J+2',
                                style: 'font-weight:bold;text-align:center;display:block;'
                            },

                            {
                                xtype: 'label',
                                name: 'CA_J+3',
                                style: 'font-weight:bold;text-align:center;display:block;'

                            },
                            {
                                xtype: 'label',
                                name: 'CA_J+4',
                                style: 'font-weight:bold;text-align:center;display:block;'

                            },
                            {
                                xtype: 'label',
                                name: 'CA_J+5',
                                style: 'font-weight:bold;text-align:center;display:block;'

                            }

                        ]
                    },
                    {
                        layout: 'vbox',
                        style: 'width:25%',
                        items: [{
                            html: "Meteo"+ " " + yearN1,
                            style: 'font-weight:bold;text-align:center;display:block;'


                        },
                            {
                                xtype: 'label',
                                name: 'MeteoN1_J',
                                style: 'font-weight:bold;text-align:center;display:block;'

                            },

                            {
                                xtype: 'label',
                                name: 'MeteoN1_J+1',
                                style: 'font-weight:bold;text-align:center;display:block;'


                            },
                            {
                                xtype: 'label',
                                name: 'MeteoN1_J+2',
                                style: 'font-weight:bold;text-align:center;display:block;'
                            },

                            {
                                xtype: 'label',
                                name: 'MeteoN1_J+3',
                                style: 'font-weight:bold;text-align:center;display:block;'

                            },

                            {
                                xtype: 'label',
                                name: 'MeteoN1_J+4',
                                style: 'font-weight:bold;text-align:center;display:block;'

                            },

                            {
                                xtype: 'label',
                                name: 'MeteoN1_J+5',
                                style: 'font-weight:bold;text-align:center;display:block;'

                            }

                        ]
                    },

                    {
                        layout: 'vbox',
                        style: 'width:25%',
                        items: [{
                            html: "Meteo pr?vue",
                            style: 'font-weight:bold;text-align:center;display:block;'


                        },
                            {
                                xtype: 'label',
                                name: 'Meteo_J',
                                style: 'font-weight:bold;text-align:center;display:block;'

                            },

                            {
                                xtype: 'label',
                                name: 'Meteo_J+1',
                                style: 'font-weight:bold;text-align:center;display:block;'


                            },
                            {
                                xtype: 'label',
                                name: 'Meteo_J+2',
                                style: 'font-weight:bold;text-align:center;display:block;'
                            },

                            {
                                xtype: 'label',
                                name: 'Meteo_J+3',
                                style: 'font-weight:bold;text-align:center;display:block;'

                            },

                            {
                                xtype: 'label',
                                name: 'Meteo_J+4',
                                style: 'font-weight:bold;text-align:center;display:block;'

                            },

                            {
                                xtype: 'label',
                                name: 'Meteo_J+5',
                                style: 'font-weight:bold;text-align:center;display:block;'

                            }

                        ]
                    }

                ]

            }
        ]
    },

    updateWithRecord: function(restaurant) {



        /*  labeldate = this.down('label[name="date"]');
         labelrestaurant = this.down('label[name="restaurant"]');


         labeldate.setHtml(day);
         labelrestaurant.setHtml(rest_name);
         */
        var chargement = 2;
        storeCA = Ext.getStore('previsionsstore');
        store =  Ext.getStore('apimeteoStore');

        date = new Date();
        var date_picked =   date.getFullYear() - 1 + "-" + m_number[date.getMonth()]  + "-" + date.getDate();


        storeCA.getProxy().setExtraParams({
            'jour': date_picked,
            'restaurant' : restaurant
        });


        store.load();
        storeCA.load();


        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Chargement...'
        });

        var J =  this.down('label[name="J"]');
        var J1 =   this.down('label[name="J+1"]');
        var J2 =  this.down('label[name="J+2"]');
        var J3 =   this.down('label[name="J+3"]');
        var J4 = this.down('label[name="J+4"]');
        var J5 =   this.down('label[name="J+5"]');


        var date = new Date();
        J.setHtml(weekday[date.getDay()] + " " + date.getDate() + "/" + m_number[date.getMonth()]);
        date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        J1.setHtml(weekday[date.getDay()] + " " + date.getDate() + "/" + m_number[date.getMonth()]);
        date = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);
        J2.setHtml(weekday[date.getDay()] + " " + date.getDate() + "/" + m_number[date.getMonth()]);
        date = new Date(new Date().getTime() + 72 * 60 * 60 * 1000);
        J3.setHtml(weekday[date.getDay()] + " " + date.getDate() + "/" + m_number[date.getMonth()]);
        date = new Date(new Date().getTime() + 96 * 60 * 60 * 1000);
        J4.setHtml(weekday[date.getDay()] + " " + date.getDate() + "/" + m_number[date.getMonth()]);
        date = new Date(new Date().getTime() + 120 * 60 * 60 * 1000);
        J5.setHtml(weekday[date.getDay()] + " " + date.getDate() + "/" + m_number[date.getMonth()]);



        var labMeteoJ =  this.down('label[name="Meteo_J"]');
        var labMeteoJ1 =   this.down('label[name="Meteo_J+1"]');
        var labMeteoJ2 =  this.down('label[name="Meteo_J+2"]');
        var labMeteoJ3 =   this.down('label[name="Meteo_J+3"]');
        var labMeteoJ4 = this.down('label[name="Meteo_J+4"]');
        var labMeteoJ5 =   this.down('label[name="Meteo_J+5"]');


        var labMeteoN1J =  this.down('label[name="MeteoN1_J"]');
        var labMeteoN1J1 =   this.down('label[name="MeteoN1_J+1"]');
        var labMeteoN1J2 =  this.down('label[name="MeteoN1_J+2"]');
        var labMeteoN1J3 =   this.down('label[name="MeteoN1_J+3"]');
        var labMeteoN1J4 = this.down('label[name="MeteoN1_J+4"]');
        var labMeteoN1J5 =   this.down('label[name="MeteoN1_J+5"]');




        var labCAJ =  this.down('label[name="CA_J"]');
        var labCAJ1 =   this.down('label[name="CA_J+1"]');
        var labCAJ2 =  this.down('label[name="CA_J+2"]');
        var labCAJ3 =   this.down('label[name="CA_J+3"]');
        var labCAJ4 = this.down('label[name="CA_J+4"]');
        var labCAJ5 =   this.down('label[name="CA_J+5"]');






        //J1.setHtml(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));


        // var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        // var n = weekday[currentDate.getDay()];
        //alert(n);
        //J.setHtml((new Date().getTime()).getDate());
        //J1.setHtml(day);

        /*
         var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
         var day = currentDate.getDate()
         var month = currentDate.getMonth() + 1
         var year = currentDate.getFullYear()*/




        /*var meteo_soir =  this.down('label[name="meteo_soir"]');
         var remarque_urgente_soir =  this.down('label[name="remarque_urgente_soir"]');*/



        store.on('load', function() {

            ///http://api.openweathermap.org/data/2.5/history/city?id=2988507&type=hour&start=1426088041&end=1426523793
            //alert (Math.floor(new Date(2014, 2, 11)/1000));

            chargement = chargement - 1;

            if (chargement == 0)
            {Ext.Viewport.setMasked(false);}


            //{id: 804, main: "Clouds", description: "Couvert", icon: "04d"}
            meteoJ = Ext.getStore('apimeteoStore').getAt(0).get('list')[0].weather[0];
            meteoJ1 = Ext.getStore('apimeteoStore').getAt(0).get('list')[1].weather[0];
            meteoJ2 = Ext.getStore('apimeteoStore').getAt(0).get('list')[2].weather[0];
            meteoJ3 = Ext.getStore('apimeteoStore').getAt(0).get('list')[3].weather[0];
            meteoJ4 = Ext.getStore('apimeteoStore').getAt(0).get('list')[4].weather[0];
            meteoJ5 = Ext.getStore('apimeteoStore').getAt(0).get('list')[5].weather[0];


            labMeteoJ.setHtml(meteoJ.description);
            labMeteoJ1.setHtml(meteoJ1.description);
            labMeteoJ2.setHtml(meteoJ2.description);
            labMeteoJ3.setHtml(meteoJ3.description);
            labMeteoJ4.setHtml(meteoJ4.description);
            labMeteoJ5.setHtml(meteoJ5.description);




        });
        storeCA.on ('load', function() {

            //alert("Loaded");
            chargement = chargement - 1;

            if (chargement == 0)
            {Ext.Viewport.setMasked(false);}

            var CAJ = storeCA.getAt(0).get('sales');
            var CAJ1 = storeCA.getAt(1).get('sales');
            var CAJ2 = storeCA.getAt(2).get('sales');
            var CAJ3 = storeCA.getAt(3).get('sales');
            var CAJ4 = storeCA.getAt(4).get('sales');
            var CAJ5 = storeCA.getAt(5).get('sales');



            meteoN1J = storeCA.getAt(0).get('weather');
            meteoN1J1 = storeCA.getAt(1).get('weather');
            meteoN1J2 = storeCA.getAt(2).get('weather');
            meteoN1J3 = storeCA.getAt(3).get('weather');
            meteoN1J4 = storeCA.getAt(4).get('weather');
            meteoN1J5  =storeCA.getAt(5).get('weather');


            labCAJ.setHtml(CAJ + " €");
            labCAJ1.setHtml(CAJ1 + " €");
            labCAJ2.setHtml(CAJ2+ " €");
            labCAJ3.setHtml(CAJ3+ " €");
            labCAJ4.setHtml(CAJ4+ " €");
            labCAJ5.setHtml(CAJ5+ " €");



            labMeteoN1J.setHtml(meteoN1J);
            labMeteoN1J1.setHtml(meteoN1J1);
            labMeteoN1J2.setHtml(meteoN1J2);
            labMeteoN1J3.setHtml(meteoN1J3);
            labMeteoN1J4.setHtml(meteoN1J4);
            labMeteoN1J5.setHtml(meteoN1J5);


        });
    }

});