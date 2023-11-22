import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [



  {path: '', component: LoginComponent},
  {path: 'accueil/:id', component: AccueilComponent},
  {path: 'detail', component :DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
