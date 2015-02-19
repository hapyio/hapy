console.log("TA MERE");

Ext.define('MyApp.store.NodeStore', {
    extend: 'Ext.data.Store',
    xtype: 'nodestore',
    requires: [
        'Ext.data.proxy.Rest'
    ],
    config: {
        model: 'MyApp.model.Node',
        storeId: 'nodeStore',
        autoLoad: true,
        proxy: {
            type:'rest',
            url:'http://hapy.io/test.php',
            reader: {
                type:'json',
                rootProperty: 'nodes'
            },
            noCache: false,
            limitParam: false,
            headers: {
                'Accept' : 'application/json'
            }
        }
    }
});


//var store = Ext.getStore('nodeStore');


console.log("TA MERE");
//console.log(store.getAt(0));
