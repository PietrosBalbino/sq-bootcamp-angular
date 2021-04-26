import { Component, OnInit } from '@angular/core';
import { Task } from '../services/models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-todas-tarefas',
  templateUrl: './todas-tarefas.component.html',
  styleUrls: ['./todas-tarefas.component.scss']
})
export class TodasTarefasComponent implements OnInit {

  todasTarefas: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.onUpdateTasks()
    .subscribe(
      () => {
        this.init();
      }
    );

    this.init();
  }
    private init() {
      this.listTasksTodas();
    }
    private listTasksTodas() {
      this.taskService
      .listTasksTodas()
      .subscribe(
        (tarefas: Task[]) => {
          this.todasTarefas = tarefas;
        }
      );
    }

}
