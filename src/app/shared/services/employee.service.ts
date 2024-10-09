import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  list(): Observable<any>{
    return this.http.get(
      `${environment.backendBaseUrl}/api/v1/employees`
    );
  }



}
