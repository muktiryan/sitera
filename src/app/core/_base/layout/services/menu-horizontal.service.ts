// Angular
import { Injectable } from '@angular/core';
// RxJS
import { BehaviorSubject } from 'rxjs';
// Object path
import * as objectPath from 'object-path';
// Services
import { MenuConfigService } from './menu-config.service';

@Injectable()
export class MenuHorizontalService {
	// Public properties
	menuListAdmin$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
	menuListKemenkeu$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
	menuListBpTappera$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
	menuListPesertaMandiri$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
	
	/**
	 * Service constructor
	 *
	 * @param menuConfigService: MenuConfigService
	 */
	constructor(private menuConfigService: MenuConfigService) {
		this.loadMenu();
	}

	/**
	 * Load menu list
	 */
	loadMenu() {
		// get menu list of two header
		const menuItemsAdmin: any[] = objectPath.get(this.menuConfigService.getMenus(), 'headerAdmin.items');
		this.menuListAdmin$.next(menuItemsAdmin);
		const menuItemsKemenkeu: any[] = objectPath.get(this.menuConfigService.getMenus(), 'headerKemenkeu.items');
		this.menuListKemenkeu$.next(menuItemsKemenkeu);
		const menuItemsBptappera: any[] = objectPath.get(this.menuConfigService.getMenus(), 'headerBptappera.items');
		this.menuListBpTappera$.next(menuItemsBptappera);
		const menuItemsPesertaMandiri: any[] = objectPath.get(this.menuConfigService.getMenus(), 'headerPesertaMandiri.items');
        this.menuListPesertaMandiri$.next(menuItemsPesertaMandiri);
    
	}

}
