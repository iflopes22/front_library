import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Register } from './../register/register.model';
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
    // ALTERAR A PORTA P BATER NO
  baseUrl = "http://localhost:3001/register";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(register: Register): Observable<Register> {
    //return this.http.post<Register>(`${this.baseUrl}/save`, register);
    return this.http.post<Register>(this.baseUrl, register).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Register[]> {
    //return this.http.get<Registert[]>(`${this.baseUrl}/listAll`);
    return this.http.get<Register[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Register> {
    //return this.http.get<Register>(`${this.baseUrl}/getById/${id}`);
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Register>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(register: Register): Observable<Register> {
    //return this.http.put<Register>(`${this.baseUrl}/update/${register.id}`, register);
    const url = `${this.baseUrl}/${register.id}`;
    return this.http.put<Register>(url, register).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Register> {
    //return this.http.delete<Register>(`${this.baseUrl}/delete/${id}`);
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Register>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
