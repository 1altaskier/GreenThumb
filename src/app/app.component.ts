import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../shared/models/wishItem';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterLink, 
      RouterLinkActive, 
      RouterOutlet, 
      CommonModule, 
      FormsModule,
    ]
})
export class AppComponent {
changeName(name : string) {
  throw new Error('Method not implemented.');
}
  items = [
    new WishItem('To Learn Angular Really Fast'),
    new WishItem('Get Some Coffee', true),
    new WishItem('Smoke a Bowl', true),
    new WishItem('Find The Perfect Job', false),
  ];

  title: string = 'GreenThumb Chronicles';
}
