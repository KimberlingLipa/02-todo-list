import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  editableId: number | null = null;
  newTask: string = '';
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

  searchTerm: string = ''; // La propiedad para almacenar el término de búsqueda
  searchResults: any[] = []; // La lista de tareas filtradas

  addTask() {
    const task = {
      title: this.newTask,
      completed: false,
    };
    this.tasks.push(task); // Agrega la tarea a la lista
    this.newTask = ''; // Limpia el campo de entrada
  }
  
  updateTask(task: any, title: string) {
    const index = this.tasks.indexOf(task);
    const updateTask = {
      title,
      completed: task.completed
    }
    this.tasks[index] = { ...task, ...updateTask };
  }

  deleteTask(task: any) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  startEdit(id: number): void {
    this.editableId = id;
  }

  stopEdit(task: any, title: string): void {
    this.editableId = null;
    this.updateTask(task, title);
  }

  searchTasks() {
    if (this.searchTerm) {
      // Filtra las tareas que contengan el término de búsqueda
      this.searchResults = this.tasks.filter(task =>
        task.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );

      if (this.searchResults.length === 0) {
        // Muestra un mensaje si no se encuentran resultados
        alert("No se encontraron resultados.");
      }
    } else {
      // Si el término de búsqueda está vacío, muestra todas las tareas
      this.searchResults = this.tasks;
    }
  }
}