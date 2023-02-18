package com.example.exam.exam.service.impl;

import com.example.exam.exam.model.Hospital;
import com.example.exam.exam.model.People;
import com.example.exam.exam.repository.IHospitalRepository;
import com.example.exam.exam.repository.IPeopleRepository;
import com.example.exam.exam.service.hospital.IHospitalService;
import com.example.exam.exam.service.hospital.IPeopleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HospitalService implements IHospitalService {


    @Autowired
    private IHospitalRepository hospitalRepository;

    @Override
    public List<Hospital> findAll() {
        return hospitalRepository.findAll();
    }

    @Override
    public Optional<Hospital> findById(int id) {
        return hospitalRepository.findById(id);
    }

    @Override
    public void save(Hospital hospital) {
        hospitalRepository.save(hospital);
    }

    @Override
    public void remove(int id) {
        hospitalRepository.deleteById(id);
    }


    @Override
    public Page<Hospital> findAllHospital(Pageable pageable, String dateImport, String dateExport) {
            return hospitalRepository.findAllHospital(pageable, "%"+dateImport+"%","%"+dateExport+"%");
    }

//    @Override
//    public List<Hospital> findAllHospital() {
//        return hospitalRepository.findAllHospital();
//    }

    @Override
    public void delete(int id) {
        hospitalRepository.delete(id);
    }
}
