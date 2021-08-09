import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.sass']
})
export class CreateRoomComponent implements OnInit {

  room: Room = new Room();
  submitted: boolean = false;

  constructor(private service: RoomService, private router: Router) { }

  ngOnInit(): void {
  }

  newRoom() {
    this.submitted = false;
    this.room = new Room();
  }

  save() {
    this.service.createRoom(this.room).subscribe(
      data => {
        console.log(data);
        this.toListOfRooms();
      },
      (err) => {
        console.error(err);
        this.newRoom();

      }
    )
  }

  onSubmit() {
    this.submitted = false;
    this.save();
  }

  private toListOfRooms() {
    this.router.navigate(['/rooms']);
  }

}
