Ext.define('MyApp.view.Add2', {
    extend: 'Ext.Container',
    alias : 'widget.addview2',

    config: {
        title : 'Saisissez les informations',
        items: [
            {
                xtype: 'image',
                html: '<img style="height: 71px; width: 100px;" src="./resources/icons/BlendBurgerHautDePage.png" />'
            },
            {
                xtype :'panel',
                html : "Page Saisie d'un rapport"
            }
        ]

    }
});