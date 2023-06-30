import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  selectedTab: string;

  constructor(private router: Router) {
    this.selectedTab = this.getCurrentTab();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.selectedTab = this.getCurrentTab();
      }
    });
  }

  getCurrentTab(): string {
    const currentUrl = this.router.url;
    const tabUrl = currentUrl.split('/')[2]; // Assuming the tab URLs have a format like '/tabs/tabName'

    return tabUrl || 'home'; // Default to 'home' if no tab URL is present (e.g., on the Home page)
  }

}
