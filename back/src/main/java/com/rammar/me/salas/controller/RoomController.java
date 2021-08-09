package com.rammar.me.salas.controller;

import com.rammar.me.salas.exception.ResourceNotFoundException;
import com.rammar.me.salas.model.Room;
import com.rammar.me.salas.service.RoomService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:4200/")
@RequestMapping(value = "/api/v1/room")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @GetMapping
    public List<Room> getAllRooms() {
        return roomService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Room> getRoomByID(@PathVariable Long id) throws ResourceNotFoundException {
        Room room = roomService.findByID(id);
        return ResponseEntity.ok().body(room);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Room createRoom(@Valid @RequestBody Room room) {
        return roomService.createRoom(room);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public ResponseEntity<Room> updateRoom(@PathVariable Long id, @RequestBody @Valid Room room) throws ResourceNotFoundException {
        Room updatedRoom = roomService.updateRoom(id, room);
        return ResponseEntity.ok(updatedRoom);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public String deleteRoom(@PathVariable Long id) throws ResourceNotFoundException {
        Long deletedID = roomService.deleteRoom(id);
        return ("Deleted Room "+deletedID);
    }

}
