import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: false,

  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  tasks: string[] = []; // List of tasks
  newTask: string = ''; // Input for a new task

  // Add a new task to the list
  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.newTask = ''; // Clear the input
    }
  }

  // Delete a task from the list
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
