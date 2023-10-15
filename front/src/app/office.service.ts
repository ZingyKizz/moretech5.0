import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {
  constructor(private http: HttpClient) { }

  getOffices(service: string = "Все услуги"): Observable<any[]> {
    if (service == "Все услуги") {
      return this.http.get<any[]>("http://0.0.0.0:5000/getBranches/?lat=55.7133833&lon=37.6747228")
    } else {
      return this.http.get<any[]>("http://0.0.0.0:5000/getBranches/?lat=55.7133833&lon=37.6747228&service_title=" + service)

    }
  }

  getOffice(id: number): Observable<any[]> {
    return this.http.get<any[]>("http://0.0.0.0:5000/branchInfoById/?id=" + id)
  }
}
