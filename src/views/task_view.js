import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Task from '../models/task.js';

var TaskView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }, // render
  events: {
    'click button.alert': "deleteTask"
  },
  deleteTask: function(e) {
    console.log("Delete Task");
    this.model.destroy();
  }
});

export default TaskView;
