import {Component, OnInit, ViewChild} from '@angular/core';
import {LayoutConfigService} from '../../../core/_base/layout';

@Component({
    selector: 'kt-bpdashboardproject',
    templateUrl: './bpdashboardreport.component.html',
    styleUrls: ['./bpdashboardreport.component.scss']
})
export class BpdashboardreportComponent implements OnInit {

    @ViewChild('lineChart1', {static: true}) private lineChart1Ref;
    linechart1: any;
    @ViewChild('lineChart2', {static: true}) private lineChart2Ref;
    linechart2: any;

    @ViewChild('barChart1', {static: true}) private barChart1Ref;
    barchart1: any;
    @ViewChild('barChart2', {static: true}) private barChart2Ref;
    barchart2: any;

    constructor(
        private layoutConfigService: LayoutConfigService
    ) {
    }

    ngOnInit() {
        this.loadChart();
    }

    loadChart() {
        this.linechart1 = new Chart(this.lineChart1Ref.nativeElement, {
            type: 'line',
            data: {
                labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei'],
                datasets: [
                    {
                        label: 'Jumlah Peserta',
                        backgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                        data: [
                            893030, 903202, 911100, 915032, 950000
                        ],
                        fill: true
                    }
                ]
            },
            options: {
                title: {
                    display: false,
                },
                tooltips: {
                    intersect: false,
                    mode: 'nearest',
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
                        display: true,
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Bulan'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        stacked: true,
                        gridLines: false,
                        ticks: {
                            padding: 0,
                            beginAtZero: false
                        }
                    }]
                }
            }
        });
        this.linechart2 = new Chart(this.lineChart2Ref.nativeElement, {
            type: 'line',
            data: {
                labels: ['21/2/2020', '22/2/2020', '23/2/2020', '24/2/2020', '25/2/2020', '26/2/2020', '27/2/2020', '28/2/2020'],
                datasets: [
                    {
                        label: 'NAB',
                        backgroundColor: this.layoutConfigService.getConfig('colors.state.success'),
                        data: [
                            10000, 11000, 15000, 16000, 17000, 18000, 18500, 19000
                        ],
                        fill: true
                    }
                ]
            },
            options: {
                title: {
                    display: false,
                },
                tooltips: {
                    intersect: false,
                    mode: 'nearest',
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
                        display: true,
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Tanggal'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        stacked: true,
                        gridLines: false,
                        ticks: {
                            padding: 0,
                            beginAtZero: false
                        }
                    }]
                }
            }
        });
        this.barchart1 = new Chart(this.barChart1Ref.nativeElement, {
            type: 'bar',
            data: {
                labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei'],
                datasets: [
                    {
                        label: 'Nilai Pemanfaatan',
                        backgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                        data: [
                            1000000000, 300000000, 500000000, 200000000, 250000000
                        ],
                        fill: true
                    }
                ]
            },
            options: {
                title: {
                    display: false,
                },
                tooltips: {
                    intersect: false,
                    mode: 'nearest',
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
                        display: true,
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Bulan'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        stacked: true,
                        gridLines: false,
                        ticks: {
                            padding: 0,
                            beginAtZero: false
                        }
                    }]
                }
            }
        });
        this.barchart2 = new Chart(this.barChart2Ref.nativeElement, {
            type: 'bar',
            data: {
                labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei'],
                datasets: [
                    {
                        label: 'Nilai Setoran',
                        backgroundColor: this.layoutConfigService.getConfig('colors.state.success'),
                        data: [
                            5000000000, 5100000000, 5100000000, 6000000000, 5000000000
                        ],
                        fill: true
                    }
                ]
            },
            options: {
                title: {
                    display: false,
                },
                tooltips: {
                    intersect: false,
                    mode: 'nearest',
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
                        display: true,
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Bulan'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        stacked: true,
                        gridLines: false,
                        ticks: {
                            padding: 0,
                            beginAtZero: false
                        }
                    }]
                }
            }
        });

    }

}
