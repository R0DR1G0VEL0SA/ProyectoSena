import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoLoginGuard } from './guards/nologin.guard';

const routes: Routes = [
  { path: 'into', redirectTo: './componentes/into/into.module#IntoPageModule' },
  { path: '', loadChildren: './componentes/into/into.module#IntoPageModule' },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule' , canActivate : [NoLoginGuard]},
  { path: '', loadChildren: './componentes/tabs/tabs.module#TabsPageModule', canActivate : [AuthGuard]},
  { path: 'register', loadChildren: './componentes/register/register.module#RegisterPageModule' },
  { path: 'reset-password', loadChildren: './componentes/reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'role', loadChildren: './componentes/role/role.module#RolePageModule' },
  { path: 'personal-data', loadChildren: './componentes/personal-data/personal-data.module#PersonalDataPageModule' },
  { path: 'car', loadChildren: './componentes/car/car.module#CarPageModule'},
  { path: 'document', loadChildren: './componentes/document/document.module#DocumentPageModule' },
  { path: 'record', loadChildren: './componentes/record/record.module#RecordPageModule' },
  { path: 'support', loadChildren: './componentes/support/support.module#SupportPageModule' },
  { path: 'trailer', loadChildren: './componentes/trailer/trailer.module#TrailerPageModule' },
  { path: 'add-car', loadChildren: './componentes/add-car/add-car.module#AddCarPageModule'},
  { path: 'detail-car', loadChildren: './componentes/detail-car/detail-car.module#DetailCarPageModule' },
  { path: 'detail/:id', loadChildren: './componentes/detail-car/detail-car.module#DetailCarPageModule'},
  { path: 'detail', loadChildren: './componentes/detail-car/detail-car.module#DetailCarPageModule' },
  { path: 'detail-tab1', loadChildren: './componentes/detail-tab1/detail-tab1.module#DetailTab1PageModule' },
  { path: 'detail1/:id', loadChildren: './componentes/detail-tab1/detail-tab1.module#DetailTab1PageModule' },
  { path: 'detail1', loadChildren: './componentes/detail-tab1/detail-tab1.module#DetailTab1PageModule' }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
