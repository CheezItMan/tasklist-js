// src/models/task.js
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
    console.log("Toggling value");
    this.set("completed", !this.get("completed"));
  }
});

export default Task;
