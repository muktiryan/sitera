// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
// import { DashboardComponent } from './dashboard.component';
import { PengajuanredemptionComponent } from '../pengajuanredemption/pengajuanredemption.component';

@NgModule({
	imports: [
        CommonModule,
        CoreModule,
		PartialsModule,
		RouterModule.forChild([
			{
				path: '',
				component: PengajuanredemptionComponent
			},
		]),
	],
	providers: [],
	declarations: [
		PengajuanredemptionComponent,
	]
})
export class PengajuanredemptionModule {
}