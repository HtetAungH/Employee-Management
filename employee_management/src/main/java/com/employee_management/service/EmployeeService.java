package com.employee_management.service;

import java.util.List;
import com.employee_management.model.Employee;

public interface EmployeeService {
    Employee findById(Long id);
    List<Employee> findByName(String name);
    void insert(Employee employee);
    void update(Employee employee);
    void delete(Long id);
}

