import {Component, OnInit, ViewChild} from '@angular/core';
import {LayoutConfigService} from '../../../core/_base/layout';

@Component({
    selector: 'kt-bppemanfaatan',
    templateUrl: './bppemanfaatan.component.html',
    styleUrls: ['./bppemanfaatan.component.scss']
})
export class BppemanfaatanComponent implements OnInit {

    @ViewChild('barChart', {static: true}) private chartRef;
    barchart: any;

    constructor(
        private layoutConfigService: LayoutConfigService
    ) {
    }

    ngOnInit() {

        this.loadChart();
    }

    loadChart() {
        this.barchart = new Chart(this.chartRef.nativeElement, {
            type: 'horizontalBar',
            data: {
                labels: ['Mandiri', 'BNI', 'BRI', 'BTN', 'BCA', 'Maybank', 'CIMB Niaga', 'BPD Jateng'],
                datasets: [
                    {
                        label: 'Jumlah Penyaluran',
                        backgroundColor: this.layoutConfigService.getConfig('colors.state.info'),
                        data: [
                            700, 600, 550, 500, 400, 350, 300, 250
                        ]
                    },
                    {
                        label: 'Total Disalurkan',
                        backgroundColor:
                            'rgb(135,206,235)',
                        data: [
                            32000000000, 29000000000, 28000000000, 27000000000, 15000000000, 12000000000, 5000000000, 4000000000
                        ]
                    },
                    {
                        label: 'Jumlah Efek',
                        backgroundColor: this.layoutConfigService.getConfig('colors.state.warning'),
                        data: [
                            32000, 29000, 28000, 27000, 15000, 12000, 5000, 4000

                        ]
                    },
                ]
            },
            options: {
                title: {
                    display: false,
                },
                tooltips: {
                    intersect: false,
                    mode: 'index',
                    /*callbacks: {
                        label(tooltipItems, data) {
                            console.log(tooltipItems.yLabel + ' - ' + data);
                            // return tooltipItems.yLabel + ' €';
                        }
                    },*/
                    // mode: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    xAxes: [{
                        display: false,
                        stacked: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Bulan'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        stacked: true,
                        gridLines: false,
                        ticks: {
                            padding: 10,
                            beginAtZero: false
                        }
                    }]
                }
            }
        });

    }

}
