import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
// RXJS
import { tap } from 'rxjs/operators';
import { merge } from 'rxjs';
// Crud
import { QueryParamsModel } from '../../../core/_base/crud';
// Layout
import { DataTableItemModel, DataTableService } from '../../../core/_base/layout';
import { DataTableDataSource } from '../../partials/content/widgets/general/data-table/data-table.data-source';
import { LayoutConfigService, SparklineChartOptions } from '../../../core/_base/layout';
// RxJS
import { Observable } from 'rxjs';
// NGRX
import { select, Store } from '@ngrx/store';
// State
import { AppState } from '../../../core/reducers';
import { currentUser, User } from '../../../core/auth';

export interface Widget1Data {
  title: string;
  value: string;
  valueClass?: string;
}

@Component({
  selector: 'kt-dashboardreport',
  templateUrl: './dashboardreport.component.html',
  styleUrls: ['./dashboardreport.component.scss']
})
export class DashboardreportComponent implements OnInit {
  //ngecek role user
  user$: Observable<User>;

  // Public properties
  @Input() data: Widget1Data[];
  // Public properties
  dataSource: DataTableDataSource;
  dataSource2: any;
  dataSource3: any;
  dataSource4: any;
  //kolom di html
  displayedColumns = ['id', 'pegawai', 'dana', 'kup', 'nav', 'total'];
  displayedColumns2 = ['bulan', 'nilai', 'kup', 'nav', 'nilaik', 'tglsetor', 'jmlsetor'];
  displayedColumns3 = ['nik', 'name', 'nak', 'tnilai', 'kup', 'nav', 'npsi'];
  displayedColumns4 = ['Nama Instansi', 'Nilai Awal Kepesertaan (Rp)', 'Total Nilai Kepesertaan (Rp)', 'Total Kepemilikan Unit Penyertaan', 'Total NAV', 'Nilai Pengembangan Saat ini (Rp)', 'Jumlah Pegawai'];
  // chartoption
  chartOptions1: SparklineChartOptions;
  chartOptions2: SparklineChartOptions;
  chartOptions3: SparklineChartOptions;
  chartOptions4: SparklineChartOptions;
  //
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  selection = new SelectionModel<DataTableItemModel>(true, []);

  /**
   * Component constructor
   *
   * @param dataTableService: DataTableService
   */
  constructor(
    private dataTableService: DataTableService,
    private layoutConfigService: LayoutConfigService,
		private store: Store<AppState>
  ) { }

  /**
* Set the paginator and sort after the view init since this component will
* be able to query its view for the initialized paginator and sort.
*/

  /**
   * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
   */

