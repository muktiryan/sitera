// Angular
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// Partials
import {PartialsModule} from '../partials/partials.module';
// Pages
import {CoreModule} from '../../core/core.module';
import {PengajuanmanfaatComponent} from './pengajuanmanfaat/pengajuanmanfaat.component';
import {PengajuanredemptionComponent} from './pengajuanredemption/pengajuanredemption.component';
// import { BppengajuanComponent } from './bppengajuan/bppengajuan.component';
// import { BpkepesertaanComponent } from './bpkepesertaan/bpkepesertaan.component';
// import { BppencadanganComponent } from './bppencadangan/bppencadangan.component';
// import { BppengerahanComponent } from './bppengerahan/bppengerahan.component';

// BppengajuanComponent, BpkepesertaanComponent, BppencadanganComponent, BppengerahanComponent
@NgModule({
    declarations: [PengajuanmanfaatComponent, PengajuanredemptionComponent],
    exports: [],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        CoreModule,
        PartialsModule,
    ],
    providers: []
})
export class PagesModule {
}
