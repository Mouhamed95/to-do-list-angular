import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import {NewTaskComponent} from './new-task/new-task.component'
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent,NewTaskComponent]
})
export class TasksComponent {
  @Input ({required:true})userId!: string
  @Input({required:true}) name!: string 
  isAddTask: boolean = false
  // private tasksService = new TasksService
 
  constructor(private tasksService:TasksService){}
  

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)
  }

  // onComplete(id: string) {
   
  // }


  onStartAddTask() {
  this.isAddTask = true
  }
  
  onCancelAddTask() {
    this.isAddTask = false
  }

  // onAddTask(taskData:NewTaskData) {
   
  //   this.isAddTask = false
  // }

}
