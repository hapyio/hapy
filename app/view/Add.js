var dt = new Date();

Ext.Date.patterns = {
    Date: "j/m/Y"
};





Ext.define('Hapy.view.Add', {
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
                title: 'Ajouter',
                id: 'View1',
                items: [
                    {

                        xtype : 'image',
                        src : './resources/icons/BlendBurgerHautDePage.png',
                        mode : 'image',
                        margin : 10

                    },
                    {

                        xtype : 'label',
                        style: 'font-weight:bold;text-align:center;display:block;',
                        name : 'restaurant'

                    },
                    {
                        xtype :'label',

                        style: 'font-weight:bold;text-align:center;display:block;',
                        html : Ext.Date.format(dt, Ext.Date.patterns.Date)

                    },
                    {
                        xtype: 'button',

                        id :'bMidi',
                        //margin: 10,
                        style : 'height:30%;margin:1%;',
                        text: 'Service midi'
                    },
                    {
                        xtype: 'button',

                        action:'soir',
                        id : 'bSoir',
                        style : 'height:30%;margin:1%;',
                        text: 'Service soir'
                    }



                ]
            }
        ]
    }


    });




