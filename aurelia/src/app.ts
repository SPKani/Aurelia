import { Router, RouterConfiguration } from 'aurelia-router';
import { inject } from 'aurelia-framework';
import { WebAPI } from './web-api';

@inject(WebAPI)
export class App {
  router: Router;

  constructor(public api: WebAPI) {}

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Contacts';
    config.map([
      { route: '', moduleId: 'no-selection', title: 'Select' },
      { route: 'contacts/:id', moduleId: 'contact-detail', name: 'contacts' },
      { route: 'details', moduleId: 'job-detail', name: 'details' },
      { route: 'jobtest', moduleId: 'job-test', name: 'jobtest' }
    ]);

    this.router = router;
  }
}