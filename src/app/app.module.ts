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
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { VeterinarioDetailComponent } from './veterinarios/veterinario-detail/veterinario-detail.component';
import { VeterinarioTodosComponent } from './veterinarios/veterinario-todos/veterinario-todos.component';
import { VeterinarioFormComponent } from './veterinarios/veterinario-form/veterinario-form.component';

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
    ClienteFormComponent,
    VeterinarioDetailComponent,
    VeterinarioTodosComponent,
    VeterinarioFormComponent
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
