import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bond } from './bond';

@Injectable({
  providedIn: 'root'
})
export class BondService {
  private bondsUrl = '/assets/data/bond_hs_z_page_n_2.json';
  constructor(
    private http: HttpClient
  ) { }

  getBonds(): Observable<Bond[]> {
    return this.http.get<Bond[]>(this.bondsUrl);
  }
}
