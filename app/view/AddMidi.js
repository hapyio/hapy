
var opts = [{
    text: 'Choix 1',
    value: 'Choix1'
}, {
    text: 'Choix 2',
    value: 'Choix2'
}, {
    text: 'Choix 3',
    value: 'Choix3'
}, {
    text: 'Choix 4',
    value: 'Choix4'
}];


var optsmeteo = [{
    text: 'Meteo 1',
    value: 'Meteo1'
}, {
    text: 'Meteo 2',
    value: 'Meteo2'
}, {
    text: 'Meteo 3',
    value: 'Meteo3'
}, {
    text: 'Meteo 4',
    value: 'Meteo4'
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
                    usePicker: false,
                    options: opts,
                    margin : 10
                }, {

                    xtype: 'selectfield',
                    id : 'MeteoMidi',
                    label: 'Météo',
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