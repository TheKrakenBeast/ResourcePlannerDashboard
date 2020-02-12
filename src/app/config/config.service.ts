import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Config} from './Config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    console.log('Generic data service connected...');
  }

  getData(endpoint: string): Observable<Config> {
    return this.http.get<Config>(`${this.url}${endpoint}`);
  }
}

