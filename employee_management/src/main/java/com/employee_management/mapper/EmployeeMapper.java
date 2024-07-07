package com.employee_management.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.employee_management.model.Employee;

@Mapper
public interface EmployeeMapper {

    @Select("SELECT * FROM employees WHERE id = #{id}")
    Employee findById(Long id);

    @Select("SELECT * FROM employees WHERE name LIKE '%' || #{name} || '%'")
    List<Employee> findByName(String name);

    @Insert("INSERT INTO employees (name, department, salary) VALUES (#{name}, #{department}, #{salary})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insert(Employee employee);

    @Update("UPDATE employees SET name=#{name}, department=#{department}, salary=#{salary} WHERE id=#{id}")
    void update(Employee employee);

    @Delete("DELETE FROM employees WHERE id = #{id}")
    void delete(Long id);
}
