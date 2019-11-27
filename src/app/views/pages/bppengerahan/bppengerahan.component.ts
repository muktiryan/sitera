import {Component, OnInit} from '@angular/core';
import {DataTableService, LayoutConfigService, SparklineChartOptions} from '../../../core/_base/layout';

@Component({
    selector: 'kt-bppengajuan',
    templateUrl: './bppengerahan.component.html',
    styleUrls: ['./bppengerahan.component.scss']
})
export class BppengerahanComponent implements OnInit {

    chartLine: SparklineChartOptions;

    constructor(
        private layoutConfigService: LayoutConfigService
    ) { }

    ngOnInit() {
        this.chartLine = {
            data: [10000000000, 12000000000, 11000000000, 12500000000, 12600000000],
            color: this.layoutConfigService.getConfig('colors.state.primary'),
            border: 3,
            tooltip: true
        };
    }

}
