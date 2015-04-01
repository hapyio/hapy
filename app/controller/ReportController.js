Ext.define('Hapy.controller.ReportController', {
        extend: 'Ext.app.Controller',
        config: {

            views : [
                'Reports',
                'ReportsDetail'
            ],


            refs: {
                reportsdetailView : 'reportsdetailview',
                reportsList: '#reportsList'


            },
            control: {

                reportsList: {
                    itemtap: 'showDetails'
                }
            }
        },

        showDetails: function(list, index, target, task, e, eOpts) {





           // var ReportsDetail = Ext.getCmp('reportsdetail');



            value = task.get('day');
            var date_picked = value.getFullYear() + "-" + m_number[value.getMonth()]  + "-" + value.getDate();

            //var record = Ext.create('Hapy.model.report', { name_restaurant: task.get('name_restaurant'), day : date_picked });




            Ext.getCmp('nvViewReports').push({xtype:'reportsdetailview'});
            var ReportsDetail = this.getReportsdetailView();
            ReportsDetail.updateWithRecord(value, task.get('name_restaurant'), date_picked);

         setTimeout(function () {
         list.deselect(index);
         }, 500);
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