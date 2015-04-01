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





Ext.define('Hapy.controller.MainController', {
    extend: 'Ext.app.Controller',
    config: {

        views : [
            'Main'
        ],


        refs: {
            mainView : 'mainview'


        },
        control: {

            "#mainbar": {
                initialize: 'onTabpanelInitialize'
            }
        }
    },

    onTabpanelInitialize: function(component, options) {

        console.log(Ext.getStore('SessionStore').getAt(0).data.permission);

        ///Compte all access
        if(Ext.getStore('SessionStore').getAt(0).data.permission==1) {
            var DynamicPanel = [window_add, window_report, window_prevision, window_stock, window_compte];
        }

        ///Compte juste access un restaurant
         if(Ext.getStore('SessionStore').getAt(0).data.permission==2) {
          var DynamicPanel = [window_add, window_report, window_prevision, window_stock, window_compte];
        }

        ///Compte cuisinier
        if(Ext.getStore('SessionStore').getAt(0).data.permission==3) {
            var DynamicPanel = [window_todolist, window_compte];
        }

        component.add(DynamicPanel);
        Ext.getCmp('Compte').updateWithRecord(Ext.getStore('SessionStore').getAt(0).data.sessionId, Ext.getStore('SessionStore').getAt(0).data.restaurant);

    }



});