Ext.define('MyApp.view.Add2', {
    extend: 'Ext.form.Panel',
    alias: 'widget.Add2',

    config: {

        fullscreen: true,
        html: 'Add',
        xtype : 'Add2',

        styleHtmlContent: true,
        items: [
            {
                xtype: 'button',
                docked: 'bottom',
                margin: 10,
                text: 'Suivant'
            }
        ]

    }
});

var dt = new Date();

Ext.Date.patterns = {
    Date: "n/j/Y"
};




Ext.define('MyApp.view.Add', {
    extend: 'Ext.navigation.View',
    alias: 'widget.addview',
    id: 'add',
    iconCls: 'add',
    title: 'Add',
    xtype :'addpan',


    config: {
        id: 'nvView',
        items: [
            {
                xtype: 'formpanel',
                html: 'Add',
                id: 'View1'
            },
            {
                xtype: 'button',
                docked: 'bottom',
                action:'soir',
               // id : 'bsoir',
                margin: 10,
                height : 150,
                text: 'Service soir'
            },
            {
                xtype: 'button',
                docked: 'bottom',
                action:'midi',
               // id : 'bMidi',
                margin: 10,
                height : 150,
                text: 'Service midi'
            },
            {
                xtype :'label',
                docked : 'bottom',
                style: 'font-weight:bold;text-align:center;display:block;',
                html : Ext.Date.format(dt, Ext.Date.patterns.Date)

            },
            {
                xtype: 'image',
                html: '<img style="height: 71px; width: 100px;" src="./resources/icons/BlendBurgerHautDePage.png" />',
                margin : 10,
                docked:'bottom'
            }
        ]
    }
});