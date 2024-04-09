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
import { ClienteTodosComponent } from './cliente/cliente-todos/cliente-todos.component';
import { ClienteDetailComponent } from './cliente/cliente-detail/cliente-detail.component';
import { ClienteCrearComponent } from './cliente/cliente-crear/cliente-crear.component';
import { ClienteModificarComponent } from './cliente/cliente-modificar/cliente-modificar.component';
import { VeterinarioCrearComponent } from './veterinarios/veterinario-crear/veterinario-crear.component';
import { VeterinarioDetailComponent } from './veterinarios/veterinario-detail/veterinario-detail.component';
import { VeterinarioModificarComponent } from './veterinarios/veterinario-modificar/veterinario-modificar.component';
import { VeterinarioTodosComponent } from './veterinarios/veterinario-todos/veterinario-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MascotaTableComponent,
    MascotaDetailComponent,
    MascotaFormComponent,
    AdminPageComponent,
    ErrorPageComponent,
    ClienteTodosComponent,
    ClienteDetailComponent,
    ClienteCrearComponent,
    ClienteModificarComponent,
    VeterinarioCrearComponent,
    VeterinarioDetailComponent,
    VeterinarioModificarComponent,
    VeterinarioTodosComponent
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
