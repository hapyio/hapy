

Ext.define('Hapy.controller.AddController', {
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

            if(Ext.getStore('SessionStore').getAt(0).data.permission==1) {

                button.up('navigationview').push({

                    xtype: 'addviewmidiperm1'

                });

            }
            else {

                button.up('navigationview').push({

                    xtype: 'addviewmidi'

                });

                Ext.getCmp('AddMidi').updateWithRecord(Ext.getStore('SessionStore').getAt(0).data.restaurant);
            }
    },

    onSoir: function(button, e, options) {


        if(Ext.getStore('SessionStore').getAt(0).data.permission==1) {

            button.up('navigationview').push({

                xtype: 'addviewsoirperm1'

            });

        }
        else {
            button.up('navigationview').push({
                xtype: 'addviewsoir'
            });
            Ext.getCmp('AddSoir').updateWithRecord(Ext.getStore('SessionStore').getAt(0).data.restaurant);
        }
    }
});
