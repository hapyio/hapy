
var opts = [{
    text: 'RAS',
    value: 'RAS'
}, {
    text: 'Manifestations',
    value: 'Manifestations'
}, {
    text: 'Soldes',
    value: 'Soldes'
}, {
    text: 'Vacances scolaires Paris',
    value: 'Vacances_intern'
},{
    text: 'Veille jour férié',
    value: 'veille_ferie'
},{
    text: 'Pont',
    value: 'Pont'
}
];

var listRest = [{
    text: 'Argout',
    value: 'argout'
}, {
    text: 'Beaumarchais',
    value: 'beaumarchais'
}, {
    text: 'Beaurepaire',
    value: 'beaurepaire'
}
];

var optsmeteo = [{
    text: 'Ensoleillé',
    value: 'Ensoleillé'
}, {
    text: 'Nuageux',
    value: 'Nuageux'
}, {
    text: 'Pluies',
    value: 'Pluies'
}, {
    text: 'Neiges',
    value: 'Neiges'
}];


var m_number = new Array("01", "02", "03",
    "04", "05", "06", "07", "08", "09",
    "10", "11", "12");


var date = new Date();
var today = date.getFullYear() + "-" + m_number[date.getMonth()]  + "-" + date.getDate();





Ext.define('Hapy.view.AddMidiPerm1', {
    extend: 'Ext.Container',
    alias : 'widget.addviewmidiperm1',

    config: {
        title : 'Saisir',
        id : 'AddMidiPerm1',
        items: [
            {
                xtype : 'image',
                src : './resources/icons/BlendBurgerHautDePage.png',
                mode : 'image',
                margin : 10
            },
            {
                xtype :'label',
                style: 'font-weight:bold;text-align:center;display:block;',
                html : Ext.Date.format(dt, Ext.Date.patterns.Date)

            },
            {
                xtype :'label',
                style: 'font-weight:bold;text-align:center;display:block;',
                html : 'Midi'

            },
            {
                xtype: 'fieldset',
                items: [


                    {
                        xtype: 'selectfield',
                        id : 'SelectRestaurantPerm1',
                        label: 'Resto :',
                        autoSelect : false,
                        placeHolder : 'Choississez...',
                        usePicker: 'auto',
                        options: listRest,
                        margin : 5
                    },

                    {
                    xtype: 'textfield',
                    id : 'ChiffresMidiPerm1',
                    label: 'Chiffre : ',
                    style : "font-size:14px;",
                    margin : 5
                }, {
                    xtype: 'selectfield',
                    id : 'RemarqueMidiPerm1',
                    label: 'Remarque :',
                    autoSelect : false,
                    placeHolder : 'Choisissez...',
                    usePicker: 'auto',
                    options: opts,
                    margin : 5
                }, {

                    xtype: 'selectfield',
                    id : 'MeteoMidiPerm1',
                    label: 'Météo :',
                    autoSelect : false,
                    placeHolder : 'Choisissez...',
                    usePicker: 'auto',
                    options: optsmeteo,
                    margin : 5


                },
                    {

                        xtype: 'textfield',
                        id : 'RemarqueUMidiPerm1',
                        label: 'Urgence :',
                        placeHolder : 'Optionnel',

                        name : 'RemarqueU',
                        margin : 5
                    }]
            }, {
                xtype: 'toolbar',
                layout: {
                    pack: 'center'
                },
                ui: 'plain',
                items: [{
                    xtype: 'button',
                    text: 'Envoyer',
                    ui: 'confirm',
                    handler: function (btn, evt) {


                        Chiffre = Ext.getCmp('ChiffresMidiPerm1').getValue();
                        Remarque = Ext.getCmp('RemarqueMidiPerm1').getValue();
                        Meteo = Ext.getCmp('MeteoMidiPerm1').getValue();
                        RemarqueU = Ext.getCmp('RemarqueUMidiPerm1').getValue();
                        Restaurant = Ext.getCmp('SelectRestaurantPerm1Soir').getValue();
                        var displayU = RemarqueU;
                        if(RemarqueU != "")

                        {

                            displayU =  " - " + RemarqueU;
                        }

                        console.log(Chiffre);
                        if(Chiffre ==  "" | Remarque == null | Meteo == null | Restaurant == null )
                        {

                            Ext.Msg.alert('Hop !', 'Veuillez compléter tous les champs obligatoires');

                        }

                        else {
                            Ext.Msg.confirm('Envoyer ?', Chiffre + '€ - ' + Remarque + ' ' + displayU + ' - ' + Meteo, function (id, value) {
                                if (id === 'yes') {
                                    Ext.getStore('sendAdd').getProxy().setExtraParams({
                                        'id_restaurant' : Restaurant.slice(-1),
                                        'restaurant' : Restaurant.substring(0, Restaurant.length-1),
                                        'day' : today,
                                        'service' : 'midi',
                                        'sales': Chiffre,
                                        'note': Remarque,
                                        'warning_note': RemarqueU,
                                        'weather': Meteo,
                                        'token' :  Ext.getStore('SessionStore').getAt(0).data.sessionId

                                    });


                                    Ext.getStore('sendAdd').load();
                                }
                            }, this);


                        }

                    }
                }]
            }
        ]

    },
    updateWithRecord: function(restaurant) {

        var labrestaurant = this.down('label[name="restaurant"]');

        labrestaurant.setHtml(restaurant);

    }
});