package com.rammar.me.salas.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.Date;

@AllArgsConstructor
@Getter
@Setter
public class ErrorDetails {

    private Date timeStamp;
    private String message;
    private String details;

}
