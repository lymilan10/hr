package org.liuy191.vhr.mapper;

//import org.javaboy.vhr.model.Employeeec;

import org.liuy191.vhr.model.Employeeec;

public interface EmployeeecMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Employeeec record);

    int insertSelective(Employeeec record);

    Employeeec selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Employeeec record);

    int updateByPrimaryKey(Employeeec record);
}