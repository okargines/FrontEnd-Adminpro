
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
// import { APP_ROUTES } from './app.routes';
// import { AUTH_ROUTES } from './auth/auth.routes';


// Modulos
import { AppRoutingModule } from './app-routing.module';   //rutas>>App
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

// temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Servicios
import { ServiceModule } from './services/service.module';

// Componentes
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';





//Se creo en automatico cuando se creo el Pipe
// import { ImagenPipe } from './pipes/imagen.pipe';
//la idea de birrar es porque no queremos que
//se llene de pipes este app.module


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent
    //ImagenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,     //App>>router
    PagesModule,
    AuthModule,
    //APP_ROUTES,
    //AUTH_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
