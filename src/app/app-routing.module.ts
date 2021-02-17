import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const routes = [
  {path: 'primo' , component: FirstComponent},
  {path: 'secondo' , component: SecondComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule {}
