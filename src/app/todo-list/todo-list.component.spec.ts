import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
addTask() {
throw new Error('Method not implemented.');
}
  editableId: number | null = null;
  newTask: string = '';
  searchTerm: string = ''; // Added search term property

  tasks: any[] = [
    {
      title: 'Crear la lista de tareas',
      completed: true,
    },
    {
      title: 'Realizar la estructura HTML',
      completed: true,
    },
    {
      title: 'Desplegar el proyecto en la web',
      completed: false,
    },
  ];

  // ... Rest of your methods ...

  get filteredTasks(): any[] {
    return this.tasks.filter(task =>
      task.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
