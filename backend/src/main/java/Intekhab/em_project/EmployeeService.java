package Intekhab.em_project;

import java.util.List;

public interface EmployeeService {
    String createEmployee(Employee employee);
    List<Employee> readEmployees();
    boolean deleteEmployee(Long id);
    Employee readEmployee(Long id);
    String updateEmployee(Long id, Employee employee);
} 
