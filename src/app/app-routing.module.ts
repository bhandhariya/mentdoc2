import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {SecurityComponent} from './security/security.component';
import { DownloadComponent } from './download/download.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { BlogComponent } from './blog/blog.component';
const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'home',component:IndexComponent},
  {path:'security',component:SecurityComponent},
  {path:'download',component:DownloadComponent},
  {path:'service',component:ServiceComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'blog',component:BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
