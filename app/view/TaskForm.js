/**
 * Created by Ludivine on 19/02/2015.
 */

Ext.define('MyApp.view.TaskForm', {
    extend: 'Ext.form.Panel',
   // alias :'widget.TaskForm',


    config: {
        id: 'taskForm',
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            title: 'Détails de la tâche',
            ui: 'light',
            items: [{
                xtype: 'button',
                text: 'Précédent',
                ui: 'back',
                action: 'cancel'
            },
                {
                    xtype: 'spacer'
                },
                {
                    xtype: 'button',
                    text: 'Sauvegarder',
                    action: 'saveTask'
                }]
        },
            {
                xtype: 'fieldset',
                id: 'mainFieldset',
                items: [
                    {
                        xtype: 'textfield',
                        id: 'titleField',
                        label: 'Tâche',
                        name: 'title',
                        autoCapitalize: true,
                        readOnly: 'true'
                    },
                    {
                        xtype: 'textfield',
                        id: 'descriptionField',
                        label: 'Description',
                        name: 'description',
                        autoCapitalize: true,
                        readOnly: 'true'
                    },
                    {
                        xtype: 'togglefield',
                        id: 'completedField',
                        label: 'Ok',
                        name: 'completed'
                    }]
            }
        ]
    }
});

