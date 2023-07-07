import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/app.breadcrumb.service';

@Component({
  selector: 'app-onboard-resources',
  templateUrl: './onboard-resources.component.html',
  styleUrls: ['./onboard-resources.component.scss']
})
export class OnboardResourcesComponent implements OnInit {

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Onboard Resources', routerLink: ['admin/OnboardResources'] }
        ]);
    }

  ngOnInit(): void {
  }

}
