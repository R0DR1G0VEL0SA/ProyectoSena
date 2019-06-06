import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoLoginGuard } from './guards/nologin.guard';

const routes: Routes = [
  { path: 'intro', redirectTo: './componentes/intro/intro.module#IntroPageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' , canActivate : [AuthGuard]},
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule', canActivate : [NoLoginGuard] },
  { path: 'register', loadChildren: './componentes/register/register.module#RegisterPageModule' },
  { path: 'reset-password', loadChildren: './componentes/reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'role', loadChildren: './componentes/role/role.module#RolePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
