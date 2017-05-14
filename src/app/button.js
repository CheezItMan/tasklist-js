const Button = {
  button: '<button id="mybutton">Press Me!</button>',
  attachEl: () => {
    document.getElementById('mybutton').addEventListener('click',
    () => {
            console.log("Clicked!");
          }
    );
  }
}


export default Button;
