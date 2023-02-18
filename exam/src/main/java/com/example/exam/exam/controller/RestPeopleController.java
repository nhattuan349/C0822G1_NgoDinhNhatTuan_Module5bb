package com.example.exam.exam.controller;

import com.example.exam.exam.model.People;
import com.example.exam.exam.service.hospital.IPeopleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/people/v1")
@CrossOrigin("*")

public class RestPeopleController {
    @Autowired
    private IPeopleService peopleService;

    @GetMapping("")
    public ResponseEntity<List<People>> getAll() {
        List<People> benhNhanList = peopleService.getAll();
        if (benhNhanList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(benhNhanList, HttpStatus.OK);
    }

}