
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





Ext.define('MyApp.view.AddMidi', {
    extend: 'Ext.Container',
    alias : 'widget.addviewmidi',

    config: {
        title : 'Saisir',
        id : 'AddMidi',
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
                html : 'Midi'///nom du restaurant auquel le directeur est associé

            },
            {
                xtype: 'fieldset',
                items: [{
                    xtype: 'textfield',
                    id : 'ChiffresMidi',
                    label: 'Chiffre : ',
                    margin : 10
                }, {
                    xtype: 'selectfield',
                    id : 'RemarqueMidi',
                    label: 'Remarque',
                    autoSelect : false,
                    placeHolder : 'Choississez...',
                    usePicker: false,
                    options: opts,
                    margin : 10
                }, {

                    xtype: 'selectfield',
                    id : 'MeteoMidi',
                    label: 'Météo',
                    autoSelect : false,
                    placeHolder : 'Choississez...',
                    usePicker: false,
                    options: optsmeteo,
                    margin : 10


                },
                    {

                        xtype: 'textfield',
                        id : 'RemarqueUMidi',
                        label: 'Remarque urgente',
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


                        Chiffre = Ext.getCmp('ChiffresMidi').getValue();
                        Remarque = Ext.getCmp('RemarqueMidi').getValue();
                        Meteo = Ext.getCmp('MeteoMidi').getValue();
                        RemarqueU = Ext.getCmp('RemarqueUMidi').getValue();


                        Ext.Msg.alert('Selection : ', Ext.String.format('{0} {1} {2} {3}', Chiffre, Remarque, Meteo, RemarqueU));
                    }
                }]
            }
        ]

    }
});