
import { NgModule } from '@angular/core';
//import { PAGES_ROUTES } from './pages.routes';


//mMdulos
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { AppRoutingModule } from '../app-routing.module';  se modifco por RoutingModule
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routing';


// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

//Pipe Module
import { PipesModule } from '../pipes/pipes.module';

// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';






@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingsComponent,
        PromesasComponent,
        RxjsComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        PipesModule,
        //AppRoutingModule   se modifico por el RouterModule
        //PAGES_ROUTES,
        PagesRoutingModule,  //reemplza PAGE_ROUTES
        FormsModule,
        ChartsModule
        
    ]
})
export class PagesModule { }
