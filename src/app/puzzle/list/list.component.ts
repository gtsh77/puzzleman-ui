import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  animations: [
    trigger('aShow', [  	
      transition('void => *', [
        style({
          opacity: '0'
        }),
        animate('250ms', style({
          opacity: '1'
        }))
      ])
    ])    
  ],  
})
export class ListComponent {

}
