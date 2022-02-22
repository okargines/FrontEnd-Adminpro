import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { LoginGuardGuard } from '../services/service.index';



const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
          { path: '', component: DashboardComponent},
          { path: 'progress', component: ProgressComponent},
          { path: 'graficas1', component: Graficas1Component},
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PagesRoutingModule {}


//export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
