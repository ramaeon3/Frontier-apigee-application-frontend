import {Component, OnInit} from '@angular/core';
import {AppMainComponent} from './app.main.component';

@Component({
    selector: 'app-menu',
    template: `
		<ul class="layout-menu">
			<li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
		</ul>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppMainComponent) {}

    ngOnInit() {
        this.model = [
            {label: 'Onboard Resources', icon: 'pi pi-fw pi-database', routerLink: ['admin/OnboardResources']},
            {label: 'Onboard Destinations', icon: 'pi pi-fw pi-tags', routerLink: ['admin/OnboardDestinations']},
            {label: 'Clean Sources', icon: 'pi pi-fw pi-clone', routerLink: ['admin/CleanSources']},
            {label: 'Export', icon: 'pi pi-fw pi-upload', routerLink: ['export']},
            {label: 'Import', icon: 'pi pi-fw pi-download', routerLink: ['import']},
        ];
    }
}
