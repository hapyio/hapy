Ext.application({
    name: 'Hapy',

    requires: [
        'Ext.MessageBox'
    ],

    models : [
        'report',
        'Task',
        'APImeteo',
        'Stock',
        'AddModel',
        'Session'
    ],

    stores : [
       'ReportStore',
        'TaskStore',
        'ReportDetailStore',
        'ApiMeteoStore',
        'PrevisionsStore',
        'StockStore',
        'SendAddStore',
        'SessionStore',
        'SendTaskStore'
    ],

    views: [
        'Main',
        'Login',
        'Add',
        'AddMidi',
        'AddSoir',
        'Reports',
        'TaskList',
        'ReportsDetail',
        'Previsions',
        'Stocks',
        'Compte',
        'AddMidiPerm1',
        'AddSoirPerm1'

    ],
    controllers: [
        'LoginController',
        'AddController',
        'TaskController',
        'ReportController',
        'PrevisionsController',
        'MainController'
    ],


    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },


    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();




        ////Vérifier si token
            var sessionInfo = Ext.getStore('SessionStore');
            sessionInfo.sync();

            if(sessionInfo.getAt(0) == null)
            {
                ///Pas connecté

                Ext.Viewport.add([
                    { xtype: 'loginview' }
                   // { xtype: 'mainview' }
                ]);
                if (Ext.os.is.iOS && Ext.os.version.major >= 7) {
                    Ext.select(".x-toolbar").applyStyles("height: 62px; padding-top: 15px;")};
            }
        else {


        Ext.Viewport.add([

            { xtype: 'mainview' }
        ]);
                if (Ext.os.is.iOS && Ext.os.version.major >= 7) {
                    Ext.select(".x-toolbar").applyStyles("height: 62px; padding-top: 15px;")};
            }


    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
