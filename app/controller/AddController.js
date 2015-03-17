

Ext.define('MyApp.controller.AddController', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            'Add',
            'AddMidi',
            'AddSoir'
        ],

        refs: {
            bMidi: '#bMidi',
            bSoir: '#bSoir'
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

            xtype: 'addviewmidi'

        });
    },

    onSoir: function(button, e, options) {


        button.up('navigationview').push({
         xtype: 'addviewsoir'
         });
    }
});
