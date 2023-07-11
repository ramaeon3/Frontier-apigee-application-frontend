import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {FullCalendarModule} from '@fullcalendar/angular';

// Application Components
import {AppCodeModule} from './app.code.component';
import {AppComponent} from './app.component';
import {AppMainComponent} from './app.main.component';
import {AppConfigComponent} from './app.config.component';
import {AppMenuComponent} from './app.menu.component';
import {AppMenuitemComponent} from './app.menuitem.component';
import {AppBreadcrumbComponent} from './app.breadcrumb.component';
import {AppMegamenuComponent} from './app.megamenu.component';
import {AppProfileComponent} from './app.profile.component';
import {AppRightPanelComponent} from './app.rightpanel.component';
import {AppTopBarComponent} from './app.topbar.component';
import {AppFooterComponent} from './app.footer.component';
// Application services
import {BreadcrumbService} from './app.breadcrumb.service';
import {MenuService} from './app.menu.service';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { OnboardResourcesComponent } from './custom/onboard-resources/onboard-resources.component';
import { LoginPageComponent } from './custom/login-page/login-page.component';
import { SignupPageComponent } from './custom/signup-page/signup-page.component';
import { PrimengModule } from './primeng/primeng.module';

FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin
]);

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,        
        HttpClientModule,
        BrowserAnimationsModule,
        AppCodeModule,
        FullCalendarModule,
        PrimengModule
        
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppConfigComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppRightPanelComponent,
        AppMegamenuComponent,
        AppProfileComponent,
        AppBreadcrumbComponent,
        OnboardResourcesComponent,
        LoginPageComponent,
        SignupPageComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        MenuService, BreadcrumbService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
