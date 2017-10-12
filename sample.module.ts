import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SampleComponent} from './sample.component';

import {UIRouterModule, Ng2StateDeclaration} from "@uirouter/angular";

export let SAMPLE_STATES: Ng2StateDeclaration = {
    name: 'sample',
    url: '/sample',
    views: {
        "content": {
            component: SampleComponent,
        }
    },
    data: {
        breadcrumbRoot: true,
        displayName: "Sample Module",
        module: 'sample',
        permissions: ['accessOperations']
    }
};

@NgModule({
    imports: [
        CommonModule,
        UIRouterModule.forChild({states: [SAMPLE_STATES]})
    ],
    declarations: [SampleComponent]
})

export class SampleModule {
}