import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.sass']
})
export class RoomListComponent implements OnInit {

  rooms: Observable<Room>;

  constructor(private service: RoomService, private router: Router) { }

  ngOnInit(): void {
    this.getListRooms();
  }

  getListRooms() {
    this.rooms = this.service.getAll();
  }

  deleteRoom(id: number) {
    this.service.deleteRoom(id).subscribe(
      data => {
        console.log(data);
        this.getListRooms();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  toRoomDetail(id: number) {
    this.router.navigate(['details', id]);
  }

  toRoomUpdate(id: number){
    this.router.navigate(['update', id]);
  }

  toRoomEnter(id:number){
    this.router.navigate(['enter', id]);
  }

}
