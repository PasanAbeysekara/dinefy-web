import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductMenu } from 'src/app/models/ui/productMenusModel';
import { ProductChoice } from 'src/app/models/ui/productChoicesModel';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';
import { SelectedChoice } from 'src/app/shared/shared-product-menu/shared-product-menu.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() choiceSelected: EventEmitter<SelectedChoice> = new EventEmitter();
  rawMenus: ProductMenu[];
  rawChoices: ProductChoice[];
  menus: Array<any> = new Array<any>();
  productMenuSub: Subscription;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.productMenuSub = this.store.select(store => store.product.list)
    .subscribe((data) => {
        this.rawMenus = data.propMenus.menus;
        this.rawChoices = data.propMenus.choices;
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

  choiceSelectedHandler(selectedChoice: SelectedChoice){
    this.choiceSelected.emit(selectedChoice);
  }

  ngOnDestroy(): void {
    if(this.productMenuSub){
      this.productMenuSub.unsubscribe();
    }
    
  }

}
