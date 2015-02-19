
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
                    id : 'RemarqueSoir',
                    usePicker: false,
                    options: opts,
                    margin : 10
                }, {

                    xtype: 'selectfield',
                    label: 'Météo',
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