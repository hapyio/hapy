var window_add =
{
    iconCls: 'add',
    title: 'Add',
    layout : 'fit',

    items : [
        {
            xtype :'addview'
        }

    ]

};

var window_report =
{

    title : 'Reports',
    iconCls: 'search',

    styleHtmlContent: true,
    items: [
        {
            xtype : 'reportsview'
        }
    ]

};


var window_prevision =
{
    title : 'Prevision',
    iconCls: 'time',

    styleHtmlContent: true,
    items: [
        {
            xtype: 'image',
            html: '<img style="height: 71px; width: 100px;" src="./resources/icons/BlendBurgerHautDePage.png" />'
        },
        {
            xtype :'panel',
            html : 'A construire.'
        }
    ]

};


var window_todolist =
{
    title : 'ToDo',
    iconCls: 'list',

    styleHtmlContent: true,
    items: [
        {
            xtype: 'image',
            html: '<img style="height: 71px; width: 100px;" src="./resources/icons/BlendBurgerHautDePage.png" />'
        },
        {
            xtype :'panel',
            html : 'A construire.'
        }
    ]

};


var window_stock =
{
    title : 'Stocks',
    iconCls: '',

    styleHtmlContent: true,
    items: [
        {
            xtype: 'image',
            html: '<img style="height: 71px; width: 100px;" src="./resources/icons/BlendBurgerHautDePage.png" />'
        },
        {
            xtype :'panel',
            html : 'A construire.'
        }
    ]

};

Ext.define('MyApp.view.Main', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.mainview',
    xtype: 'main',

    config:
    {
        id : 'mainbar',
        tabBarPosition: 'bottom',
        fullscreen : true,
        items: [window_add ,window_report,window_prevision ,window_todolist ,window_stock]

    }

});
