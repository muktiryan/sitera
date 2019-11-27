// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
// Core Module
import {CoreModule} from '../../../core/core.module';
import {PartialsModule} from '../../partials/partials.module';
// import { DashboardComponent } from './dashboard.component';
import {BppengerahanComponent} from '../bppengerahan/bppengerahan.component';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule, MatSnackBarModule,
    MatSortModule,
    MatTableModule, MatTabsModule, MatTooltipModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        PartialsModule,
        MatButtonModule,
        MatMenuModule,
        MatSelectModule,
        MatInputModule,
        MatTableModule,
        MatAutocompleteModule,
        MatRadioModule,
        MatIconModule,
        MatNativeDateModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatCardModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatTabsModule,
        MatTooltipModule,
        RouterModule.forChild([
            {
                path: '',
                component: BppengerahanComponent
            },
        ]),
    ],
    providers: [],
    declarations: [
        BppengerahanComponent,
    ]
})
export class BppengerahanModule {
}
