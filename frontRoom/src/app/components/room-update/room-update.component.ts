import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-update',
  templateUrl: './room-update.component.html',
  styleUrls: ['./room-update.component.sass']
})
export class RoomUpdateComponent implements OnInit {

  private id: number;
  private room: Room = new Room();

  constructor(private router: Router, private service: RoomService, private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParamRoom();
  }

  private getParamRoom() {
    this.id = this.activated.snapshot.params['id'];
    this.service.getRoomById(this.id).subscribe(
      (room: Room) => {
        console.log(room);
        this.room = room;
      },
      (err) => {
        console.error(err);

      }
    );
  }

  onSubmit() {
    this.updateRoom();
  }

  private updateRoom() {
    this.service.updateRoom(this.id, this.room).subscribe(
      (data) => {
        console.log("Updated", data);
        this.toList();

      },
      (err) => {
        console.error(err);
        
      }
    )
  }

  toList() {
    this.router.navigate(["/rooms"]);
  }

}
