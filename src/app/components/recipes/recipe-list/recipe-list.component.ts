import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a simply test', 'https://c-6rtwjumjzx7877x24x78jfwhmx2ehmtbx2ehtr.g00.chowhound.com/g00/3_c-6bbb.hmtbmtzsi.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fx78jfwhm.hmtb.htrx2fymzrgsfnqx2f6735x2f5x2fbbb.hmtbx78yfynh.htrx2ffx78x78jyx78x2f7569x2f54x2f85801_x78qtb_httpjw_utwp_8555c7555.oulx3fn65h.rfwpx3dnrflj_$/$/$/$/$/$/$/$/$')
  ];

  constructor() { }

  ngOnInit() {
  }

}
