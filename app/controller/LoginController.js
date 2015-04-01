Ext.define('Hapy.controller.LoginController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            loginView: 'loginview',
            mainView: 'mainview'
        },
        control: {
            loginView: {
                signInCommand: 'onSignInCommand'
            },
            mainMenuView: {
                onSignOffCommand: 'onSignOffCommand'
            }
        }
    },

    // Session token

    sessionToken: null,

    // Transitions

    getFadeTransition: function () {
        return { type: 'fade' };
    },
    getSlideLeftTransition: function () {
        return { type: 'fade', direction: 'left' };
    },

    getSlideRightTransition: function () {
        return { type: 'fade', direction: 'right' };
    },

    onSignInCommand: function (view, username, password) {

        console.log('Username: ' + username + '\n' + 'Password: ' + password);

        var me = this,
            loginView = me.getLoginView();

        if (username.length === 0 || password.length === 0) {

            loginView.showSignInFailedMessage('Please enter your username and password.');
            return;
        }

        loginView.setMasked({
            xtype: 'loadmask',
            message: 'Signing In...'
        });

        Ext.Ajax.request({
            url: 'http://hapy.io/auth.php',
            method: 'post',
            params: {
                email: username,
                password: password
            },
            success: function (response) {

                var loginResponse = Ext.JSON.decode(response.responseText);

                if (loginResponse.connection[0].success === "1") {


                    var sessionInfo = Ext.getStore('SessionStore');
                     sessionInfo.removeAll();
                     sessionInfo.sync();
                     var newRecord = new Hapy.model.Session({
                     sessionId: loginResponse.connection[0].token,
                         permission: loginResponse.connection[0].permission,
                         restaurant : loginResponse.connection[0].restaurant,
                         id_restaurant : loginResponse.connection[0].id_restaurant
                    });


                     sessionInfo.add(newRecord);
                     sessionInfo.sync();



                    me.signInSuccess();
                } else {
                    me.signInFailure("Identifiants érronés");
                }
            },
            failure: function (response) {


               me.sessionToken = null;
              me.signInFailure('Login failed. Please try again later.');
            }
        });
    },

    signInSuccess: function () {

        Ext.Viewport.add([
            { xtype: 'mainview' }]);
        if (Ext.os.is.iOS && Ext.os.version.major >= 7) {
            Ext.select(".x-toolbar").applyStyles("height: 62px; padding-top: 15px;")};
        console.log('Signed in.');
        var loginView = this.getLoginView();
        mainView = this.getMainView();
        loginView.setMasked(false);


        Ext.Viewport.animateActiveItem(mainView, this.getFadeTransition());
    },

    signInFailure: function (message) {
        var loginView = this.getLoginView();
        loginView.showSignInFailedMessage(message);
        loginView.setMasked(false);
    },

    onSignOffCommand: function () {

        var me = this;

        Ext.Ajax.request({
            url: '../../services/logoff.ashx',
            method: 'post',
            params: {
                sessionToken: me.sessionToken
            },
            success: function (response) {

                // TODO: You need to handle this condition.
            },
            failure: function (response) {

                // TODO: You need to handle this condition.
            }
        });

        Ext.Viewport.animateActiveItem(this.getLoginView(), this.getFadeTransition());
    }


});