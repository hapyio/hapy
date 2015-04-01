/**
 * Created by Ludivine on 30/03/2015.
 */

Ext.define('Hapy.view.Compte', {
        extend: 'Ext.Container',
        alias: 'widget.compteview',
        id : 'Compte',

        config: {
            refs: {
                loginView: 'loginview',
                mainView: 'mainview'
            },

            items: [
                {
                    xtype: 'titlebar',
                    docked: 'top',
                    title: 'Mon compte'
                },
                {
                    xtype: 'image',
                    src: './resources/icons/BlendBurgerHautDePage.png',
                    mode: 'image',
                    margin: 10
                },
                {
                    xtype: 'fieldset',
                    id: 'mainFieldset',
                    items: [
                        {
                            xtype: 'textfield',
                            id: 'utilisateurField',
                            label: 'Utilisateur',
                            name: 'utilisateur',
                            autoCapitalize: true,
                            readOnly: 'true'
                        },
                        {
                            xtype: 'textfield',
                            id: 'restauField',
                            label: 'Restaurant',
                            name: 'restaurant',
                            autoCapitalize: true,
                            readOnly: 'true'
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    layout: {
                        pack: 'center'
                    },
                    ui: 'plain',
                    items: [{
                        xtype: 'button',
                        text: 'Déconnexion',
                        ui: 'decline',

                        handler: function (btn, evt) {
                            Ext.Msg.confirm('Déconnexion', 'Confirmer la déconnexion ?', function(btn){
                                if(btn === 'yes'){
                                    Ext.getStore('SessionStore').getProxy().clear();
                                    window.location.href = window.location.href;

                                    Ext.Viewport.add([
                                        { xtype: 'loginview' },
                                        { xtype: 'mainview' }]);
                                    if (Ext.os.is.iOS && Ext.os.version.major >= 7) {
                                        Ext.select(".x-toolbar").applyStyles("height: 62px; padding-top: 15px;")};
                                    //Ext.getCmp('mainbar').initialize();

                                }
                            });
                        }

                    }]
                }
            ]
        },
        updateWithRecord: function(user, restaurant) {

            var labUser = this.down('textfield[name="utilisateur"]');
            var labRestaurant = this.down('textfield[name="restaurant"]');

            labUser.setValue(user);
            labRestaurant.setValue(restaurant);


        }

    }


);

