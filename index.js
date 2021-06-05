const newTask = (title, description) => {
  const task = {
    title: title,
    description: description,
    complete: false,

    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", 'Take all the shit out of the litter box');
const task2 = newTask("Do Laundry", '🥼');
const tasks = [task1, task2];


console.log(task1.logTaskState());
task1.markCompleted();
console.log(task1.logTaskState());
console.log(task1.title);
console.log(task1.description);

console.log(tasks);
