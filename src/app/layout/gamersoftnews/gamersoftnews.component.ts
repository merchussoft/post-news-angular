import { Component, OnInit } from '@angular/core';
import { GamersoftnewsService} from "../../services/gamersoftnews.service";
import {NgxSpinnerService} from "ngx-spinner";
import {PaginationInstance} from "ngx-pagination";
import {routerTransition, slideToBottom} from '../../router.animations'

@Component({
  selector: 'app-gamersoftnews',
  templateUrl: './gamersoftnews.component.html',
  styleUrls: ['./gamersoftnews.component.scss'],
  animations: [routerTransition()]
})
export class GamersoftnewsComponent implements OnInit{

  data_result: any = []
  paginacionConfig: PaginationInstance = {
    itemsPerPage: 10,
    currentPage: 1,
  };
  constructor(
    private gsn: GamersoftnewsService,
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
    this.spinner.show();
    this.gsn.traerDatos()
      .subscribe(response => {
        this.spinner.hide();
        this.data_result= response;
      })
  }
}
