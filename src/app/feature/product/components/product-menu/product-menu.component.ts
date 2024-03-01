import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErgMenuComponent } from '../erg-menu/erg-menu.component';
import { PropMenus } from 'src/app/models/api/productInfoModel';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';
import { Subscription } from 'rxjs';
import { ProductMenu } from 'src/app/models/ui/productMenusModel';
import { ProductChoice } from 'src/app/models/ui/productChoicesModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.scss']
})
export class ProductMenuComponent implements OnInit {
  productInfoSub: Subscription;
  rawMenus: ProductMenu[];
  rawChoices: ProductChoice[];
  propertyCode: string;
  menus: Array<any> = new Array<any>();
  constructor(public dialog: MatDialog, private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.productInfoSub = this.store.select(store => store.product.list)
    .subscribe((data) => {
        this.rawMenus = data.propMenus.menus;
        this.rawChoices = data.propMenus.choices;
        this.propertyCode = data.code;
        this.setMenus();
    }, (error) => {
        console.log(error);
    }); 
  }

  setMenus(): void {
    this.rawMenus.forEach(i => {
      const menuCategories = [];
      i.menuCategories.forEach(j => {
        const categoryChoices = [];
        j.categoryChoices.forEach(k => {
          const choice = this.rawChoices.find(l => l.propChoiceId.choiceId == k.menuChoiceID.choiceId);
          categoryChoices.push(choice);
        });
        const category = {
          menuCategoryId : j.menuCategoryId,
          name : j.name,
          // tslint:disable-next-line: object-literal-shorthand
          categoryChoices : categoryChoices,
        };

        menuCategories.push(category);
      });

      const menu = {
        menuId : i.menuId,
        name: i.name,
        descrption: i.description,
        // tslint:disable-next-line: object-literal-shorthand
        menuCategories : menuCategories
      };

      this.menus.push(menu);
    });
  }

  openMenu(): void {
    const dialogRef = this.dialog.open(ErgMenuComponent, {
      panelClass: ['modal--menu'],
      data: this.menus
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  goToFullMenuPage() {
    this.router.navigate([ this.router.url + '/menus']);
  }

  ngOnDestroy(): void {
    if (this.productInfoSub){
      this.productInfoSub.unsubscribe();
    }
  }
}
