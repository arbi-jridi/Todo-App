import { Component, Input } from '@angular/core';

interface Task {
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() task!: { text: string; done: boolean };

  tasks: Task[] = [];
  newTask: string = '';

  onAdd() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ text: this.newTask, done: false });
      this.newTask = '';
    } else {
      alert('Please enter a task !');
    }
  }

  toggleTask(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
    console.log(this.tasks[index].done);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
