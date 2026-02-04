import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-register',
  imports: [RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
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
export class RegisterComponent {
  public isError:boolean = false;

}
