// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
// import { DashboardComponent } from './dashboard.component';
// import { BppengajuanComponent } from '../bppengajuan/bppengajuan.component';
import {BppengajuanComponent} from './bppengajuan.component';

@NgModule({
	imports: [
        CommonModule,
        CoreModule,
		PartialsModule,
		RouterModule.forChild([
			{
				path: '',
				component: BppengajuanComponent
			},
		]),
	],
	providers: [],
	declarations: [
		BppengajuanComponent,
	]
})
export class BppengajuanModule {
}