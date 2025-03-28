import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//routing to the backend
export class PersonService {
  private apiUrl = 'http://localhost:5000/person';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createPerson(person: any): Observable<any> {
    return this.http.post(this.apiUrl, person);
  }

  updatePerson(id: string, person: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, person);
  }

  deletePerson(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
