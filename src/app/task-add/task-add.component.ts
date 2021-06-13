import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task';
import { TaskDataService } from '../task-data.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  newTask: Task = new Task();

  addTask() {
    this.taskDataService
      .addTask(this.newTask)
      .subscribe(t => this.router.navigate(["list"]));
  }

  constructor(private taskDataService: TaskDataService, private router: Router) { }

  ngOnInit() {
  }

}
