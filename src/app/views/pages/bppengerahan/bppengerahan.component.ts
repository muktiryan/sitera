import {Component, OnInit, ViewChild, Input} from '@angular/core';
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
import {LayoutConfigService, SparklineChartOptions} from '../../../core/_base/layout';

@Component({
    selector: 'kt-bppengerahan',
    templateUrl: './bppengerahan.component.html',
    styleUrls: ['./bppengerahan.component.scss']
})
export class BppengerahanComponent implements OnInit {

    dataSource: DataTableDataSource;
    dataSource3: any;
    displayedColumns3 = ['nama_instansi', 'nilai_awal', 'nilai_iuran', 'total_nilai', 'total_kepemilikan', 'total_nav', 'total_pengembangan', 'jumlah_pegawai'];

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    selection = new SelectionModel<DataTableItemModel>(true, []);

    constructor(
        private dataTableService: DataTableService,
        private layoutConfigService: LayoutConfigService
    ) {
    }

    ngOnInit() {
        this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                tap(() => {
                    this.loadItems();
                })
            )
            .subscribe();

        this.dataSource = new DataTableDataSource(this.dataTableService);

        this.dataSource3 = [
            {
                nama_instansi: 'Kementerian Keuangan',
                nilai_awal: 500000000,
                nilai_iuran: 510000000,
                total_nilai: 1500000000,
                total_kepemilikan: 1500000,
                total_nav: 1550000,
                total_pengembangan: 165000000000,
                jumlah_pegawai: 15500,
            },
            {
                nama_instansi: 'Kementerian Perindustrian',
                nilai_awal: 200000000,
                nilai_iuran: 200000000,
                total_nilai: 2000000000,
                total_kepemilikan: 1900000,
                total_nav: 1900000,
                total_pengembangan: 220000000000,
                jumlah_pegawai: 19000,
            },
            {
                nama_instansi: 'TNI AL',
                nilai_awal: 700000000,
                nilai_iuran: 701000000,
                total_nilai: 1200000000,
                total_kepemilikan: 3200000,
                total_nav: 3200000,
                total_pengembangan: 132000000000,
                jumlah_pegawai: 32000,
            },
            {
                nama_instansi: 'TNI AD',
                nilai_awal: 800000000,
                nilai_iuran: 808000000,
                total_nilai: 3000000000,
                total_kepemilikan: 1000000,
                total_nav: 1000000,
                total_pengembangan: 330000000000,
                jumlah_pegawai: 10000,
            },
            {
                nama_instansi: 'POLRI',
                nilai_awal: 900000000,
                nilai_iuran: 910000000,
                total_nilai: 4000000000,
                total_kepemilikan: 2500000,
                total_nav: 2500000,
                total_pengembangan: 440000000000,
                jumlah_pegawai: 25000,
            },
        ];

        this.loadItems(true);

    }

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
