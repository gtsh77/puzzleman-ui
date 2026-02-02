import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent }  from './nav/nav.component';
import { SideComponent }  from './side/side.component';
import { FooterComponent }  from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavComponent,
    FooterComponent,
    SideComponent,
    RouterModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    SideComponent,
    RouterModule
  ]
})
export class SharedModule { }
