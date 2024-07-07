# Employee Management System
The Employee Management System is a Java Spring Boot application that provides basic CRUD (Create, Read, Update, Delete) operations for managing employee records. It uses PostgreSQL as the database and MyBatis for data persistence.

## Features
- Create, retrieve, update, and delete employee records.
- Search employees by name or ID.
- RESTful API endpoints for integration.

## Technologies Stack
- **Spring Boot** - Main framework for application development.
- **Spring Data JDBC** - Simplifies JDBC-based data access.
- **MyBatis** - Object Relational Mapping (ORM) framework for SQL interactions.
- **PostgreSQL** - Database for storing employee data.
- **Swagger** - API documentation tool for easy endpoint testing and reference.

### Setting Up PostgreSQL

Create a PostgreSQL database named employee_management.

Update application.properties with your database username and password:
properties
spring.datasource.url=jdbc:postgresql://localhost:5432/employee_management
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.datasource.driver-class-name=org.postgresql.Driver
Build and Run:

bash
mvn clean install
java -jar target/employee-management-system-1.0.0.jar
