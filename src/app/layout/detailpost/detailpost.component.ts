import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GamersoftnewsService} from "../../services/gamersoftnews.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-detailpost',
  templateUrl: './detailpost.component.html',
  styleUrls: ['./detailpost.component.scss']
})
export class DetailpostComponent implements OnInit {

  cod_news: string | null;
  data_post_one: any = []

  constructor(
    private route: ActivatedRoute,
    private http: GamersoftnewsService,
    private spinner: NgxSpinnerService
  ) {
    this.cod_news = this.route.snapshot.paramMap.get('cod_news');
  }

  ngOnInit() {
    this.spinner.show();
    this.http.traerPost(Number(this.cod_news))
      .subscribe(response => {
        this.spinner.hide();
        this.data_post_one = response;
      })
  }
}
