var dt = new Date();

Ext.Date.patterns = {
    Date: "n/j/Y"
};





Ext.define('MyApp.view.Add', {
    extend: 'Ext.navigation.View',
    alias: 'widget.addview',
    iconCls: 'add',
    title: 'Add',
id : 'Add',

    config: {
        id: 'nvView',
        items: [

            {
                xtype: 'panel',
                title: 'Ajouter votre rapport',
                id: 'View1',
                items: [
                    {
                        xtype: 'image',
                        html: '<img style="height: 71px; width: 100px;" src="./resources/icons/BlendBurgerHautDePage.png" />',
                        margin : 10,
                        docked:'top'
                    },
                    {
                        xtype :'label',
                        docked : 'top',
                        style: 'font-weight:bold;text-align:center;display:block;',
                        html : Ext.Date.format(dt, Ext.Date.patterns.Date)

                    },
                    {
                        xtype: 'button',
                        docked: 'top',
                        id :'bMidi',
                        margin: 10,
                        height : 150,
                        text: 'Service midi'
                    },
                    {
                        xtype: 'button',
                        docked: 'top',
                        action:'soir',
                        id : 'bSoir',
                        height : 150,
                        text: 'Service soir'
                    }



                ]
            }
        ]
    }
});




