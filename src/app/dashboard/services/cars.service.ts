import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//para ser peticiones http importamos el modulo que viene algular por defecto 
import {environment} from '../../../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private CarUrl = `${environment.apiUrl}/cars`;

  constructor(private http:HttpClient) {}//aceder a todo lo que hay en HttpClient

  prepareHeaders(){
    return{
     headers: new HttpHeaders({ //headers(postman) se piden para hacer todas las peticiones http
      'content-Type': 'application/json',
     })
    }
  }

  getCars(){
    //vamos a conectarmos con lo que tenemos en el backend
    return this.http.get(this.CarUrl,this.prepareHeaders())
     //rxjs(maneja la reactividad(que cuando pase algo el mismo se actualice y se ejecute) )
  }
  getCar(id:string){
    return this.http.get(`${this.CarUrl}/${id}`,this.prepareHeaders())

  }
}
