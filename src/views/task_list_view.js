import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import TaskView from '../views/task_view.js';
import Task from '../models/task.js';


var TaskListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
  },
  render: function() {
    // Clear the unordered list
    this.$('.todo-items').empty();
    // Iterate through the list rendering each Task
    var that = this;
    this.model.each(function(task) {
      // Create a new TaskView with the model & template
      var taskView = new TaskView({
        model: task,
        template: that.template,
        classes: that.classes,
        tagName: 'li'
      });
      // Then render the TaskView
      // And append the resulting HTML to the DOM.
      that.$('.todo-items').append(taskView.render().$el);
    });
    return this;
  },
  events: {
    'click #add-task': "addTask"
  },
  readNewTaskForm: function() {
    // Get the values from the fields
    var title = this.$('#title').val();
    this.$('#title').val('');
    var description = this.$('#description').val();
    this.$('#description').val('');
    var completed = this.$('#completed-checkbox').is(":checked");
    this.$('#completed-checkbox').prop('checked', false);

    return {
      title: title,
      description: description,
      completed: completed
    };
  },
  addTask: function(e) {
    var taskData = this.readNewTaskForm();
    var task = new Task(taskData);
    this.model.add(task);
  }
});

export default TaskListView;
