import { Component, Input } from '@angular/core';
import { faBox, faWaveSquare, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers, faGear } from '@fortawesome/free-solid-svg-icons'
import { faTrello } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent {

  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  items = [
    {
      label: 'Item 1',
      items: [
        {label: 'Sub item 1.1',
        },
        {label: 'Sub item 1.2',
        },
      ]
    },
    {
      label: 'Item 2',
      items: [
        {label: 'Sub item 2.1',
        },
        {label: 'Sub item 2.2',
        },
      ]
    },
    {
      label: 'Item 3',
      items: [
        {label: 'Sub item 3.1',
        },
        {label: 'Sub item 3.2',
        },
        {label: 'Sub item 3.3',
        },
      ]
    },
  ]

  boards = [
    {
      label: 'Board 1',
      color: 'bg-sky-700',
    },
    {
      label:'Board 2',
      color: 'bg-green-700',
    },
    {
      label:'Board 3',
      color: 'bg-amber-700',
    },
    {
      label:'Board 4',
      color: 'bg-indigo-700',
    },
  ]
}
