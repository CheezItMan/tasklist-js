import _ from 'lodash';
import './styles.css';
import messages from './messages';
import Button from './button';
import Kitten from './image';

function component () {
  var element = document.createElement('div');

//  var newMessage = () => (`<p>${messages.hi}  ${messages.event}</p>`);
  var newMessage = () => (`
    <p>
      ${messages.hi}  ${messages.event}
      ${Kitten}
    </p>
    `)
  /* lodash is required for the next line to work */
  element.innerHTML = newMessage();


  return element;
}

document.body.appendChild(component());
Button.attachEl();
