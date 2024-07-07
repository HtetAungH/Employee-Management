package com.employee_management.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.employee_management.mapper.EmployeeMapper;
import com.employee_management.model.Employee;


@Repository
public class EmployeeRepository {

    @Autowired
    private EmployeeMapper employeeMapper;

    public Employee findById(Long id) {
        return employeeMapper.findById(id);
    }

    public List<Employee> findByName(String name) {
        return employeeMapper.findByName(name);
    }

    public void insert(Employee employee) {
        employeeMapper.insert(employee);
    }

    public void update(Employee employee) {
        employeeMapper.update(employee);
    }

    public void delete(Long id) {
        employeeMapper.delete(id);
    }
}

