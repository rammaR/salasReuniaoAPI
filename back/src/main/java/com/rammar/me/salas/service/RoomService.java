package com.rammar.me.salas.service;

import com.rammar.me.salas.exception.ResourceNotFoundException;
import com.rammar.me.salas.model.Room;
import com.rammar.me.salas.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    public Room createRoom(Room room) {
        return roomRepository.save(room);
    }

    public List<Room> findAll() {
        return roomRepository.findAll();
    }

    public Room findByID(Long id) throws ResourceNotFoundException {
        return verifyIfExists(id);
    }

    public Room updateRoom(Long id, Room room) throws ResourceNotFoundException {
        verifyIfExists(id);
        return roomRepository.save(room);
    }

    public Long deleteRoom(Long id) throws ResourceNotFoundException {
        Room room = verifyIfExists(id);
        roomRepository.delete(room);
        return id;
    }

    private Room verifyIfExists(Long id) throws ResourceNotFoundException {
        return roomRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Room not found: " + id));
    }
}
