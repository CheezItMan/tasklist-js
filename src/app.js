// /src/app.js
// Load Foundation Files
import _settings  from './css/_settings.scss';
import foundation  from './css/foundation.css';
import css from './css/styles.css';

// Import jQuery
import $ from 'jquery';
import _ from 'underscore';
import Task from './models/task';
import TaskList from './collections/task_list';
import TaskView from './views/task_view';
import TaskListView from './views/task_list_view';


var taskList;

var render = function(task) {
  // Select the template using jQuery
  var template_text = $('#taskItemTemplate').html();

  //console.log(template_text);
  // Get an underscore template object
  var template = _.template(template_text);

  // Use the underscore template function to compile the
  // template and data into raw html.
  var compiledHTML = template(task.toJSON());

  // append the html to the unordered list.
  $('.todo-items').append(compiledHTML);
  $('li.task-item:last').find('button.alert').click ({taskCid: task.cid}, function(params) {
          taskList.remove(params.data.taskCid);
      });
};

var renderList = function(taskList) {
  // Clear the unordered list
  $('.todo-items').empty();
  // Iterate through the list rendering each Task
  taskList.each(function(task) {
    // Create a new TaskView with the model & template
    var taskView = new TaskView({
      model: task,
      template: _.template($('#taskItemTemplate').html())
    });
    // Then render the TaskView
    // And append the resulting HTML to the DOM.
    $('.todo-items').append(taskView.render().$el);
  });
};

$(document).ready(function() {
  var taskData = [{
    title: "Create a model",
    completed: true
  },
  {
    title: "Create a collection",
    completed: false
  }];
  taskList = new TaskList(taskData);
  taskList.on("update", function() {
    renderList(taskList);
  });

  var taskListView = new TaskListView({
    model: taskList,
    template: _.template($('#taskItemTemplate').html()),
    el: 'main'
  });
  taskListView.render();
});

  var readNewTaskForm = function() {
  // Get the values from the fields
  var title = $('#title').val();
  $('#title').val('');
  var description = $('#description').val();
  $('#description').val('');
  var completed = $('#completed-checkbox').is(":checked");
  $('#completed-checkbox').prop('checked', false);

  return {
    title: title,
    description: description,
    completed: completed
  };
};
