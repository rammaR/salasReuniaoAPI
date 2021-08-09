import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.sass']
})
export class RoomDetailsComponent implements OnInit {

  id: number;
  room: Room;

  constructor(private router: Router, private service: RoomService, private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRoom();
  }

  private getRoom(){
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

  toList() {
    this.router.navigate(["/rooms"]);
  }

}
