import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { SurferModel } from '../../models/conv'
// import {environment} from '../../environments/environment';


// const httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// };

@Injectable() 
export class ConsultaService {

  http:HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getTodo(): Observable<SurferModel[]>{
    return this.http.get<SurferModel[]>(`https://safapi.herokuapp.com/v1/surfista`)
    .pipe(
      map(res => res)
    )
  }

  saveBet(aposta): Observable<any> {
    return this.http.post(`https://safapi.herokuapp.com/v1/aposta`, aposta.value);
  }

  listBet(email): Observable<any> {
    return this.http.get( `https://safapi.herokuapp.com/v1/aposta/${email}`).pipe(
      map(res => res)
    );
  }



 



//   SalvarResultado(resultado): Observable < any > {
//     return this.http.post(`${}/api/resultados`, JSON.stringify(resultado.value), httpOptions)
//       .map(res => res);
//   }

}