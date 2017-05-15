// /src/app.js
// Load Foundation Files
require('./css/_settings.scss');
require('./css/foundation.css');
require('./css/styles.css');

// Import jQuery
import $ from 'jquery';
import _ from 'underscore';

// ready to go
$(document).ready(function() {

  $('section.main-content').append('<p>Hello World!</p>');

});
