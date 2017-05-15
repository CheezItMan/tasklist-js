// /src/app.js
// Load Foundation Files
require('./css/_settings.scss');
require('./css/foundation.css');
require('./css/styles.css');

// Import jQuery
import $ from 'jquery';
import _ from 'underscore';
import Task from './models/task';

// ready to go
$(document).ready(function() {

  var my_task = new Task({
    title: "Create a model",
    completed: true
  });

  console.log(my_task.get("title") +  " is completed: " + my_task.get("completed"));


});
