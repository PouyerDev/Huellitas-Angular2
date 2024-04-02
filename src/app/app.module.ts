import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MascotaTableComponent } from './mascota/mascota-table/mascota-table.component';
import { MascotaDetailComponent } from './mascota/mascota-detail/mascota-detail.component';
import { MascotaFormComponent } from './mascota/mascota-form/mascota-form.component';
import { FormsModule } from '@angular/forms';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './errores/error-page/error-page.component';
import { TodosTratamientosComponent } from './tratamiento/tratamiento-todos/todos-tratamientos.component';
import { TratamientoDetailComponent } from './tratamiento/tratamiento-detail/tratamiento-detail.component';
import { TratamientoMascotaComponent } from './tratamiento/tratamiento-mascota/tratamiento-mascota.component';
import { TratamientoCrearComponent } from './tratamiento/tratamiento-crear/tratamiento-crear.component';
import { TratamientoModificarComponent } from './tratamiento/tratamiento-modificar/tratamiento-modificar.component';
import { VeterinarioTodosComponent } from './veterinario/veterinario-todos/veterinario-todos.component';
import { VeterinarioDetailComponent } from './veterinario/veterinario-detail/veterinario-detail.component';
import { VeterinarioCrearComponent } from './veterinario/veterinario-crear/veterinario-crear.component';
import { VeterinarioModificarComponent } from './veterinario/veterinario-modificar/veterinario-modificar.component';
import { DrogaTodosComponent } from './droga/droga-todos/droga-todos.component';
import { DrogaDetailComponent } from './droga/droga-detail/droga-detail.component';
import { DrogaCrearComponent } from './droga/droga-crear/droga-crear.component';
import { DrogaModificarComponent } from './droga/droga-modificar/droga-modificar.component';
import { ClienteTodosComponent } from './cliente/cliente-todos/cliente-todos.component';
import { ClienteDetailComponent } from './cliente/cliente-detail/cliente-detail.component';
import { ClienteCrearComponent } from './cliente/cliente-crear/cliente-crear.component';
import { ClienteModificarComponent } from './cliente/cliente-modificar/cliente-modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MascotaTableComponent,
    MascotaDetailComponent,
    MascotaFormComponent,
    AdminPageComponent,
    ErrorPageComponent,
    TodosTratamientosComponent,
    TratamientoDetailComponent,
    TratamientoMascotaComponent,
    TratamientoCrearComponent,
    TratamientoModificarComponent,
    VeterinarioTodosComponent,
    VeterinarioDetailComponent,
    VeterinarioCrearComponent,
    VeterinarioModificarComponent,
    DrogaTodosComponent,
    DrogaDetailComponent,
    DrogaCrearComponent,
    DrogaModificarComponent,
    ClienteTodosComponent,
    ClienteDetailComponent,
    ClienteCrearComponent,
    ClienteModificarComponent
  ],
  imports: [
    BrowserModule,
    
    FormsModule,
          AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
