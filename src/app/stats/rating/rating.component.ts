import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-rating',
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
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
export class RatingComponent {

}
