import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { exit } from 'process';
import { Observable } from 'rxjs';
import { Participant } from 'src/app/models/participant';
import { ParticipantServiceService } from 'src/app/services/participant-service.service';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-enter',
  templateUrl: './room-enter.component.html',
  styleUrls: ['./room-enter.component.sass']
})
export class RoomEnterComponent implements OnInit {

  participant: Participant = new Participant();
  members: Observable<Participant[]>;
  idRoom: number = -1;

  constructor(private service: ParticipantServiceService, private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.idRoom = this.activated.snapshot.params["id"];
    this.getParticipants();
  }

  onSubmit() {
    if ((this.participant.name?.length <= 0) || (this.participant.name === undefined)) {
      alert("Participant name cannot be empty.");
      return;
    }

    this.service.enterRoom(this.idRoom, this.participant).subscribe(
      (data) => {
        console.log("Response", data);
        this.getParticipants();
        this.participant = new Participant();
      },
      (err) => {
        console.error(err);

      }
    );
  }

  getParticipants() {
    this.members = this.service.getParticipants(this.idRoom);
  }

}
