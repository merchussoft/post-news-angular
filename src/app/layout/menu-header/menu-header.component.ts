import { Component } from '@angular/core';
import {GamersoftnewsService} from "../../services/gamersoftnews.service";

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent {



  constructor(private http: GamersoftnewsService) {
  }


  ngOnInit(){

  }

}
