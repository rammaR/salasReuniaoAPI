import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participant } from '../models/participant';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private url: string = "http://127.0.0.1:8082/api/v1/room";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Room> {
    return this.http.get<Room>(this.url);
  }

  deleteRoom(id: number) {
    return this.http.delete(this.url + "/" + id, { responseType: 'text' });
  }

  createRoom(room: Room): Observable<Room> {
    //let jsonRoom = JSON.stringify(room);
    //console.log("JSON Room to create: ", jsonRoom);

    return this.http.post<Room>(this.url, room);
  }

  getRoomById(id: number): Observable<Room> {
    return this.http.get<Room>(this.url + "/" + id);
  }

  updateRoom(id: number, room: Room) {
    //let jsonRoom = JSON.stringify(room);
    return this.http.put(this.url + "/" + id, room);
  }

}
