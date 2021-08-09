package com.rammar.me.salas.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends Exception {

    private static final Long serialVersionUID = 1l;

    public ResourceNotFoundException(String message) {
        super(message);
    }

}
