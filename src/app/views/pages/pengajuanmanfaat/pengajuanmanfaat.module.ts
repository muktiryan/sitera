// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
// import { DashboardComponent } from './dashboard.component';
import { PengajuanmanfaatComponent } from '../pengajuanmanfaat/pengajuanmanfaat.component';

@NgModule({
	imports: [
        CommonModule,
        CoreModule,
		PartialsModule,
		RouterModule.forChild([
			{
				path: '',
				component: PengajuanmanfaatComponent
			},
		]),
	],
	providers: [],
	declarations: [
		PengajuanmanfaatComponent,
	]
})
export class PengajuanmanfaatModule {
}