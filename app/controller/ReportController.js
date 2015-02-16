Ext.define('MyApp.controller.ReportController', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            //'Add',

        ],

        refs: {
          //  bMidi: '#bMidi'
        },

        control: {
          //  bMidi: {
          //      tap: 'onMidi'
         //   },
        }
    },


    onMidi: function(button, e, options) {

      //  button.up('navigationview').push({
     //       xtype: 'addview2'
       // });
    },

    onSoir: function(button, e, options) {

        button.up('navigationview').push({
            xtype: 'addview2'
        });
    }
});
