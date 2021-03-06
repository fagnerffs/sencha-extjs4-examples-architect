/*
 * File: app/controller/ForumThread.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Sencha.controller.ForumThread', {
    extend: 'Ext.app.Controller',

    models: [
        'ForumThread'
    ],
    stores: [
        'ForumThreads'
    ],
    views: [
        'ForumThreadGrid'
    ],

    refs: [
        {
            ref: 'gridView',
            selector: 'forumthreadgrid dataview',
            xtype: 'dataview'
        }
    ],

    onButtonToggle: function(button, pressed, options) {
        var preview = this.getGridView().getPlugin('preview');
        preview.toggleExpanded(pressed);
    },

    init: function(application) {
        this.getForumThreadsStore().loadPage(1);

        this.control({
            "button[action=handlePreview]": {
                toggle: this.onButtonToggle
            }
        });
    }

});
