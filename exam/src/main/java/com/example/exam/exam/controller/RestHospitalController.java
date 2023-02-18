package com.example.exam.exam.controller;

import com.example.exam.exam.model.Hospital;
import com.example.exam.exam.model.People;
import com.example.exam.exam.service.hospital.IHospitalService;
import com.example.exam.exam.service.hospital.IPeopleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/hospital/v1")
@CrossOrigin("*")
public class RestHospitalController {

    @Autowired
    private IHospitalService iHospitalService;

    @Autowired
    private IPeopleService iPeopleService;




    @GetMapping("")
    public ResponseEntity<Page<Hospital>> findAll(@PageableDefault(value = 6) Pageable pageable,
                                                  @RequestParam Optional<String> dateImport,
                                                  @RequestParam Optional<String> dateExport) {
        String dateImportSearch = dateImport.orElse("");
        String dateExportSearch = dateExport.orElse("");

        Page<Hospital> hospitals = iHospitalService.findAllHospital(pageable, dateImportSearch,
                dateExportSearch);
        if (hospitals.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(hospitals, HttpStatus.OK);
    }



    @DeleteMapping("/{id}")
    public ResponseEntity<Hospital> delete(@PathVariable("id") int id) {
        Hospital hospitalForm = iHospitalService.findById(id).get();
        if (hospitalForm == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        iHospitalService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

//    @GetMapping("/people")
//    public ResponseEntity<List<People>> getAll() {
//        List<People> peopleList = iPeopleService.getAll();
//        if (peopleList.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(peopleList, HttpStatus.OK);
//    }

    @PostMapping("/create")
    public ResponseEntity<Hospital> create(@RequestBody Hospital hospital) {
        hospital.setStatus("0");
        iHospitalService.save(hospital);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }


    //Tìm kiếm theo id
    @GetMapping("/{id}")
    public ResponseEntity<Hospital> findById(@PathVariable Integer id) {
        Hospital hospital = iHospitalService.findById(id).get();
        if (hospital == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(hospital, HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Hospital> update(@PathVariable int id,
                                           @RequestBody Hospital hospital) {
        hospital.setStatus("0");
        iHospitalService.save(hospital);
        return new ResponseEntity<>(hospital, HttpStatus.OK);
    }




}
