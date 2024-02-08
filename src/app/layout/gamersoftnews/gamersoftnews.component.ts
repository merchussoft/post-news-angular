import { Component, OnInit } from '@angular/core';
import { GamersoftnewsService} from "../../services/gamersoftnews.service";
import {NgxSpinnerService} from "ngx-spinner";
@Component({
  selector: 'app-gamersoftnews',
  templateUrl: './gamersoftnews.component.html',
  styleUrls: ['./gamersoftnews.component.scss']
})
export class GamersoftnewsComponent implements OnInit{

  data_result: any = []
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
