import { Injectable } from '@angular/core';
import {Personne} from './Personne';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {distinctUntilChanged, map, throttleTime} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private apiUrl = 'http://localhost:3000/api/personnes';
  personnes: Personne [];
  personne: Personne;
  constructor(private http: HttpClient) {
    this.initFakePersonne();
  }
  getCvs() {
    return this.personnes ;
  }
  loadPersonnes() {
    return this.http.get<Personne []>(this.apiUrl);
  }
  loadPersonnesNames() {
    return this.http.get<Personne []>(this.apiUrl).pipe(
      map(persons => persons.map(person => person.name))
    );
  }
  private initFakePersonne() {
    this.personnes = [
      new Personne(2,
        1234,
        'Sellaouti',
        'Aymen',
        'Enseignant',
        'as.jpg',
        36), new Personne(2,
        5678,
        'Sellaouti',
        'Aymen',
        'Enseignant',
        'as.jpg',
        36)
    ];
  }
  addPersonne(personne: Personne) {
    return this.http.post(this.apiUrl, personne);
  }
  saveCvs() {
    console.log('save Cvs');
    return this.http.put(this.apiUrl, this.personnes);
  }
  searchPersonnes(name: string): Observable<Personne[]> {
    if (!name.trim()) {
      return of([]);
    }
    // const filter = {name: name};
    const filter = (`{"where":{"name":{"like":"%${name}%"}}}`);
    const params = new HttpParams()
      .set('filter', filter);
    console.log(filter);
    //  params.set('filter', `{"name" : "${name}"}`);
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json'
    //   }),
    //   params : params
    // };
    //  ?filter=${filter}
    return this.http.get<Personne[]>(`${this.apiUrl}`, {params}).pipe(
      throttleTime(4000),
      distinctUntilChanged()
    );
  }
}
