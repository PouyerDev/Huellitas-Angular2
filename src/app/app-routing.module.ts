import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MascotaTableComponent } from './mascota/mascota-table/mascota-table.component';
import { MascotaDetailComponent } from './mascota/mascota-detail/mascota-detail.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { ErrorPageComponent } from './errores/error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'mascotas', component: MascotaTableComponent },
  { path: 'mascotas/detail/:id', component: MascotaDetailComponent },
  { path: 'admin', component: AdminPageComponent },
  
  { path: '**', component: ErrorPageComponent }
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
    ,RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
