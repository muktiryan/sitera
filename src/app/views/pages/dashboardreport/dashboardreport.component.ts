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

  // Public properties
  @Input() data: Widget1Data[];
  // Public properties
  dataSource: DataTableDataSource;
  // displayedColumns = ['id', 'cManufacture', 'cModel', 'cMileage' ];
  displayedColumns = ['id', 'pegawai', 'dana', 'kup', 'nav', 'total'];
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
    private layoutConfigService: LayoutConfigService
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
