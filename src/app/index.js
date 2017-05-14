import _ from 'lodash';
import './_settings.scss';
import { foundation } from 'foundation-sites/js/foundation.core';
import 'foundation-sites/js/foundation.util.mediaQuery';

import './styles.scss';
import messages from './messages';
import Button from './button';
import Kitten from './image';
// import core foundation files

// we need to attach the function we exported above to the jQuery object in use in this file
$.fn.foundation = foundation;



function component () {
  var element = document.createElement('div');

//  var newMessage = () => (`<p>${messages.hi}  ${messages.event}</p>`);
  var newMessage = () => (`
    <p>
      ${messages.hi}  ${messages.event}
      ${Kitten}
    </p>
    ${Button.button}
    `)
  /* lodash is required for the next line to work */
  element.innerHTML = newMessage();


  return element;
}

// ready to go
$(document).ready(function() {
  $(document).foundation();
  document.body.appendChild(component());
  Button.attachEl();

});
