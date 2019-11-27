import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
// Core Module
import {CoreModule} from '../../../core/core.module';
// import { DashboardComponent } from './dashboard.component';
import {BppencadanganComponent} from '../bppencadangan/bppencadangan.component';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        RouterModule.forChild([
            {
                path: '',
                component: BppencadanganComponent
            },
        ]),
    ],
    providers: [],
    declarations: [
        BppencadanganComponent,
    ]
})
export class BppencadanganModule {
}