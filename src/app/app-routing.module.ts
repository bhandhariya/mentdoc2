import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SecutiryComponent } from './secutiry/secutiry.component';


const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'security',component:SecutiryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
