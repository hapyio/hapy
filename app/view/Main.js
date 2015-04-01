var window_add =
{
    iconCls: 'add',
    title: 'Add',
    layout : 'fit',
    styleHtmlContent: true,
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
    layout : 'fit',

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
    layout : 'fit',

    styleHtmlContent: true,
    items : [
        {
            xtype :'previsionsview'
        }

    ]


};


var window_todolist =
{
    title : 'ToDo',
    iconCls: 'list',
    layout : 'fit',

    styleHtmlContent: true,
    items: [
        {
          xtype : 'TaskList'
        }
    ]

};


var window_stock =
{
    title : 'Stocks',
    layout : 'fit',
    iconCls: 'cart',

    styleHtmlContent: true,
    items: [
        {
            xtype : 'stocksview'
        }
    ]

};

var window_compte =

{
    title : 'Compte',
    layout : 'fit',
    iconCls: 'user',

    styleHtmlContent: true,
    items: [
        {
            xtype : 'compteview'
        }
    ]

};

Ext.define('Hapy.view.Main', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.mainview',
    xtype: 'main',

    config:
    {

        id : 'mainbar',
        itemId : 'mainbar',
        tabBarPosition: 'bottom',
        fullscreen : true,
        scrollable : {
            direction     : 'vertical',
            directionLock : true
        }
       // items: [window_add ,window_report,window_prevision ,window_todolist ,window_stock, window_compte]

    }

});
