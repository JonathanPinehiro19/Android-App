import { E404Component } from './pages/e404/e404.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  // Rota padrão → Página inicial → 'home'.
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    title: 'Página Inicial',
    component: HomeComponent
  },
  {
    path: 'contacts',
    title: 'Faça Contato',
    component: ContactsComponent
  },
  {
    path: 'about',
    title: 'Sobre',
    component: AboutComponent
  },
  {
    path: '404',
    title: 'Erro 404',
    component: E404Component
  },

  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
