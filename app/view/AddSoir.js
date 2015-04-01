
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





Ext.define('Hapy.view.AddSoir', {
    extend: 'Ext.Container',
    alias : 'widget.addviewsoir',

    config: {
        title : 'Saisir',
        id : 'AddSoir',
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
                autoCapitalize: true,
                name : 'restaurant'

            },
            {
                xtype :'label',
                style: 'font-weight:bold;text-align:center;display:block;',
                html : 'Soir'

            },
            {
                xtype: 'fieldset',
                items: [{
                    xtype: 'textfield',
                    id : 'ChiffresSoir',
                    label: 'Chiffre : ',
                    style : "font-size:14px;",
                    margin : 10
                }, {
                    xtype: 'selectfield',
                    id : 'RemarqueSoir',
                    label: 'Remarque :',
                    autoSelect : false,
                    placeHolder : 'Choisissez...',
                    usePicker: 'auto',
                    options: opts,
                    margin : 10
                }, {

                    xtype: 'selectfield',
                    id : 'MeteoSoir',
                    label: 'Météo :',
                    autoSelect : false,
                    placeHolder : 'Choisissez...',
                    usePicker: 'auto',
                    options: optsmeteo,
                    margin : 10


                },
                    {

                        xtype: 'textfield',
                        id : 'RemarqueUSoir',
                        label: 'Urgence :',
                        placeHolder : 'Optionnel',

                        name : 'RemarqueU',
                        margin : 10
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


                        Chiffre = Ext.getCmp('ChiffresSoir').getValue();
                        Remarque = Ext.getCmp('RemarqueSoir').getValue();
                        Meteo = Ext.getCmp('MeteoSoir').getValue();
                        RemarqueU = Ext.getCmp('RemarqueUSoir').getValue();
                        var displayU = RemarqueU;
                        if(RemarqueU != "")

                        {

                            displayU =  " - " + RemarqueU;
                        }

                        console.log(Chiffre);
                        if(Chiffre ==  "" | Remarque == null | Meteo == null )
                        {

                            Ext.Msg.alert('Hop !', 'Veuillez compléter tous les champs obligatoires');

                        }

                        else {
                            Ext.Msg.confirm('Envoyer ?', Chiffre + '€ - ' + Remarque + ' ' + displayU + ' - ' + Meteo, function (id, value) {
                                if (id === 'yes') {
                                    Ext.getStore('sendAdd').getProxy().setExtraParams({
                                        'id_restaurant' : Ext.getStore('SessionStore').getAt(0).data.id_restaurant,
                                        'restaurant' : Ext.getStore('SessionStore').getAt(0).data.restaurant,
                                        'day' : today,
                                        'service' : 'soir',
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