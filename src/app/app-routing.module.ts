import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MascotaTableComponent } from './mascota/mascota-table/mascota-table.component';
import { MascotaDetailComponent } from './mascota/mascota-detail/mascota-detail.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { ErrorPageComponent } from './errores/error-page/error-page.component';
import { ClienteTodosComponent } from './cliente/cliente-todos/cliente-todos.component';
import { ClienteDetailComponent } from './cliente/cliente-detail/cliente-detail.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { VeterinarioDetailComponent } from './veterinarios/veterinario-detail/veterinario-detail.component';
import { VeterinarioTodosComponent } from './veterinarios/veterinario-todos/veterinario-todos.component';
import { VeterinarioFormComponent } from './veterinarios/veterinario-form/veterinario-form.component';
import { TratamientoFormComponent } from './tratamiento/tratamiento-form/tratamiento-form.component';
import { TratamientoTodosComponent } from './tratamiento/tratamiento-todos/tratamiento-todos.component';
import { MascotaFormComponent } from './mascota/mascota-form/mascota-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'admin', component: AdminPageComponent },
  
  { path: 'clientes', component: ClienteTodosComponent },
  { path: 'cliente/update/:id', component: ClienteFormComponent },
  { path: 'cliente/crear', component: ClienteFormComponent },
  { path: 'cliente/cliente-detail/:id', component: ClienteDetailComponent },
  
  { path: 'veterinarios', component: VeterinarioTodosComponent },
  { path: 'veterinario/update/:id', component: VeterinarioFormComponent },
  { path: 'veterinario/crear', component: VeterinarioFormComponent },
  { path: 'veterinarios/detail/:id', component: VeterinarioDetailComponent },
  
  { path: 'mascotas', component: MascotaTableComponent },
  { path: 'mascotas/detail/:id', component: MascotaDetailComponent },
  { path: 'mascotas/deactivate/:id', component: MascotaDetailComponent },
  { path: 'mascota/crear', component: MascotaFormComponent},
  
  { path: 'tratamientos/', component: TratamientoTodosComponent },
  { path: 'tratamiento/update/:id/:mascotaId', component: TratamientoFormComponent },
  { path: 'tratamiento/crear', component: TratamientoFormComponent },
  
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
