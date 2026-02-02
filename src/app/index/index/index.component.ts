import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  imports: [CommonModule, SharedModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
