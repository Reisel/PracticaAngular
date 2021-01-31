import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '',
  loadChildren: ()=>
   import('./modules/login/login.module').then((m) => m.LoginModule)},

  {path: 'bandeja',
  loadChildren: ()=>
  import('./modules/bandeja/bandeja.module').then((m) => m.BandejaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}