import { Component, OnInit, Input } from '@angular/core';
import { ResultModel } from '../../../../models/api/resultModel';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  imgUrl = 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg';
  url: string;

  @Input() model: ResultModel;

  constructor() {

  }

  ngOnInit(): void {
    const sampleResName = 'Machan Pannipitiya';  // This should be removed later
    const sampleResId = 1;  // This should be removed later
    this.url = '/product/' + sampleResName.replace(/ /g, '-') + '/' + sampleResId;
  }

}
