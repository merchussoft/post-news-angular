import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GamersoftnewsService} from "../../services/gamersoftnews.service";
import {NgxSpinnerService} from "ngx-spinner";
import { Meta, Title  } from '@angular/platform-browser';

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
    private spinner: NgxSpinnerService,
    private meta: Meta,
    private titleService: Title
  ) {
    this.cod_news = this.route.snapshot.paramMap.get('cod_news');
  }

  ngOnInit() {
    this.spinner.show();
    this.http.traerPost(Number(this.cod_news))
      .subscribe(response => {
        this.spinner.hide();
        console.log(response[0]);
        let data_response = response[0]
        this.meta.updateTag({ property: 'og:image', content: data_response.url_img});
        this.meta.updateTag({ property: 'og:title', content: data_response.title});
        this.titleService.setTitle(data_response.title);
        this.data_post_one = response;
      })
  }
}
