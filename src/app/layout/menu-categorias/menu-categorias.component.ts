import { Component } from '@angular/core';
import {GamersoftnewsService} from "../../services/gamersoftnews.service";

@Component({
  selector: 'app-menu-categorias',
  templateUrl: './menu-categorias.component.html',
  styleUrls: ['./menu-categorias.component.scss']
})
export class MenuCategoriasComponent {

  data_categories: any = [];

  constructor(private http: GamersoftnewsService) {
  }


  ngOnInit() {

    this.http.categories().subscribe((response) => {
      this.data_categories = response;
    })

  }

}
