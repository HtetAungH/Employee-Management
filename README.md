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

1. **Install PostgreSQL:**
   Follow the instructions on the [official PostgreSQL website](https://www.postgresql.org/download/) to install PostgreSQL on your system.

2. **Create a Database:**
   ```CREATE DATABASE employee_management_system```

## Running Guide

# Database Configuration
 ```spring.datasource.url=jdbc:postgresql://localhost:5432/employee_db
spring.datasource.username=your_username
spring.datasource.password=your_password
 ```

# MyBatis Configuration
``mybatis.configuration.map-underscore-to-camel-case=true
mybatis.configuration.use-generated-keys=true
mybatis.mapper-locations=classpath:mappers/*.xml
``

**Backend Setup**
``git clone https://github.com/YeZaw2003NeoPhenon/emp_ms_react_project.git
cd emp_ms_react_project/backend``

``./mvnw spring-boot:run``

**Frontend Setup**

``cd ../frontend``

``npm install``

``npm start``

## Contributing

**Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.**
`` Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request ``
