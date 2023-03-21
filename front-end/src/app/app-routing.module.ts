
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewFilmeComponent } from './components/new-filme/new-filme.component';
import { FilmeComponent } from './components/filme/filme.component';
import { EditFilmeComponent } from './components/edit-filme/edit-filme.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'filmes/new', component: NewFilmeComponent },
  { path: 'filme/edit/:id', component: EditFilmeComponent },
  { path: 'filme/:id', component: FilmeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
