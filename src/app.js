// /src/app.js
// Load Foundation Files
import _settings  from './css/_settings.scss';
import foundation  from './css/foundation.css';
import css from './css/styles.css';
// require('./css/_settings.scss');
// require('./css/foundation.css');
// require('./css/styles.css');



// Import jQuery
import $ from 'jquery';
import _ from 'underscore';
import Task from './models/task';
import TaskList from './collections/task_list';

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
  var taskList = new TaskList(taskData);

  taskList.each(function(task) {
    render(task);
  });

  $('#add-task').click( function() {

    // Get the values from the fields
    var title = $('#title').val();
    $('#title').val('');
    var description = $('#description').val();
    $('#description').val('');
    var completed = $('#completed-checkbox').is(":checked");
    $('#completed-checkbox').prop('checked', false);

    console.log("Title = " + title);
    // Create a new Task
    var task = new Task({
      title: title,
      description: description,
      completed: completed
    });

    // Render the list to the DOM
    taskList.each(function(task) {
      render(task);
    });
  });
});
