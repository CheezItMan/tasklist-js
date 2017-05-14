// import core foundation files
import { foundation } from 'foundation-sites/js/foundation.core';
import 'foundation-sites/js/foundation.util.mediaQuery';
$.fn.foundation = foundation;

const Button = {
  button: '<button type="button" id="mybutton" class="success button">Click Me!</button>',
  attachEl: () => {
    document.getElementById('mybutton').addEventListener('click',
    () => {
            console.log("Clicked!");
          }
    );
  }
}


export default Button;
