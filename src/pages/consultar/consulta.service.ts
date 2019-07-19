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
export class ConsultaService {

  http:HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getTodo(): Observable<SurferModel[]>{
    return this.http.get<SurferModel[]>(`http://18.220.22.75:5000/v1/surfista`)
    .pipe(
      map(res => res)
    )
  }

  editBet(editar): Observable<any> {
    return this.http.put(`http://18.220.22.75:5000/v1/aposta/${editar.value._id}`, editar.value);
  }

  listBet(email): Observable<any> {
    return this.http.get( `http://18.220.22.75:5000/v1/aposta/${email}`).pipe(
      map(res => res)
    );
  }

  listStage(): Observable<EtapaModel[]> {
    return this.http.get<EtapaModel[]>( `http://18.220.22.75:5000/v1/etapa`).pipe(
      map(res => res)
    );
  }

  getlastStage(): Observable<EtapaModel[]> {
    return this.http.get<EtapaModel[]>( `http://18.220.22.75:5000/v1/etapa/ultima`).pipe(
      map(res => res)
    );
  }


//   SalvarResultado(resultado): Observable < any > {
//     return this.http.post(`${}/api/resultados`, JSON.stringify(resultado.value), httpOptions)
//       .map(res => res);
//   }

}
