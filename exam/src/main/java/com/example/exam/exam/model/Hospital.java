package com.example.exam.exam.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
@Entity
public class Hospital {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String idHospital;
    private String dateImport;
    private String dateExport;
    private String reason;
    private String method;
    private String doctor;
    private String status;


    @ManyToOne
    @JoinColumn(name = "people_id",referencedColumnName = "id")
    private People people;

    public Hospital() {
    }

    public Hospital(Integer id, String idHospital, String dateImport,
                    String dateExport, String reason, String method,
                    String doctor, String status, People people) {
        this.id = id;
        this.idHospital = idHospital;
        this.dateImport = dateImport;
        this.dateExport = dateExport;
        this.reason = reason;
        this.method = method;
        this.doctor = doctor;
        this.status = status;
        this.people = people;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getIdHospital() {
        return idHospital;
    }

    public void setIdHospital(String idHospital) {
        this.idHospital = idHospital;
    }

    public String getDateImport() {
        return dateImport;
    }

    public void setDateImport(String dateImport) {
        this.dateImport = dateImport;
    }

    public String getDateExport() {
        return dateExport;
    }

    public void setDateExport(String dateExport) {
        this.dateExport = dateExport;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public People getPeople() {
        return people;
    }

    public void setPeople(People people) {
        this.people = people;
    }
}
