import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { ItemsComponent } from '../items/items.component';
import { FreeItemsComponent } from '../free-items/free-items.component';
import { LoginComponent } from '../login/login.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'free-items/:id', component: FreeItemsComponent },
  { path: 'item-detail/:id', component: ItemDetailComponent },
  { path: 'login', component: LoginComponent},
  { path: 'user', component: UserComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}