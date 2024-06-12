import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface MultipartFile {
  getName: string;

  getOriginalFilename: string;
  getContentType: string;

  isEmpty: boolean;

  getSize: number;

  // byte[] getBytes;
  // InputStream getInputStream;
  // default Resource getResource() {
  //     return new MultipartFileResource(this);
  // }
}

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  url = 'http://localhost:8082/api/document/';

  constructor(private http: HttpClient) {}

  /*
   * Upload Profil Photo
   */
  uploadProfilPhoto(file: File, userId: number): Observable<string> {
    return this.http.post<string>(this.url + 'profile/' + userId, file);
  }
}
