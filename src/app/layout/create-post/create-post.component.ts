import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {GamersoftnewsService} from "../../services/gamersoftnews.service";
import {NgxSpinnerService} from "ngx-spinner";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {MyUploadAdapter} from "../../services/my-upload-adapter";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  public Editor = ClassicEditor;
  selectedFile: File | undefined;



  data_categories: any = [];

  constructor(
    private http: GamersoftnewsService,
    private spinner: NgxSpinnerService,
    private httpC: HttpClient) {}


  ngOnInit() {
    this.http.categories().subscribe((response) => {
      this.data_categories = response;
    })

  }

  form_gamerpostnews = {
    title: "",
    description:"",
    content: '',
    cod_categoria: ''
  }

  private imageUploadPluginFactory(editor: any) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
      return new MyUploadAdapter(loader, this.httpC);
    };
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  submitGamerPostNews(form: NgForm){
    this.spinner.show();
    const form_data = new FormData();
    form_data.append('title', this.form_gamerpostnews.title);
    form_data.append('description', this.form_gamerpostnews.description);
    form_data.append('content', this.form_gamerpostnews.content);
    form_data.append('cod_categoria', this.form_gamerpostnews.cod_categoria);
    // @ts-ignore
    form_data.append('imagen', this.selectedFile);

    console.log(form_data);
    this.http.subirPost(form_data)
      .subscribe(response => {
        this.spinner.hide();
        this.form_gamerpostnews = {
          title: "",
          description:"",
          content: '',
          cod_categoria: ''
        }
      })
  }


}


