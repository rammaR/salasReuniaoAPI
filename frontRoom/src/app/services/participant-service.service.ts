import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participant } from '../models/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantServiceService {

  private url: string = "http://127.0.0.1:8082/api/v1/participant";

  constructor(private http: HttpClient) { }

  enterRoom(id: number, partipant: Participant) : Observable<Participant> {
    return this.http.post<Participant>(this.url + "/" + id, partipant);
  }

  getParticipants(idRoom: number) : Observable<Participant[]> {
    return this.http.get<Participant[]>(this.url + "/" + idRoom);
  }

}
