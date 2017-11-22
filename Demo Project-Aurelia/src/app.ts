import { Router, RouterConfiguration } from 'aurelia-router';

export class App {

    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {

        config.title = "Demo Application";
        config.map([
            {
                route: ['', 'grid'], moduleId: 'grid/grid',
                name: 'Grid', title: 'Grid', nav: true
            },
            {
                route: 'childroute', moduleId: 'childroute/childroute',
                title: 'Child Route', nav: true
            },
            {
                route: 'dashboard', moduleId: 'dashboard/dashboard',
                title: 'Dashboard', nav: true
            },
            {
                route: 'detail/:id', moduleId: 'grid/detail',name:'detail'
            }
        ]);
        this.router = router;
    }
}
