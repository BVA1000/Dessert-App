import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: TaskListComponent },
  { path: "add", component: TaskAddComponent },
  { path: "edit/:id", component: TaskEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
