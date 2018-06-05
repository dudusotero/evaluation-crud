import { Observable } from 'rxjs/Observable';

export interface IService {

  list(): Observable<any>;
  delete(id: number): Observable<any>;
  getById(id: number): Observable<any>;
  add(data: any): Observable<any>;
  edit(id: number, data: any): Observable<any>;
}
