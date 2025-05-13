// Sample user data
const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Admin',
        status: 'Active',
        lastActive: '2 minutes ago',
        joinDate: '2023-01-15'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'User',
        status: 'Active',
        lastActive: '5 minutes ago',
        joinDate: '2023-02-20'
    },
    {
        id: 3,
        name: 'Mike Johnson',
        email: 'mike@example.com',
        role: 'User',
        status: 'Inactive',
        lastActive: '2 days ago',
        joinDate: '2023-03-10'
    },
    // Add more sample users as needed
];

// Populate user table
function populateUserTable() {
    const tableBody = document.getElementById('userTableBody');
    tableBody.innerHTML = '';

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="checkbox" class="user-select"></td>
            <td>
                <div class="user-info">
                    <img src="https://via.placeholder.com/32" alt="${user.name}" class="user-avatar">
                    <div>
                        <div class="user-name">${user.name}</div>
                        <div class="user-email">${user.email}</div>
                    </div>
                </div>
            </td>
            <td><span class="role-badge ${user.role.toLowerCase()}">${user.role}</span></td>
            <td><span class="status-badge ${user.status.toLowerCase()}">${user.status}</span></td>
            <td>${user.lastActive}</td>
            <td>${user.joinDate}</td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn" onclick="editUser(${user.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn" onclick="deleteUser(${user.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Handle select all checkbox
document.querySelector('.select-all').addEventListener('change', function() {
    const checkboxes = document.querySelectorAll('.user-select');
    checkboxes.forEach(checkbox => checkbox.checked = this.checked);
});

// Filter users
document.querySelectorAll('.filter-select').forEach(select => {
    select.addEventListener('change', function() {
        // Implement filtering logic here
        console.log('Filter changed:', this.value);
    });
});

// Search users
const searchInput = document.querySelector('.nav-search input');
searchInput.addEventListener('input', function() {
    // Implement search logic here
    console.log('Search query:', this.value);
});

// Edit user
function editUser(userId) {
    // Implement edit logic here
    console.log('Edit user:', userId);
}

// Delete user
function deleteUser(userId) {
    // Implement delete logic here
    console.log('Delete user:', userId);
}

// Add new user
document.querySelector('.add-user-btn').addEventListener('click', function() {
    // Implement add user logic here
    console.log('Add new user clicked');
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateUserTable();
}); 