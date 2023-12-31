import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {AppMainComponent} from './app.main.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';
import { OnboardResourcesComponent } from './custom/onboard-resources/onboard-resources.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '',redirectTo:"admin/OnboardResources", pathMatch:"full"},
                    {path: 'admin/OnboardResources', component: OnboardResourcesComponent},
                    {path: 'admin/OnboardDestinations', component: EmptyDemoComponent},
                    {path: 'admin/CleanSources', component: EmptyDemoComponent},
                    {path: 'export', component: EmptyDemoComponent},
                    {path: 'import', component: EmptyDemoComponent},

                ]
            },
            {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: 'login', component: AppLoginComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
