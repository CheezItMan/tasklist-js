// /src/app.js
// Load Foundation Files
import _settings  from './css/_settings.scss';
import foundation  from './css/foundation.css';
import css from './css/styles.css';

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

  // Added Code
    // Select the template using jQuery
  var template_text = $('#taskItemTemplate').html();

  //console.log(template_text);
    // Get an underscore template object
  var template = _.template(template_text);

    // Use the underscore template function to compile the
    // template and data into raw html.
  var compiledHTML = template(my_task.toJSON());

  console.log(compiledHTML);

    // append the html to the unordered list.
  $('.todo-items').append(compiledHTML);
  // End of new code
});
