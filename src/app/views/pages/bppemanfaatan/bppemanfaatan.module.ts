// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
// Core Module
import {CoreModule} from '../../../core/core.module';
import {PartialsModule} from '../../partials/partials.module';
// import { DashboardComponent } from './dashboard.component';
import {BppemanfaatanComponent} from './bppemanfaatan.component';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        PartialsModule,
        RouterModule.forChild([
            {
                path: '',
                component: BppemanfaatanComponent
            },
        ]),
    ],
    providers: [],
    declarations: [
        BppemanfaatanComponent,
    ]
})
export class BppemanfaatanModule {
}