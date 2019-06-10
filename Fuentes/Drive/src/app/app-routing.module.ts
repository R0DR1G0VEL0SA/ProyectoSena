import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoLoginGuard } from './guards/nologin.guard';

const routes: Routes = [
  { path: 'intro', redirectTo: './componentes/intro/intro.module#IntroPageModule' },
  { path: '', loadChildren: './componentes/tabs/tabs.module#TabsPageModule', canActivate : [AuthGuard]},
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule', canActivate : [NoLoginGuard] },
  { path: 'register', loadChildren: './componentes/register/register.module#RegisterPageModule' },
  { path: 'reset-password', loadChildren: './componentes/reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'role', loadChildren: './componentes/role/role.module#RolePageModule' },  { path: 'personal-data', loadChildren: './componentes/personal-data/personal-data.module#PersonalDataPageModule' },
  { path: 'car', loadChildren: './componentes/car/car.module#CarPageModule' },
  { path: 'document', loadChildren: './componentes/document/document.module#DocumentPageModule' },
  { path: 'record', loadChildren: './componentes/record/record.module#RecordPageModule' },
  { path: 'support', loadChildren: './componentes/support/support.module#SupportPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
