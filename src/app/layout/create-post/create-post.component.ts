import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {NgForm} from '@angular/forms';
import {GamersoftnewsService} from "../../services/gamersoftnews.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {


  constructor(private http: GamersoftnewsService, private spinner: NgxSpinnerService) {
  }

  public Editor = ClassicEditor;
  config_ckeditor = {
    simpleUpload: {
      uploadUrl: 'http://127.0.0.1:9001/prueba'
    }
  }

  form_gamerpostnews = {
    title: "",
    description:"",
    content: ''
  }
  content: any;

  submitGamerPostNews(form: NgForm){
    console.log(this.form_gamerpostnews);
    this.spinner.show();
    this.http.subirPost(this.form_gamerpostnews)
      .subscribe(response => {
        this.spinner.hide();
        this.form_gamerpostnews = {
          title: "",
          description:"",
          content: ''
        }
      })
  }


}


