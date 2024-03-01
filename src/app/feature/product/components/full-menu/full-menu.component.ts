import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';
import { PropMenus } from 'src/app/models/api/productInfoModel';
import { ProductMenu } from 'src/app/models/ui/productMenusModel';
import { ProductChoice } from 'src/app/models/ui/productChoicesModel';
import { ActivatedRoute, Params } from '@angular/router';
import { GetPropertyMenusService } from 'src/app/services/get-property-menus.service';

@Component({
  selector: 'app-full-menu',
  templateUrl: './full-menu.component.html',
  styleUrls: ['./full-menu.component.scss']
})
export class FullMenuComponent implements OnInit {
  propMenus: PropMenus;
  rawMenus: ProductMenu[];
  rawChoices: ProductChoice[];
  menus: Array<any> = new Array<any>();
  name = 'Machan Pannipitiya';
  location = 'Colombo 01';

  constructor(private route: ActivatedRoute, private getPropertyMenuService: GetPropertyMenusService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.getPropertyMenuService.getProductMenus(params.code).subscribe(
        data => {
          this.rawMenus = data.propMenus.menus;
          this.rawChoices = data.propMenus.choices;
          this.setMenus();
        }
      );
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


}
