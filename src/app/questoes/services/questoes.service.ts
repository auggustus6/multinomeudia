import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, observable } from 'rxjs';
import { Leads } from "src/app/models/leads.interface";
import { environment } from "src/environments/environment";
import { Questoes } from "src/app/models/questoes.interface";
import { Categoria } from "src/app/models/categorias.interface";

@Injectable({
  providedIn: 'root'
})
 export class QuestoesService {
  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Questoes[]> {
    return this.http.get<Questoes[]>(`${environment.api}mpQuestao`);
  }

  getQuestionsBySexo(idSexo: number) {
    return this.http.get<Questoes[]>(`${environment.api}mpQuestao/getBySexR1/${idSexo}`);
  }

  getQuestionsByCategoria(idSexo: number, idCategoria: number) {
    return this.http.get<Questoes[]>(`${environment.api}mpQuestao/getByCategoriaR2/${idSexo}/${idCategoria}`);
  }

  getResultados(idLead: number) {
    return this.http.get<any>(`${environment.api}mpLead/getResultById/${idLead}`);
  }

  getCategorias() {
    return this.http.get<Categoria[]>(`${environment.api}mpcategoria`);
  }

  postLead(lead: Leads) {
    return this.http.post<Leads>(`${environment.api}mpLead`, lead);
  }

  putLead(idLead: any, lead: Leads) {
    return this.http.put<Leads>(`${environment.api}mpLead/${idLead}`, lead);
  }
}
