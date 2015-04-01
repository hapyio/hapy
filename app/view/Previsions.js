var yearN1 = new Date().getFullYear() - 1;

var opts = [
    {
        text: 'Argout',
        value: 'Argout'
    }, {
        text: 'Beaumarchais',
        value: 'Beaumarchais'
    }, {
        text: 'République',
        value: 'Republique'
    }, {
        text: 'Ménilmontant',
        value: 'Menilmontant'
    }];

var m_number = new Array("01", "02", "03",
    "04", "05", "06", "07", "08", "09",
    "10", "11", "12");

var weekday = new Array(7);
weekday[0] = "Dim.";
weekday[1] = "Lun.";
weekday[2] = "Mar.";
weekday[3] = "Mer.";
weekday[4] = "Jeu.";
weekday[5] = "Ven.";
weekday[6] = "Sam.";


function afficherImage(meteo, mId)
{
    if(meteo.id == 802)
    {
        mId.setSrc("./resources/icons/cloudy.png");
    }
    else if(meteo.id == 803 || meteo.id == 804)
    {
        mId.setSrc("./resources/icons/hazy.png");
    }
    else if(meteo.id == 800)
    {
        mId.setSrc("./resources/icons/sunny.png");
    }
    else if(meteo.id == 801)
    {
        mId.setSrc("./resources/icons/mostlysunny.png");
    }
    else if(meteo.id >= 200 && meteo.id <= 232)
    {
        mId.setSrc("./resources/icons/tstorms.png");
    }
    else if(meteo.id >= 500 && meteo.id <= 502 || meteo.id == 901)
    {
        mId.setSrc("./resources/icons/rain.png");
    }
    else if(meteo.id >= 300 && meteo.id <= 321)
    {
        mId.setSrc("./resources/icons/sleet.png");
    }
    else if(meteo.id == 600)
    {
        mId.setSrc("./resources/icons/snow.png");
    }
    else
    {
        mId.setSrc("./resources/icons/BlendBurgerHautDePage.png");
    }
}


