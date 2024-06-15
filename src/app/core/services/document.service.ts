import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  url = 'http://localhost:8082/api/document';

  constructor(private http: HttpClient) {}

  /*
   * Upload Profil Photo
   */
  uploadProfilPhoto(file: File, userId: number): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('files', file, file.name);

    return this.http.post<any>(`${this.url}/profile/${userId}`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  /*
   * Download Profil Photo
   */
  downloadProfilPhoto(docId: number): Observable<Blob> {
    return this.http.get(`${this.url}/${docId}`, { responseType: 'blob' });
  }

  /*
   * Upload Dovs For Ticket
   */
  uploadDocForTicket(files: File[], icketId: number) {
    const formData = new FormData();

    Array.from(files).forEach((file) =>
      formData.append('files', file, file.name)
    );

    return this.http.post<any>(`${this.url}/ticket/${icketId}`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }
}
