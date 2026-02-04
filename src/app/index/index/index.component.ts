import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module'
import { CommonModule } from '@angular/common';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-index',
  imports: [CommonModule, SharedModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
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

export class IndexComponent {

}
