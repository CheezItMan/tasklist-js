// /src/app.js
// Load Foundation Files
import _settings  from './css/_settings.scss';
import foundation  from './css/foundation.css';
import css from './css/styles.css';

// Import jQuery & underscore
import $ from 'jquery';
import _ from 'underscore';

// ready to go
$(document).ready(function() {
  $('section.main-content').append('<p>Hello World!</p>');

});
