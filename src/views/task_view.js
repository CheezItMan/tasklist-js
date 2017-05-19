import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Task from '../models/task.js';

var TaskView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    // Add classes for styling
     this.$el.addClass("task-item");
     this.$el.addClass("column");
     this.$el.addClass("column-block");

  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  }, // render
  events: {
    'click button.alert': "deleteTask",
    "click button.success": "toggleComplete"
  },
  deleteTask: function(e) {
    this.model.destroy();
  },
  toggleComplete: function(e) {
    this.model.toggleComplete();
    this.render();
  }
});

export default TaskView;
