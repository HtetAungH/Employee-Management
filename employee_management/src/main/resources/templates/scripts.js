document.getElementById('employee-form').addEventListener('submit', function(event) {
    event.preventDefault();
    saveEmployee();
});

function saveEmployee() {
    const id = document.getElementById('employee-id').value;
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const salary = document.getElementById('salary').value;

    const employee = { name, department, salary };

    const method = id ? 'PUT' : 'POST';
    const url = id ? `/employees/${id}` : '/employees';

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
    }).then(response => {
        if (response.ok) {
            clearForm();
            searchEmployees();
        } else {
            alert('Failed to save employee.');
        }
    });
}

function clearForm() {
    document.getElementById('employee-id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('department').value = '';
    document.getElementById('salary').value = '';
}

function searchEmployees() {
    const search = document.getElementById('search').value;

    fetch(`/employees?name=${search}`)
        .then(response => response.json())
        .then(employees => {
            const employeeList = document.getElementById('employee-list');
            employeeList.innerHTML = '';
            employees.forEach(employee => {
                const li = document.createElement('li');
                li.textContent = `${employee.name} - ${employee.department} - $${employee.salary}`;

                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.onclick = () => editEmployee(employee);
                li.appendChild(editButton);

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.onclick = () => deleteEmployee(employee.id);
                li.appendChild(deleteButton);

                employeeList.appendChild(li);
            });
        });
}

function editEmployee(employee) {
    document.getElementById('employee-id').value = employee.id;
    document.getElementById('name').value = employee.name;
    document.getElementById('department').value = employee.department;
    document.getElementById('salary').value = employee.salary;
}

function deleteEmployee(id) {
    fetch(`/employees/${id}`, {
        method: 'DELETE'
    }).then(response => {
        if (response.ok) {
            searchEmployees();
        } else {
            alert('Failed to delete employee.');
        }
    });
}
