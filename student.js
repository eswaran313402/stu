function showAdminSection() {
    document.getElementById('admin-section').style.display = 'block';
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('admin-dashboard').style.display = 'block';
    isAdmin = true;
}
// Dropdown toggle logic
document.addEventListener('DOMContentLoaded', function() {
    const adminDropdown = document.querySelector('.admin-dropdown > .admin-access');
    const dropdownMenu = document.querySelector('.admin-dropdown .dropdown-menu');
    if (adminDropdown && dropdownMenu) {
        adminDropdown.addEventListener('click', function(e) {
            e.preventDefault();
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
        document.addEventListener('click', function(e) {
            if (!adminDropdown.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.style.display = 'none';
            }
        });
    }
});
// Dropdown toggle logic
document.addEventListener('DOMContentLoaded', function() {
    const adminDropdown = document.querySelector('.admin-dropdown > .admin-access');
    const dropdownMenu = document.querySelector('.admin-dropdown .dropdown-menu');
    if (adminDropdown && dropdownMenu) {
        adminDropdown.addEventListener('click', function(e) {
            e.preventDefault();
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
        document.addEventListener('click', function(e) {
            if (!adminDropdown.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.style.display = 'none';
            }
        });
    }
});
const students = [
    { id: 1, name: 'Arun Kumar', age: 18, grade: 'A' },
    { id: 2, name: 'Priya Sharma', age: 19, grade: 'B' },
    { id: 3, name: 'Rahul Singh', age: 17, grade: 'A' },
    { id: 4, name: 'Sneha Reddy', age: 18, grade: 'C' }
];

function renderStudentTable() {
    const tbody = document.getElementById('student-table-body');
    tbody.innerHTML = '';
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
        `;
        tbody.appendChild(row);
    });
}

function addStudent(name, age, grade) {
    const newId = students.length ? students[students.length - 1].id + 1 : 1;
    students.push({ id: newId, name, age: Number(age), grade });
    renderStudentTable();
}
// Function to download student records as Excel
function downloadExcel() {
    const ws_data = [
        ["ID", "Name", "Age", "Grade"],
        ...students.map(s => [s.id, s.name, s.age, s.grade])
    ];
    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Students");
    XLSX.writeFile(wb, "student_records.xlsx");
}

document.addEventListener('DOMContentLoaded', function() {
    renderStudentTable();
    const form = document.getElementById('student-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const grade = document.getElementById('grade').value;
            addStudent(name, age, grade);
            form.reset();
        });
    }
    const downloadBtn = document.getElementById('download-xls');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadExcel);
    }
        const loginForm = document.getElementById('admin-login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const pwd = document.getElementById('admin-password').value;
                if (pwd === ADMIN_PASSWORD) {
                    showAdminSection();
                } else {
                    alert('Incorrect password!');
                }
            });
        }
});