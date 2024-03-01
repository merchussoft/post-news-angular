import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GamersoftnewsService} from "../../services/gamersoftnews.service";
import {NgxSpinnerService} from "ngx-spinner";
import { Meta, Title  } from '@angular/platform-browser';
import { Location } from '@angular/common';

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
    private titleService: Title,
    private location: Location
  ) {
    this.cod_news = this.route.snapshot.paramMap.get('cod_news');
  }

  ngOnInit() {
    this.spinner.show();
    this.http.traerPost(Number(this.cod_news))
      .subscribe(response => {
        this.spinner.hide();
        const currentUrl = this.location.prepareExternalUrl(this.location.path());
        const origin = window.location.origin;
        let data_response = response[0]
        this.meta.updateTag({ property: 'og:image', content: data_response.url_img});
        this.meta.updateTag({ property: 'og:title', content: data_response.title});
        this.meta.updateTag({ property: 'og:type', content: 'article'});
        this.meta.updateTag({ property: 'og:description', content: data_response.description});
        this.meta.updateTag({ property: 'og:url', content: `${origin}${currentUrl}`});

        this.meta.addTag({ rel: 'canonical', href: `${origin}${currentUrl}` });

        this.titleService.setTitle(data_response.title);
        this.data_post_one = response;
      })
  }
}
