import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
// import {environment} from '../../environments/environment';


// const httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// };

@Injectable() 
export class RankingService {

  http:HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getRankingGold():  Observable < any > {
    return this.http.get(`http://13.58.115.13:5000/v1/aposta/jbay`)
    .pipe(
      map(res => res)
    )
  }

  getRankingBells():  Observable < any > {
    return this.http.get(`http://13.58.115.13:5000/v1/aposta/bells`)
    .pipe(
      map(res => res)
    )
  }

  


//   SalvarResultado(resultado): Observable < any > {
//     return this.http.post(`${}/api/resultados`, JSON.stringify(resultado.value), httpOptions)
//       .map(res => res);
//   }

}
