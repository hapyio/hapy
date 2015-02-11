Ext.define('MyApp.controller.AddController', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            'Add',
            'Add2'
        ],

        refs: {
            bMidi: '#bMidi',
            bSoir: '#bSoir',
            Add2View: 'add2view'
        },

        control: {
            bMidi: {
                tap: 'onMidi'
            },
            bSoir: {
                tap: 'onSoir'
            },

            nview: {
                back: 'onBack'
            }


        }
    },


    onMidi: function(button, e, options) {

        button.up('navigationview').push({
            xtype: 'addview2'
        });
    },

    onSoir: function(button, e, options) {

        button.up('navigationview').push({
         xtype: 'addview2'
         });
    }
});
