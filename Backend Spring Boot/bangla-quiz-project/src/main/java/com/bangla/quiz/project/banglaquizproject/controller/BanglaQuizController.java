package com.bangla.quiz.project.banglaquizproject.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class BanglaQuizController {

    @GetMapping("writinghomepage")
    public ResponseEntity test() {
        Model m = new Model();
        m.setEci("ECI");
        return new ResponseEntity(m, HttpStatus.OK);
    }
}
