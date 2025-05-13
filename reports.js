// Import user data from users.js
// Sample data for charts
const calculateUserStats = () => {
    // Calculate active users per day (sample week data)
    const activeUsersPerDay = Array(7).fill(0).map(() => 
        Math.floor(users.filter(u => u.status === 'Active').length * Math.random() * 0.8)
    );

    // Calculate user roles distribution
    const roleDistribution = users.reduce((acc, user) => {
        acc[user.role] = (acc[user.role] || 0) + 1;
        return acc;
    }, {});

    // Calculate user satisfaction (sample data based on user status)
    const satisfactionData = Array(7).fill(0).map(() => 
        (users.filter(u => u.status === 'Active').length / users.length) * 100
    );

    // Calculate average response times (sample data)
    const responseTimesData = Array(7).fill(0).map(() => 
        Math.floor(Math.random() * 10) + 5
    );

    // Calculate user engagement (based on active status)
    const engagementData = Array(7).fill(0).map(() => 
        (users.filter(u => u.status === 'Active').length / users.length) * 100
    );

    return {
        activeUsers: activeUsersPerDay,
        roleDistribution,
        satisfaction: satisfactionData,
        responseTimes: responseTimesData,
        engagement: engagementData
    };
};

const userStats = calculateUserStats();

const chartData = {
    conversations: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Active Users',
            data: userStats.activeUsers,
            borderColor: '#075e54',
            tension: 0.4,
            fill: false
        }]
    },
    topics: {
        labels: Object.keys(userStats.roleDistribution),
        datasets: [{
            data: Object.values(userStats.roleDistribution),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
        }]
    },
    satisfaction: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'User Satisfaction',
            data: userStats.satisfaction,
            borderColor: '#FF6384',
            tension: 0.4,
            fill: false
        }]
    },
    responseTimes: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Average Response Time (s)',
            data: userStats.responseTimes,
            borderColor: '#36A2EB',
            tension: 0.4,
            fill: false
        }]
    },
    engagement: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'User Engagement',
            data: userStats.engagement,
            backgroundColor: '#4BC0C0'
        }]
    }
};

// Sample data for tables
const generateTableData = () => {
    const topResponses = [
        {
            response: `User Management (${users.filter(u => u.role === 'Admin').length} admins)`,
            successRate: '95%',
            count: users.length,
            avgTime: '8s'
        },
        {
            response: `Active Users (${users.filter(u => u.status === 'Active').length} users)`,
            successRate: '92%',
            count: users.filter(u => u.status === 'Active').length,
            avgTime: '10s'
        },
        {
            response: `New Users (This Month)`,
            successRate: '88%',
            count: users.filter(u => {
                const joinDate = new Date(u.joinDate);
                const now = new Date();
                return joinDate.getMonth() === now.getMonth() && joinDate.getFullYear() === now.getFullYear();
            }).length,
            avgTime: '15s'
        }
    ];

    const categories = [
        {
            category: 'Active Users',
            cases: users.filter(u => u.status === 'Active').length,
            resolution: '93%',
            time: '12m'
        },
        {
            category: 'Administrators',
            cases: users.filter(u => u.role === 'Admin').length,
            resolution: '87%',
            time: '18m'
        },
        {
            category: 'Regular Users',
            cases: users.filter(u => u.role === 'User').length,
            resolution: '95%',
            time: '8m'
        }
    ];

    return { topResponses, categories };
};

const tableData = generateTableData();

// Initialize charts
function initializeCharts() {
    // Conversation Overview Chart
    new Chart(document.getElementById('conversationChart'), {
        type: 'line',
        data: chartData.conversations,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Topics Chart
    new Chart(document.getElementById('topicsChart'), {
        type: 'doughnut',
        data: chartData.topics,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });

    // Satisfaction Chart
    new Chart(document.getElementById('satisfactionChart'), {
        type: 'line',
        data: chartData.satisfaction,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 50,
                    max: 100
                }
            }
        }
    });

    // Response Times Chart
    new Chart(document.getElementById('responseTimesChart'), {
        type: 'line',
        data: chartData.responseTimes,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Engagement Chart
    new Chart(document.getElementById('engagementChart'), {
        type: 'bar',
        data: chartData.engagement,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Populate tables
function populateTables() {
    // Top Responses Table
    const topResponsesBody = document.getElementById('topResponsesBody');
    topResponsesBody.innerHTML = tableData.topResponses.map(item => `
        <tr>
            <td>${item.response}</td>
            <td>${item.successRate}</td>
            <td>${item.count}</td>
            <td>${item.avgTime}</td>
        </tr>
    `).join('');

    // Categories Table
    const categoriesBody = document.getElementById('categoriesBody');
    categoriesBody.innerHTML = tableData.categories.map(item => `
        <tr>
            <td>${item.category}</td>
            <td>${item.cases}</td>
            <td>${item.resolution}</td>
            <td>${item.time}</td>
        </tr>
    `).join('');
}

// Handle date range changes
document.querySelector('.date-range-picker select').addEventListener('change', function() {
    // Implement date range filtering logic here
    console.log('Date range changed:', this.value);
    // Update charts and tables with new data
});

// Handle time period filter changes
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        // Implement time period filtering logic here
        console.log('Time period changed:', this.textContent);
        // Update charts with new data
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeCharts();
    populateTables();
}); 