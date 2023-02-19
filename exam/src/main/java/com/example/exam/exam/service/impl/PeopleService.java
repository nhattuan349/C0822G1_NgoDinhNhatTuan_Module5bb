package com.example.exam.exam.service.impl;

import com.example.exam.exam.model.People;
import com.example.exam.exam.repository.IPeopleRepository;
import com.example.exam.exam.service.hospital.IPeopleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class PeopleService implements IPeopleService {
    @Autowired
    private IPeopleRepository iPeopleRepository;
    @Override
    public List<People> findAll() {
        return iPeopleRepository.findAll();
    }

    @Override
    public Optional<People> findById(int id) {
        return iPeopleRepository.findById(id);
    }

    @Override
    public void save(People people) {
        iPeopleRepository.save(people);
    }

    @Override
    public void remove(int id) {
        iPeopleRepository.deleteById(id);
    }

    @Override
    public List<People> getAll() {
        return iPeopleRepository.getAll();
    }
}
