package com.example.exam.exam.repository;

import com.example.exam.exam.model.Hospital;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface IHospitalRepository extends JpaRepository<Hospital, Integer> {

    @Query(value = "select hospital.* from `hospital`" +
            " join `people` on people.id = hospital.people_id " +
            "where date_import like :keySearch1 " +
            "and date_export like :keySearch2 and status = 0 order by id desc ", nativeQuery = true)
    Page<Hospital> findAllHospital(Pageable pageable, @Param("keySearch1") String keySearch1, @Param("keySearch2") String keySearch2);


    @Query(value = "select hospital.* from `hospital`" +
            " join `people` on people.id = hospital.people_id " +
            "where status = 0 order by id desc ", nativeQuery = true)
    Page<Hospital> findAllHospitalNoS(Pageable pageable);


    @Modifying
    @Transactional
    @Query(value = "update `hospital`  set status=1 where id=:id", nativeQuery = true)
    void delete(@Param("id") int id);
}
