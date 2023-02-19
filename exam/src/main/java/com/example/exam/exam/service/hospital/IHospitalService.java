package com.example.exam.exam.service.hospital;

import com.example.exam.exam.model.Hospital;
import com.example.exam.exam.service.IGeneralService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IHospitalService extends IGeneralService<Hospital> {

    Page<Hospital> findAllHospital(Pageable pageable, String dateImport, String dateExport);
//    List<Hospital> findAllHospital();
    void delete(@Param("id") int id);

    Page<Hospital> findAllHospitalNoS(Pageable pageable);
}
