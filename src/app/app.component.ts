import { Component } from '@angular/core';
import { User } from './card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[];
  constructor() {
    this.users = [
      {
        name: 'aida',
        status: 'Developpeuse'
      },
      {
        name: 'amina',
        status: 'Comptable'
      }
    ];
  }

  addUser(): void {

    this.users.push({ name: 'abdou', status: 'Designer' });
  }

  editFirstUser(): void {
    this.users[0] = {
      ...this.users[0],
      name: `Random User ${(Math.floor(Math.random() * 100) + 1).toString()}`,
    };
  }
}
