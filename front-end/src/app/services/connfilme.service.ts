import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Filme } from '../Filme';
import { environment } from 'src/environments/environments';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})
export class ConnfilmeService {

  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/filmes`;

  constructor(private http: HttpClient) { }

  // Método para resgatar todos os filmes
  getFilmes(): Observable<Response<Filme[]>> {
    return this.http.get<Response<Filme[]>>(this.apiUrl);
  }


  // resgata filme individual
  getFilme(id: number ): Observable<Response<Filme>> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Response<Filme>>(url);
  }


  // solicitação de post no banco de dados
  createFilme(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }


  // método para remover um filme
  removeFilme(id: number){
    const url = `${this.apiUrl}/${id}`
    return this.http.delete(url);
  }

  // update do filme
  updateFilme(id: number, formData: FormData): Observable<FormData>{
    const url = `${this.apiUrl}/${id}`
    return this.http.put<FormData>(url, formData);
  }
  
}
