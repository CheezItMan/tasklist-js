// /src/app.js
// Load Foundation Files
import _settings  from './css/_settings.scss';
import foundation  from './css/foundation.css';
import css from './css/styles.css';

// Import jQuery & underscore
import $ from 'jquery';
import _ from 'underscore';
import Task from './models/task';
import TaskList from './collections/task_list';
import TaskView from './views/task_view.js';
import TaskListView from './views/task_list_view';



$(document).ready(function() {
  var taskData = [{
    title: "Create a model",
    completed: true
  },
  {
    title: "Create a collection",
    completed: false
  }];

  var taskList = new TaskList(taskData);


  var taskListView = new TaskListView({
    model: taskList,
    template: _.template($('#taskItemTemplate').html()),
    el: 'main'
  });
  taskListView.render();

});
