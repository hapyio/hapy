Ext.define('Hapy.controller.PrevisionsController', {
    extend: 'Ext.app.Controller',
    config: {

        views : [
            'Previsions'
        ],


        refs: {
            previsionsView : 'previsionsview',
            restpicker : '#restpick'


        },
        control: {

            restpicker : {
                change: 'changePick'
            }
        }
    },

    changePick: function(field, value) {

        var Previsions = this.getPrevisionsView();
        Previsions.updateWithRecord(value);

    }

    /* showTask: function(list, index, target, task, e, eOpts) {

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
     }
     });*/



});