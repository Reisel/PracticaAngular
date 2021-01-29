import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  public comentarioId = new BehaviorSubject<string>("");
  id = this.comentarioId.asObservable();
  
  public apiURL: string = "https://6011beb791905e0017be577a.mockapi.io/ARTICLES_SECTION";

  constructor(private http: HttpClient) { }

  getComentarios(): Observable<any>{
    return this.http.get(this.apiURL)
  }

  getComentarioPorId(id:string): Observable<any>{
    return this.http.get(`${this.apiURL}/${id}`);
  }

  addComentario(body:Comment): Observable<any>{
    return this.http.post(this.apiURL, body);
  }

  actualizarComentario(id:string, body:string): Observable<any>{
    return this.http.put(`${this.apiURL}/${id}`, body);
  }

  borrarComentario(id:string): Observable<any>{
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
