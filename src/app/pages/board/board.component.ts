import { Component } from '@angular/core';
import {  moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Dialog } from '@angular/cdk/dialog';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';

import { Task, Column } from '../../models/task.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
    .scrollbar::-webkit-scrollbar {
      width: 20px;
      height: 10px;
    }

    .scrollbar::-webkit-scrollbar-track {
      border-radius: 100vh;
      background: rgb( 85, 85, 85, 0.5);
    }

    .scrollbar::-webkit-scrollbar-thumb {
      background: rgb( 215, 215, 215, 0.6);
      border-radius: 100vh;
    }

    .scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgb( 225, 225, 225, 0.7);
    }
    `
  ]

})
export class BoardComponent {

  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '456',
          name: 'Comprar fideo'
        },
        {
          id: '856',
          name: 'Saltar la cuerda'
        },
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '856',
          name: 'Comprar un unicornio'
        },
        {
          id: '792',
          name: 'Terminar de ver Greys Anatomy'
        },
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: '456',
          name: 'Jugar a la rayuela'
        },
        {
          id: '856',
          name: 'Visitar la biblioteca'
        },
        {
          id: '792',
          name: 'Quitar la basura'
        },
      ]
    }
  ]

  constructor(
    private dialog: Dialog
  ) {

  }


  drop(event: any) {
    if (event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  addList() {
    this.columns.push({
      title: 'New Column',
      todos: [],
    })
  }

  openDialog(todo: Task) {
    const dialogRef = this.dialog.open(TodoDialogComponent,{
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus: false,
      data: {
        todo: todo,
      }
    });
    dialogRef.closed.subscribe(output => {
      console.log(output);
    })
  }
}