Ext.define('Hapy.view.Previsions', {
    extend: 'Ext.Container',
    alias: 'widget.previsionsview',

    config: {

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Previsions'
            },
            {
                xtype: 'selectfield',
                id: 'restpick',
                label: 'Restaurant',
                //usePicker: false,
                autoSelect: false,
                placeHolder: 'Choisissez...',
                options: opts,
                margin: 10
            },
            {
                xtype: 'container',
                style: "margin-top:30px;",
                layout: 'vbox',

                items: [
                    {
                        xtype: 'container',
                        layout: 'hbox',

                        items: [
                            {
                                xtype: 'container',
                                layout: 'vbox',
                                style: 'width:50%;',
                                items: [
                                    {
                                        xtype: 'label',
                                        name: 'J',
                                        style: 'font-weight:bold;text-align:center;display:block;'
                                    },
                                    {
                                        xtype: 'label',
                                        name: 'CAN1_J',
                                        style: 'font-weight:bold;text-align:center;display:block;'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'vbox',
                                style: 'width:50%',
                                items: [
                                    {
                                        xtype: 'image',
                                        name: 'meteo_J',
                                        id: 'meteo_J',
                                        mode: 'image',
                                        style:'background-repeat: no-repeat;background-size: auto 100%;background-position: center;'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'container',
                                layout: 'vbox',
                                style: 'width:50%;',
                                items: [
                                    {
                                        xtype: 'label',
                                        name: 'J1',
                                        style: 'font-weight:bold;text-align:center;display:block;'
                                    },
                                    {
                                        xtype: 'label',
                                        name: 'CAN1_J1',
                                        style: 'font-weight:bold;text-align:center;display:block;'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'vbox',
                                style: 'width:50%',
                                items: [
                                    {
                                        xtype: 'image',
                                        name: 'meteo_J1',
                                        id: 'meteo_J1',
                                        mode: 'image',
                                        style:'background-repeat: no-repeat;background-size: auto 100%;background-position: center;'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'container',
                                layout: 'vbox',
                                style: 'width:50%;',
                                items: [
                                    {
                                        xtype: 'label',
                                        name: 'J2',
                                        style: 'font-weight:bold;text-align:center;display:block;'
                                    },
                                    {
                                        xtype: 'label',
                                        name: 'CAN1_J2',
                                        style: 'font-weight:bold;text-align:center;display:block;'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'vbox',
                                style: 'width:50%',
                                items: [
                                    {
                                        xtype: 'image',
                                        name: 'meteo_J2',
                                        id: 'meteo_J2',
                                        mode: 'image',
                                        style:'background-repeat: no-repeat;background-size: auto 100%;background-position: center;'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'container',
                                layout: 'vbox',
                                style: 'width:50%;',
                                items: [
                                    {
                                        xtype: 'label',
                                        name: 'J3',
                                        style: 'font-weight:bold;text-align:center;display:block;'
                                    },
                                    {
                                        xtype: 'label',
                                        name: 'CAN1_J3',
                                        style: 'font-weight:bold;text-align:center;display:block;'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'vbox',
                                style: 'width:50%',
                                items: [
                                    {
                                        xtype: 'image',
                                        name: 'meteo_J3',
                                        id: 'meteo_J3',
                                        mode: 'image',
                                        style:'background-repeat: no-repeat;background-size: auto 100%;background-position: center;'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'container',
                                layout: 'vbox',
                                style: 'width:50%;',
                                items: [
                                    {
                                        xtype: 'label',
                                        name: 'J4',
                                        style: 'font-weight:bold;text-align:center;display:block;'
                                    },
                                    {
                                        xtype: 'label',
                                        name: 'CAN1_J4',
                                        style: 'font-weight:bold;text-align:center;display:block;'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'vbox',
                                style: 'width:50%',
                                items: [
                                    {
                                        xtype: 'image',
                                        name: 'meteo_J4',
                                        id: 'meteo_J4',
                                        mode: 'image',
                                        style:'background-repeat: no-repeat;background-size: auto 100%;background-position: center;'
                                    }
                                ]
                            }
                        ]
                    },
                    {

                        xtype: 'container',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'container',
                                layout: 'vbox',
                                style: 'width:50%;',
                                items: [
                                    {
                                        xtype: 'label',
                                        name: 'J5',
                                        style: 'font-weight:bold;text-align:center;display:block;'
                                    },
                                    {
                                        xtype: 'label',
                                        name: 'CAN1_J5',
                                        style: 'font-weight:bold;text-align:center;display:block;'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'vbox',
                                style: 'width:50%',
                                items: [
                                    {
                                        xtype: 'image',
                                        name: 'meteo_J5',
                                        id: 'meteo_J5',
                                        mode: 'image',
                                        style:'background-repeat: no-repeat;background-size: auto 100%;background-position: center;'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },


    updateWithRecord: function (restaurant) {

        /*  labeldate = this.down('label[name="date"]');
         labelrestaurant = this.down('label[name="restaurant"]');


         labeldate.setHtml(day);
         labelrestaurant.setHtml(rest_name);
         */
        var chargement = 2;
        storeCA = Ext.getStore('previsionsstore');
        store = Ext.getStore('apimeteoStore');

        date = new Date();
        var date_picked = date.getFullYear() - 1 + "-" + m_number[date.getMonth()] + "-" + date.getDate();


        storeCA.getProxy().setExtraParams({
            'jour': date_picked,
            'restaurant': restaurant
        });


        store.load();
        storeCA.load();


        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Chargement...'
        });

        var J = this.down('label[name="J"]');
        var J1 = this.down('label[name="J1"]');
        var J2 = this.down('label[name="J2"]');
        var J3 = this.down('label[name="J3"]');
        var J4 = this.down('label[name="J4"]');
        var J5 = this.down('label[name="J5"]');


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

        var labCAN1J = this.down('label[name="CAN1_J"]');
        var labCAN1J1 = this.down('label[name="CAN1_J1"]');
        var labCAN1J2 = this.down('label[name="CAN1_J2"]');
        var labCAN1J3 = this.down('label[name="CAN1_J3"]');
        var labCAN1J4 = this.down('label[name="CAN1_J4"]');
        var labCAN1J5 = this.down('label[name="CAN1_J5"]');
/*
        var labMeteoN1J = this.down('label[name="MeteoN1_J"]');
        var labMeteoN1J1 = this.down('label[name="MeteoN1_J1"]');
        var labMeteoN1J2 = this.down('label[name="MeteoN1_J2"]');
        var labMeteoN1J3 = this.down('label[name="MeteoN1_J3"]');
        var labMeteoN1J4 = this.down('label[name="MeteoN1_J4"]');
        var labMeteoN1J5 = this.down('label[name="MeteoN1_J5"]');

*/


        store.on('load', function () {

            ///http://api.openweathermap.org/data/2.5/history/city?id=2988507&type=hour&start=1426088041&end=1426523793
            //alert (Math.floor(new Date(2014, 2, 11)/1000));

            chargement = chargement - 1;

            if (chargement == 0) {
                Ext.Viewport.setMasked(false);
            }

            //{id: 804, main: "Clouds", description: "Couvert", icon: "04d"}
            meteoJ = Ext.getStore('apimeteoStore').getAt(0).get('list')[0].weather[0];
            meteoJ1 = Ext.getStore('apimeteoStore').getAt(0).get('list')[1].weather[0];
            meteoJ2 = Ext.getStore('apimeteoStore').getAt(0).get('list')[2].weather[0];
            meteoJ3 = Ext.getStore('apimeteoStore').getAt(0).get('list')[3].weather[0];
            meteoJ4 = Ext.getStore('apimeteoStore').getAt(0).get('list')[4].weather[0];
            meteoJ5 = Ext.getStore('apimeteoStore').getAt(0).get('list')[5].weather[0];

            afficherImage(meteoJ, Ext.getCmp('meteo_J'));
            afficherImage(meteoJ1, Ext.getCmp('meteo_J1'));
            afficherImage(meteoJ2, Ext.getCmp('meteo_J2'));
            afficherImage(meteoJ3, Ext.getCmp('meteo_J3'));
            afficherImage(meteoJ4, Ext.getCmp('meteo_J4'));
            afficherImage(meteoJ5, Ext.getCmp('meteo_J5'));

        });


        storeCA.on('load', function () {

            //alert("Loaded");
            chargement = chargement - 1;

            if (chargement == 0) {
                Ext.Viewport.setMasked(false);
            }

            var CAJ = storeCA.getAt(0).get('sales');
            var CAJ1 = storeCA.getAt(1).get('sales');
            var CAJ2 = storeCA.getAt(2).get('sales');
            var CAJ3 = storeCA.getAt(3).get('sales');
            var CAJ4 = storeCA.getAt(4).get('sales');
            var CAJ5 = storeCA.getAt(5).get('sales');
/*
            meteoN1J = storeCA.getAt(0).get('weather');
            meteoN1J1 = storeCA.getAt(1).get('weather');
            meteoN1J2 = storeCA.getAt(2).get('weather');
            meteoN1J3 = storeCA.getAt(3).get('weather');
            meteoN1J4 = storeCA.getAt(4).get('weather');
            meteoN1J5 = storeCA.getAt(5).get('weather');

*/

           /* J.setHtml(weekday[date.getDay()] + " " + date.getDate() + "/" + m_number[date.getMonth()]);
            date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
            J1.setHtml(weekday[date.getDay()] + " " + date.getDate() + "/" + m_number[date.getMonth()]);
            date = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);
            J2.setHtml(weekday[date.getDay()] + " " + date.getDate() + "/" + m_number[date.getMonth()]);
            date = new Date(new Date().getTime() + 72 * 60 * 60 * 1000);
            J3.setHtml(weekday[date.getDay()] + " " + date.getDate() + "/" + m_number[date.getMonth()]);
            date = new Date(new Date().getTime() + 96 * 60 * 60 * 1000);
            J4.setHtml(weekday[date.getDay()] + " " + date.getDate() + "/" + m_number[date.getMonth()]);
            date = new Date(new Date().getTime() + 120 * 60 * 60 * 1000);
            J5.setHtml(weekday[date.getDay()] + " " + date.getDate() + "/" + m_number[date.getMonth()]);*/

            var date = new Date();
            date.setFullYear(date.getFullYear() - 1);
            labCAN1J.setHtml("(" + weekday[date.getDay()] + ") " + yearN1+ " : " + CAJ + " €");
            date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
            date.setFullYear(date.getFullYear() - 1);
            labCAN1J1.setHtml("(" + weekday[date.getDay()] + ") " +yearN1+ " : " + CAJ1 + " €");
            date = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);
            date.setFullYear(date.getFullYear() - 1);
            labCAN1J2.setHtml("(" + weekday[date.getDay()] + ") " +yearN1+ " : " + CAJ2 + " €");
            date = new Date(new Date().getTime() + 72 * 60 * 60 * 1000);
            date.setFullYear(date.getFullYear() - 1);
            labCAN1J3.setHtml("(" + weekday[date.getDay()] + ") " +yearN1+ " : " + CAJ3 + " €");
            date = new Date(new Date().getTime() + 96 * 60 * 60 * 1000);
            date.setFullYear(date.getFullYear() - 1);
            labCAN1J4.setHtml("(" + weekday[date.getDay()] + ") " +yearN1+ " : " + CAJ4 + " €");
            date = new Date(new Date().getTime() + 120 * 60 * 60 * 1000);
            date.setFullYear(date.getFullYear() - 1);
            labCAN1J5.setHtml("(" + weekday[date.getDay()] + ") " +yearN1+ " : " + CAJ5 + " €");
/*
            labMeteoN1J.setHtml(meteoN1J);
            labMeteoN1J1.setHtml(meteoN1J1);
            labMeteoN1J2.setHtml(meteoN1J2);
            labMeteoN1J3.setHtml(meteoN1J3);
            labMeteoN1J4.setHtml(meteoN1J4);
            labMeteoN1J5.setHtml(meteoN1J5);
*/

        });
    }
});