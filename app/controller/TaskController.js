Ext.define('MyApp.controller.TaskController', {
    extend: 'Ext.app.Controller',

    config: {
        id: 'taskController',
        refs: {

            taskList: '#taskList'

        },
        control: {

            taskList: {
                itemtap: 'showTask',
                disclose: 'changeDoneStatus'
            }
        }
    },

    launch: function () {
    },

    changeDoneStatus: function (list, task, target, index, e, eOpts) {
        var done = task.get('completed');
        task.set('completed', !done);
    },

    /*showTask: function(list, index, target, task, e, eOpts) {


        // This is bug #w354352 in Sencha, to be done
        if (e.getTarget('.x-list-disclosure')) {
            return;
        }

        this.getTaskForm().setRecord(task);
        this.showForm();

        setTimeout(function () {
            list.deselect(index);
        }, 500);
    },*/

    showTask: function(list, index, target, task, e, eOpts) {

        var done = task.get('completed');

        task.set('completed', !done);
        setTimeout(function () {
            list.deselect(index);
        }, 0);


    },

    cancel: function(button, e, eOpts) {
        this.showList();
    }

   /* saveTask: function (button, e, eOpts) {
        var store = this.getTaskList().getStore();
        var task = this.getTaskForm().getRecord();
        this.getTaskForm().updateRecord(task);

        // Is it a new object?
        if (null === store.findRecord("id", task.get('id'))) {
            store.add(task);
        }

        this.showList();
    },

    showForm: function() {
        Ext.Viewport.getLayout().setAnimation({
            type: 'slide',
            direction: 'left'
        });
        Ext.Viewport.setActiveItem(this.getTaskForm());
    },

    showList: function() {
        Ext.Viewport.getLayout().setAnimation({
            type: 'slide',
            direction: 'right'
        });
        Ext.Viewport.setActiveItem(this.getTaskList());
    }*/
});

