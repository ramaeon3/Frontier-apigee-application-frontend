import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {AppMainComponent} from './app.main.component';
import { OnboardResourcesComponent } from './custom/onboard-resources/onboard-resources.component';
import { LoginPageComponent } from './custom/login-page/login-page.component';
import { SignupPageComponent } from './custom/signup-page/signup-page.component';

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
            
            {path: 'login', component: LoginPageComponent},
            {path: 'sign-up', component: SignupPageComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
