import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Background} from './background.component';
import {Page} from './page.component';

@Component ({
    selector : 'app',
    directives : [Background, Page],
    template : `
            <background></background>
            <page></page>
    `
})

class App {

}

bootstrap(App);
