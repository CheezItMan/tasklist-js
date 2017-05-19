import Backbone from 'backbone';

var Task = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  },
  logStatus: function() {
    console.log("Title: " + this.get("title"));
    console.log("Completed: " + this.get("completed"));
  },
  toggleComplete: function() {
    this.set("completed", !this.get("completed"));
  },
  initialize: function(params) {
   console.log("Task initialized: " + this.get("title"));
    // just to see what params looks like
    console.log(params);
  }
});

export default Task;
