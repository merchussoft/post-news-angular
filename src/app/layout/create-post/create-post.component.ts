import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {GamersoftnewsService} from "../../services/gamersoftnews.service";
import {NgxSpinnerService} from "ngx-spinner";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {MyUploadAdapter} from "../../services/my-upload-adapter";
import { HttpClient } from '@angular/common/http';

import { ImageUpload } from '@ckeditor/ckeditor5-image';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  public Editor = ClassicEditor;
  public editorConfig = {
    //plugins: [ 'imageUploadPluginFactory' ],
    toolbar: [ 'imageUpload', '|', 'heading', '|', 'bold', 'italic', '|', 'undo', 'redo' ]
  }

  constructor(private http: GamersoftnewsService, private spinner: NgxSpinnerService, private httpC: HttpClient) {
  }

  form_gamerpostnews = {
    title: "",
    description:"",
    content: ''
  }
  content: any;

  private imageUploadPluginFactory(editor: any) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
      return new MyUploadAdapter(loader, this.httpC);
    };
  }

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


