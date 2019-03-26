import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { SurferModel } from '../../models/conv'
import { EtapaModel } from '../../models/etapa';
// import {environment} from '../../environments/environment';


// const httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// };



@Injectable() 
export class ApostaService {

  http:HttpClient;



  constructor(http: HttpClient) {
    this.http = http;
  }

  getTodo(): Observable<SurferModel[]>{
    return this.http.get<SurferModel[]>(`http://13.58.115.13:5000/v1/surfista`)
    .pipe(
      map(res => res)
    )
  }

  saveBet(aposta): Observable<any> {
    return this.http.post(`http://13.58.115.13:5000/v1/aposta`, aposta.value);
  }

  listStage(): Observable<EtapaModel[]> {
    return this.http.get<EtapaModel[]>( `http://13.58.115.13:5000/v1/etapa`).pipe(
      map(res => res)
    );
  }



 



//   SalvarResultado(resultado): Observable < any > {
//     return this.http.post(`${}/api/resultados`, JSON.stringify(resultado.value), httpOptions)
//       .map(res => res);
//   }

}
