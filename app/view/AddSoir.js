
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





Ext.define('MyApp.view.AddSoir', {
    extend: 'Ext.Container',
    alias : 'widget.addviewsoir',

    config: {
        title : 'Saisir',
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
                html : 'Argout' ///nom du restaurant auquel le directeur est associé

            },
            {
                xtype :'label',
                style: 'font-weight:bold;text-align:center;display:block;',
                html : 'Soir'///nom du restaurant auquel le directeur est associé

            },
            {
                xtype: 'fieldset',
                items: [{
                    xtype: 'textfield',
                    id : 'ChiffresSoir',
                    label: 'Chiffre : ',
                    margin : 10
                }, {
                    xtype: 'selectfield',
                    label: 'Remarque',
                    autoSelect : false,
                    placeHolder : 'Choississez...',
                    id : 'RemarqueSoir',
                    usePicker: false,
                    options: opts,
                    margin : 10
                }, {

                    xtype: 'selectfield',
                    label: 'Météo',
                    autoSelect : false,
                    placeHolder : 'Choississez...',
                    id : 'MeteoSoir',
                    usePicker: false,
                    options: optsmeteo,
                    margin : 10


                },
                    {

                        xtype: 'textfield',
                        label: 'Remarque urgente',
                        id : 'RemarqueUSoir',
                        margin : 10
                    }]
            }, {
                xtype: 'toolbar',
                layout: {
                    pack: 'center'
                }, // layout
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


                        Ext.Msg.alert('Selection : ', Ext.String.format('{0} {1} {2} {3}', Chiffre, Remarque, Meteo, RemarqueU));
                    }
                }]
            }
        ]

    }
});