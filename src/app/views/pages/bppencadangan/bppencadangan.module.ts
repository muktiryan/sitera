// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
// Core Module
import {CoreModule} from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
// import { DashboardComponent } from './dashboard.component';
import {BppencadanganComponent} from './bppencadangan.component';
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
        MatIconModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
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
