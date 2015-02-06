Ext.define('MyApp.controller.AddController', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            'Add'
        ],

        refs: {
             bMidi: 'navigationview button[action="midi"]',
             bSoir: 'navigationview button[action="soir"]',
             nview: '#nvView'

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

     onView1: function(button, e, options) {
       //  alert("blabla2");
     button.up('navigationview').push({

     xtype: 'View2',
     title: 'View2'
     });
    // Ext.getCmp('NavBar').hide();


     },
     onBack: function() {
      //Works
     //alert(Ext.getCmp('nvView').getItems().getCount());
     ///Affichage de la barre uniquement sur la 1ere page de la section
     //if(Ext.getCmp('nvView').getItems().getCount() == 4)
    // {Ext.getCmp('NavBar').show();}
     },


     onView2: function(button, e, options) {
         alert("blabla3");
     button.up('navigationview').push({
     xtype: 'View3',
     title: 'View3'
     });
     }
});