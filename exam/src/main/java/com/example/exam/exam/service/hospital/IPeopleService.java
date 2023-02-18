package com.example.exam.exam.service.hospital;

import com.example.exam.exam.model.People;
import com.example.exam.exam.service.IGeneralService;

import java.util.List;

public interface IPeopleService extends IGeneralService<People> {

    List<People> getAll();
}