  /**
   * On init
   */
  ngOnInit() {
    //user role
    this.user$ = this.store.pipe(select(currentUser));
    //chart
    this.chartOptions1 = {
      data: [10, 14, 18, 11, 9, 12, 14, 17, 18, 14],
      color: this.layoutConfigService.getConfig('colors.state.brand'),
      border: 3
    };
    this.chartOptions2 = {
      data: [11, 12, 18, 13, 11, 12, 15, 13, 19, 15],
      color: this.layoutConfigService.getConfig('colors.state.danger'),
      border: 3
    };
    this.chartOptions3 = {
      data: [12, 12, 18, 11, 15, 12, 13, 16, 11, 18],
      color: this.layoutConfigService.getConfig('colors.state.success'),
      border: 3
    };
    this.chartOptions4 = {
      data: [11, 9, 13, 18, 13, 15, 14, 13, 18, 15],
      color: this.layoutConfigService.getConfig('colors.state.primary'),
      border: 3
    };

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
    this.dataSource2 = [
      {
        "bulan": "Januari",
        "nilai": 100000,
        "kup": 100,
        "nav": 1000,
        "nilaik": 101000,
        "tsetor": "2020-02-01",
        "jmlsetor": 100000,
      },
      {
        "bulan": "February",
        "nilai": 200000,
        "kup": 200,
        "nav": 1010,
        "nilaik": 202000,
        "tsetor": "2020-02-02",
        "jmlsetor": 100000,
      },
      {
        "bulan": "Maret",
        "nilai": 300000,
        "kup": 300,
        "nav": 1020,
        "nilaik": 302000,
        "tsetor": "2020-03-12",
        "jmlsetor": 100000,
      },
      {
        "bulan": "April",
        "nilai": 400000,
        "kup": 400,
        "nav": 1030,
        "nilaik": 402000,
        "tsetor": "2020-03-02",
        "jmlsetor": 100000,
      },
      {
        "bulan": "Mei",
        "nilai": 500000,
        "kup": 500,
        "nav": 1040,
        "nilaik": 502000,
        "tsetor": "2020-04-02",
        "jmlsetor": 100000,
      },

    ];
    this.dataSource3 = [
      {
        "nopes": "00109201082",
        "nama": "Justin Russo",
        "nak": 150000,
        "tnk": 1500000,
        "kup": 150,
        "nav": 1010,
        "nilaik": 1650000,
      },
      {
        "nopes": "20382938203",
        "nama": "Isabella Desmon",
        "nak": 200000,
        "tnk": 2000000,
        "kup": 150,
        "nav": 1010,
        "nilaik": 2200000,
      },
      {
        "nopes": "02039019312",
        "nama": "Aisyah Fatma",
        "nak": 120000,
        "tnk": 1200000,
        "kup": 120,
        "nav": 1010,
        "nilaik": 1320000,
      },
      {
        "nopes": "00309403943",
        "nama": "Rafael Wendy",
        "nak": 300000,
        "tnk": 3000000,
        "kup": 300,
        "nav": 1010,
        "nilaik": 3300000,
      },
      {
        "nopes": "00293029302",
        "nama": "Thomas Siahaan",
        "nak": 400000,
        "tnk": 4000000,
        "kup": 400,
        "nav": 1010,
        "nilaik": 4400000,
      },
    ];
    this.dataSource4 = [
      {
        "instansi": "Kementerian Keuangan",
        "nilaiawal": 500000000,
        "nilaipeserta": 1500000000000,
        "kup": 1500000,
        "nav": 1550000,
        "pengembangan": 165000000000,
        "jumlahpegawai": 15500,
      },
      {
        "instansi": "Kementerian Perindustrian",
        "nilaiawal": 200000000,
        "nilaipeserta": 2000000000000,
        "kup": 1900000,
        "nav": 1900000,
        "pengembangan": 220000000000,
        "jumlahpegawai": 19000,
      },
      {
        "instansi": "TNI AL",
        "nilaiawal": 700000000,
        "nilaipeserta": 1200000000000,
        "kup": 3200000,
        "nav": 3200000,
        "pengembangan": 132000000000,
        "jumlahpegawai": 32000,
      },
      {
        "instansi": "TNI AD",
        "nilaiawal": 800000000,
        "nilaipeserta": 3000000000000,
        "kup": 1000000,
        "nav": 1000000,
        "pengembangan": 330000000000,
        "jumlahpegawai": 10000,
      },
      {
        "instansi": "POLRI",
        "nilaiawal": 900000000,
        "nilaipeserta": 4000000000000,
        "kup": 2500000,
        "nav": 2500000,
        "pengembangan": 440000000000,
        "jumlahpegawai": 25000,
      },
    ];

    // First load
    this.loadItems(true);
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

  /* UI */

  /**
   * Returns item status
   *
   * @param status: number
   */
  getItemStatusString(status: number = 0): string {
    switch (status) {
      case 0:
        return 'Selling';
      case 1:
        return 'Sold';
    }
    return '';
  }

  /**
   * Returens item CSS Class Name by status
   *
   * @param status: number
   */
  getItemCssClassByStatus(status: number = 0): string {
    switch (status) {
      case 0:
        return 'success';
      case 1:
        return 'info';
    }
    return '';
  }

  /**
   * Returns item condition
   *
   * @param condition: number
   */
  getItemConditionString(condition: number = 0): string {
    switch (condition) {
      case 0:
        return 'New';
      case 1:
        return 'Used';
    }
    return '';
  }

  /**
   * Returns CSS Class name by condition
   *
   * @param condition: number
   */
  getItemCssClassByCondition(condition: number = 0): string {
    switch (condition) {
      case 0:
        return 'success';
      case 1:
        return 'info';
    }
    return '';
  }
}
