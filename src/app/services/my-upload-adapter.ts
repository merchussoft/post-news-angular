import { HttpClient} from "@angular/common/http";

export class MyUploadAdapter {
  constructor(private loader: any, private http: HttpClient) {}


  upload() {
    return this.loader.file
      .then((file: any) => {
        return new Promise((resolve, reject) => {
          this.uploadFileToMinIO(file)
            .subscribe((url: string) => {
              resolve({
                default: url
              });
            }, (error: any) => {
              reject(`Error uploading file to MinIO: ${error}`);
            });
        });
      });
  }

  private uploadFileToMinIO(file: any) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>('http://192.168.1.5:3017/api/news/upload_to_minio', formData);
  }
}
