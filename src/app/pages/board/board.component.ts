import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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
      background: #8f9193;
    }

    .scrollbar::-webkit-scrollbar-thumb {
      background: #c5c6c7;
      border-radius: 100vh;
    }

    .scrollbar::-webkit-scrollbar-thumb:hover {
      background: #cfd0d1;
      border: 2px solid #dcdcdd;
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
          name: 'Llorar con la llorana'
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
          name: 'Saltar a la cuerda'
        },
        {
          id: '792',
          name: 'Mover el bote'
        },
      ]
    }
  ]


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
}
