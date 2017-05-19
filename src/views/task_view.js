import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Task from '../models/task.js';

var TaskView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.$el.addClass("task-item");
    this.$el.addClass("column");
    this.$el.addClass("column-block");
    var that = this;
    this.model.on("change", function() {
      that.render();
    });
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

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
  }
});

export default TaskView;
