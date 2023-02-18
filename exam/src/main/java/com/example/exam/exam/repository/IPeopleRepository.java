package com.example.exam.exam.repository;

import com.example.exam.exam.model.People;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPeopleRepository extends JpaRepository<People, Integer> {
    @Query(value = "select * from people", nativeQuery = true)
    List<People> getAll();
}
