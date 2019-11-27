import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
// RXJS
import {tap} from 'rxjs/operators';
import {merge} from 'rxjs';
// Crud
import {QueryParamsModel} from '../../../core/_base/crud';
// Layout
import {DataTableItemModel, DataTableService} from '../../../core/_base/layout';
import {DataTableDataSource} from '../../partials/content/widgets/general/data-table/data-table.data-source';


export interface Widget1Data {
    title: string;
    value: string;
    valueClass?: string;
}

@Component({
    selector: 'kt-bppencadangan',
    templateUrl: './bppencadangan.component.html',
    styleUrls: ['./bppencadangan.component.scss']
})
export class BppencadanganComponent implements OnInit {

    @Input() data: Widget1Data[];

    dataSource: DataTableDataSource;
    dataSourceRedemption: any;
    displayedColumns = ['bulan', 'total_peserta', 'total_redemption', 'total_dibayarkan'];
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    selection = new SelectionModel<DataTableItemModel>(true, []);

    /**
     * Component constructor
     *
     * @param dataTableService: DataTableService
     */
    constructor(private dataTableService: DataTableService) { }

    ngOnInit() {
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

        /* Data load will be triggered in two cases:
        - when a pagination event occurs => this.paginator.page
        - when a sort event occurs => this.sort.sortChange
        **/
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                tap(() => {
                    this.loadItems();
                })
            )
            .subscribe();

        // Init DataSource
        this.dataSource = new DataTableDataSource(this.dataTableService);

        this.dataSourceRedemption = [
            {
                bulan: 'Januari',
                total_peserta: 500,
                total_redemption: 10000000000,
                total_dibayarkan: 10000000000
            },
            {
                bulan: 'Februari',
                total_peserta: 200,
                total_redemption: 9000000000,
                total_dibayarkan: 8500000000
            },
            {
                bulan: 'Maret',
                total_peserta: 250,
                total_redemption: 8000000000,
                total_dibayarkan: 7000000000
            },
            {
                bulan: 'April',
                total_peserta: 300,
                total_redemption: 3000000000,
                total_dibayarkan: 3000000000
            },
            {
                bulan: 'Mei',
                total_peserta: 330,
                total_redemption: 5000000000,
                total_dibayarkan: 5000000000
            },
            {
                bulan: 'Juni',
                total_peserta: 450,
                total_redemption: 5000000000,
                total_dibayarkan: 5000000000
            },
        ];
        // First load
        this.loadItems(true);

        this.data = [
            {
                title: 'Deposito',
                value: 'IDR 500.000.000.000,00',
                valueClass: 'kt-font-brand'
            }, {
                title: 'Giro',
                value: 'IDR 350.000.000.000,00',
                valueClass: 'kt-font-success'
            }, {
                title: 'Giro',
                value: 'IDR 250.000.000.000,00',
                valueClass: 'kt-font-brand'
            },
        ];

    }

    /**
     * Load items
     *
     * @param firstLoad: boolean
     */
    loadItems(firstLoad: boolean = false) {
        const queryParams = new QueryParamsModel(
            {},
            this.sort.direction,
            this.sort.active,
            this.paginator.pageIndex,
            firstLoad ? 6 : this.paginator.pageSize
        );
        this.dataSource.loadItems(queryParams);
        this.selection.clear();
    }
}
