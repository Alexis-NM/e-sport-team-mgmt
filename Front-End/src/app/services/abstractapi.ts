import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export abstract class AbstractApi<T> {
  abstract base_service: string;

  constructor(protected http: HttpClient) {}

  /**
   * Recupere un seul article
   * @param rId : id de l'article
   * @returns l'article demande
   */
  getById(rId: number): Observable<T> {
    return this.http.get<T>(`${this.getBase()}/${rId}`);
  }

  /**
   * Recupere tous les articles
   * @returns la liste des articles
   */
  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.getBase());
  }

  private getBase(): string {
    return environment.BASE_API + this.base_service;
  }
}
