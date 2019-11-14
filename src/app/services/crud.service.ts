import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  employeeBaseUrl: string = "http://localhost:3000/employee";

  constructor(private httpClient: HttpClient) { }


  /** get all employee list */
  getEmployees(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.employeeBaseUrl);
  }


  /** add array of object */
  // addToCart(employee: IEmployee[]): Observable<IEmployee> {
  //   return this.httpClient.post<IEmployee>(this.employeeBaseUrl, employee, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   })
  // }

  addEmployee(employee: any): Observable<any> {
    return this.httpClient.post<any>(this.employeeBaseUrl, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
  /** get id of employee by Id */
  getEmployeeId(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.employeeBaseUrl}/${id}`);

  }


  /** delete id of item list */
  deleteItems(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.employeeBaseUrl}/${id}`)
  }
  updateEmployee(employee: any): Observable<void> {
    return this.httpClient.put<void>(`${this.employeeBaseUrl}/${employee.id}`, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

}
