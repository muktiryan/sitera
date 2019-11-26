// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../../core/core.module';
import { PartialsModule } from '../../../partials/partials.module';
// import { DashboardComponent } from './dashboard.component';
import { JobnewComponent } from '././jobnew.component';

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: JobnewComponent
			},
		]),
	],
	providers: [],
	declarations: [
		JobnewComponent,
	]
})
export class JobnewComponentModule {
}