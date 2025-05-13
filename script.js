// Chatbot responses
const botResponses = {
    greeting: [
        "Hello! How can I help you today?",
        "Hi there! What can I assist you with?",
        "Welcome! How may I assist you today?",
        "Greetings! I'm here to help you with anything you need.",
        "Hello! Thanks for reaching out. How can I make your day better?"
    ],
    farewell: [
        "Goodbye! Have a great day!",
        "Thanks for chatting. Take care!",
        "See you soon! Don't hesitate to come back if you need help.",
        "Thank you for using our service. Have a wonderful day!",
        "Goodbye! We appreciate your business!"
    ],
    default: [
        "I'm here to help. Could you please provide more details?",
        "I'm not sure I understand. Could you rephrase that?",
        "Could you elaborate on that?",
        "I want to help you better. Can you give me more information?",
        "I'm not quite sure what you're looking for. Could you be more specific?"
    ],
    help: [
        "I can help you with:\n1. Product information\n2. Order status\n3. Returns\n4. Technical support\n5. Shipping\n6. Payment options\n7. Account issues\n8. Pricing\n9. Warranty claims\n10. Bulk orders\n11. Gift services\n12. Installation help\nWhat would you like to know more about?"
    ],
    product: [
        "Our products are top quality and come with a 30-day guarantee. What specific product are you interested in?",
        "I'd be happy to help you find the right product. What are you looking for?",
        "We have a wide range of products available. Could you tell me your requirements?",
        "Let me help you find the perfect product. What features are most important to you?",
        "I can provide detailed product specifications. Which product line interests you?"
    ],
    order: [
        "To check your order status, please provide your order number.",
        "I can help you track your order. Do you have the order number handy?",
        "Let me help you with your order. Could you share the order reference?",
        "I'll be happy to check your order status. What's your order number?",
        "For order tracking, please provide either your order number or the email used for purchase."
    ],
    returns: [
        "Our return policy allows returns within 30 days of purchase. Would you like to initiate a return?",
        "I can help you process a return. Have you made the purchase within the last 30 days?",
        "Returns are easy! Do you have your order number and the item you want to return?",
        "Let me guide you through our return process. Have you opened the product?",
        "I can help with your return request. Was this a recent purchase?"
    ],
    support: [
        "For technical support, please describe the issue you're experiencing.",
        "I'll be happy to help with technical issues. What problem are you facing?",
        "Let's solve your technical problem together. What's happening with your product?",
        "I can guide you through common troubleshooting steps. What seems to be the issue?",
        "Tell me about the technical difficulty you're experiencing, and I'll help you resolve it."
    ],
    pricing: [
        "I can help you with pricing information. Which product's price would you like to know?",
        "Our prices are competitive and include warranty. Which item are you interested in?",
        "I can provide pricing details including any current discounts. What are you looking for?",
        "Let me check the latest pricing for you. Which product line interests you?",
        "I can give you a detailed price breakdown. Which item would you like to know about?"
    ],
    shipping: [
        "We offer free shipping on orders over $50. Standard delivery takes 3-5 business days.",
        "Express shipping is available for next-day delivery. Would you like to know our shipping rates?",
        "International shipping is available to most countries. Where are you located?",
        "We have various shipping options available. When do you need your delivery by?",
        "Let me explain our shipping methods and timeframes. Where are we shipping to?"
    ],
    payment: [
        "We accept all major credit cards, PayPal, and Apple Pay.",
        "Would you like to know about our payment plans or available payment methods?",
        "We offer flexible payment options including installment plans. What works best for you?",
        "Secure payment options include credit cards, digital wallets, and bank transfers.",
        "We have multiple payment methods available. Would you like to hear about our financing options?"
    ],
    account: [
        "I can help you with account-related issues. Are you having trouble logging in?",
        "What specific account issue are you experiencing?",
        "Let's get your account sorted. What seems to be the problem?",
        "I can help reset your password or update your account information. What do you need?",
        "Tell me about the account issue, and I'll guide you through the solution."
    ],
    contact: [
        "You can reach our customer service team at 1-800-123-4567 or support@example.com",
        "Would you like me to connect you with a human representative?",
        "Our support team is available 24/7. Would you like their direct contact?",
        "I can transfer you to a specialist. Would you prefer phone or email contact?",
        "Let me connect you with our dedicated support team. How would you like to be contacted?"
    ],
    hours: [
        "We're open Monday to Friday, 9 AM to 6 PM EST",
        "Our customer service team is available during business hours. How can we help?",
        "Our online support is available 24/7, and our office hours are Monday-Friday, 9-6 EST.",
        "Weekend support is available by appointment. Would you like to schedule a call?",
        "Our technical support team is available extended hours. When would you like assistance?"
    ],
    warranty: [
        "All our products come with a standard 1-year warranty.",
        "Would you like to know about our extended warranty options?",
        "I can help you file a warranty claim. Do you have your product serial number?",
        "Let me explain our warranty coverage. Which product do you have questions about?",
        "Our warranty includes parts and labor. Would you like more specific details?"
    ],
    discount: [
        "I can check available discounts for you. Are you a first-time customer?",
        "Would you like to know about our current promotions?",
        "Let me find the best discount for your purchase. What are you planning to buy?",
        "We have special offers for bulk orders. How many items are you interested in?",
        "I can apply the best available discount to your order. Are you a member of our loyalty program?"
    ],
    refund: [
        "Refunds are processed within 5-7 business days after we receive your return.",
        "I can help you track your refund status. Do you have your order number?",
        "Let me check the status of your refund. When did you initiate the return?",
        "Refunds are issued to the original payment method. Would you like to check the status?",
        "I can help expedite your refund. Have you received a return confirmation?"
    ],
    complaint: [
        "I'm sorry to hear you're having issues. Could you please describe your concern?",
        "Let me help resolve your concern. What seems to be the problem?",
        "I apologize for any inconvenience. Please tell me what went wrong.",
        "Your satisfaction is important to us. How can we make this right?",
        "I'll ensure your complaint is addressed properly. Can you provide more details?"
    ],
    installation: [
        "I can guide you through the installation process. Which product are you installing?",
        "Would you like step-by-step installation instructions?",
        "Let me help you with the setup. Have you already unpacked the product?",
        "I can provide video tutorials for installation. Would that be helpful?",
        "Installation support is available. What stage are you at in the process?"
    ],
    bulk_order: [
        "We offer special pricing for bulk orders. How many units are you interested in?",
        "I can help you with volume pricing. What products are you looking to order?",
        "Bulk orders come with additional benefits. Would you like to know more?",
        "Let me connect you with our bulk ordering specialist. What's your quantity requirement?",
        "We can customize bulk orders to your needs. What's your target quantity?"
    ],
    gift: [
        "We offer gift wrapping and personalized messages. Would you like to know more?",
        "I can help you with gift options. Is this for a special occasion?",
        "We have corporate gifting services available. How many gifts do you need?",
        "Let me show you our gift packaging options. What's your budget per gift?",
        "Would you like to include a gift message with your order?"
    ],
    feedback: [
        "Thank you for your feedback! Is there anything specific you'd like us to improve?",
        "We value your opinion. Could you tell us more about your experience?",
        "Your feedback helps us improve. Would you like to participate in our customer survey?",
        "I'll make sure your feedback reaches our team. Any additional comments?",
        "We appreciate your input. How else can we serve you better?"
    ],
    laptop_general: [
        "We offer a wide range of laptops for every need. Are you looking for a gaming, business, or everyday use laptop?",
        "What's your primary use for the laptop? This will help me recommend the best options.",
        "Our laptops range from budget-friendly to premium models. What's your preferred price range?",
        "Would you like me to help you find the perfect laptop? Let me know your requirements.",
        "We have laptops from all major brands. Do you have a preferred manufacturer?"
    ],
    laptop_gaming: [
        "Our gaming laptops feature the latest GPUs and high refresh rate displays. What games do you plan to play?",
        "Gaming laptops start from $899. They come with dedicated graphics cards and gaming-optimized features. What's your budget?",
        "For gaming, I recommend laptops with at least 16GB RAM and RTX graphics. Would you like to see our gaming lineup?",
        "Our gaming laptops include models from ROG, Alienware, and MSI. Which brand interests you?",
        "Gaming laptops come with different screen sizes from 15\" to 17\". What size would you prefer?"
    ],
    laptop_business: [
        "Our business laptops offer security features and long battery life. Are you looking for any specific business features?",
        "Business laptops come with Windows Pro and enterprise-grade security. What's most important for your work?",
        "We have lightweight business laptops perfect for travel. How portable does it need to be?",
        "Business laptops include options from ThinkPad, Dell Latitude, and HP Elite. Any preference?",
        "Would you need features like fingerprint reader or facial recognition for security?"
    ],
    laptop_student: [
        "Student laptops are lightweight and have good battery life. What subjects are you studying?",
        "We offer student discounts on many laptop models. What's your budget range?",
        "For students, we recommend laptops with at least 8GB RAM and SSD storage. Interested in seeing some options?",
        "Would you need the laptop for programming, design work, or general studies?",
        "Our student laptops come with MS Office options. Would you like to know more about software bundles?"
    ],
    laptop_specs: [
        "Key specs to consider are CPU, RAM, storage, and display. Which would you like to know more about?",
        "Our laptops range from Intel i3 to i9, and AMD Ryzen series. What performance level do you need?",
        "Storage options include SSDs from 256GB to 2TB. How much storage space do you need?",
        "RAM options range from 8GB to 64GB. What kind of multitasking do you plan to do?",
        "Display options include 1080p to 4K resolution. How important is screen quality for you?"
    ],
    laptop_warranty: [
        "All our laptops come with a standard 1-year warranty. Would you like to know about extended coverage?",
        "We offer accidental damage protection for laptops. Would you like details about coverage plans?",
        "Premium laptops come with on-site service warranty. Interested in premium support options?",
        "Our laptop warranties cover both parts and labor. Would you like to know what's covered?",
        "We provide international warranty for business laptops. Need more details about global coverage?"
    ],
    laptop_accessories: [
        "Popular laptop accessories include docks, external monitors, and carrying cases. What accessories interest you?",
        "Would you need any additional peripherals like a mouse, keyboard, or webcam?",
        "We offer laptop cooling pads and ergonomic stands. Interested in any comfort accessories?",
        "For security, we have laptop locks and privacy screens. Would you like to know more?",
        "Need any connectivity accessories like USB-C hubs or external drives?"
    ],
    laptop_software: [
        "Our laptops can come with pre-installed software. Would you like to know about available packages?",
        "We offer antivirus and security software bundles. Interested in protection packages?",
        "Microsoft Office can be pre-installed on your laptop. Would you like pricing details?",
        "For creators, we offer Adobe Creative Cloud bundles. Need any creative software?",
        "Business laptops include optional enterprise software. Want to know about business apps?"
    ]
};

// Chat elements
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Initialize chat with greeting
window.addEventListener('load', () => {
    setTimeout(() => {
        addMessage(getRandomResponse('greeting'), 'bot');
    }, 500);
});

// Send message on button click or Enter key
sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

function handleUserInput() {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        userInput.value = '';
        processUserInput(message.toLowerCase());
    }
}

function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const content = document.createElement('div');
    content.className = 'message-content';
    content.textContent = message;
    
    messageDiv.appendChild(content);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function processUserInput(message) {
    setTimeout(() => {
        let response;
        
        // Enhanced keyword matching with laptop-specific keywords
        if (message.includes('laptop') || message.includes('notebook') || message.includes('computer')) {
            if (message.includes('gaming') || message.includes('game') || message.includes('fps') || message.includes('rtx')) {
                response = getRandomResponse('laptop_gaming');
            } else if (message.includes('business') || message.includes('work') || message.includes('professional')) {
                response = getRandomResponse('laptop_business');
            } else if (message.includes('student') || message.includes('study') || message.includes('college') || message.includes('university')) {
                response = getRandomResponse('laptop_student');
            } else if (message.includes('spec') || message.includes('processor') || message.includes('cpu') || message.includes('ram') || message.includes('memory') || message.includes('storage')) {
                response = getRandomResponse('laptop_specs');
            } else if (message.includes('warranty') || message.includes('coverage') || message.includes('protection')) {
                response = getRandomResponse('laptop_warranty');
            } else if (message.includes('accessory') || message.includes('dock') || message.includes('monitor') || message.includes('mouse') || message.includes('keyboard')) {
                response = getRandomResponse('laptop_accessories');
            } else if (message.includes('software') || message.includes('program') || message.includes('app') || message.includes('antivirus')) {
                response = getRandomResponse('laptop_software');
            } else {
                response = getRandomResponse('laptop_general');
            }
        } else if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('greetings')) {
            response = getRandomResponse('greeting');
        } else if (message.includes('bye') || message.includes('goodbye') || message.includes('see you') || message.includes('farewell')) {
            response = getRandomResponse('farewell');
        } else if (message.includes('help') || message.includes('assist') || message.includes('menu') || message.includes('support')) {
            response = getRandomResponse('help');
        } else if (message.includes('product') || message.includes('item') || message.includes('goods') || message.includes('merchandise')) {
            response = getRandomResponse('product');
        } else if (message.includes('order') || message.includes('track') || message.includes('delivery status') || message.includes('purchase')) {
            response = getRandomResponse('order');
        } else if (message.includes('return') || message.includes('send back') || message.includes('exchange')) {
            response = getRandomResponse('returns');
        } else if (message.includes('support') || message.includes('technical') || message.includes('broken') || message.includes('not working')) {
            response = getRandomResponse('support');
        } else if (message.includes('price') || message.includes('cost') || message.includes('how much') || message.includes('pricing')) {
            response = getRandomResponse('pricing');
        } else if (message.includes('shipping') || message.includes('delivery') || message.includes('ship') || message.includes('send')) {
            response = getRandomResponse('shipping');
        } else if (message.includes('pay') || message.includes('payment') || message.includes('card') || message.includes('checkout')) {
            response = getRandomResponse('payment');
        } else if (message.includes('account') || message.includes('login') || message.includes('password') || message.includes('sign in')) {
            response = getRandomResponse('account');
        } else if (message.includes('contact') || message.includes('human') || message.includes('representative') || message.includes('person')) {
            response = getRandomResponse('contact');
        } else if (message.includes('hours') || message.includes('open') || message.includes('available') || message.includes('when')) {
            response = getRandomResponse('hours');
        } else if (message.includes('warranty') || message.includes('guarantee') || message.includes('coverage')) {
            response = getRandomResponse('warranty');
        } else if (message.includes('discount') || message.includes('coupon') || message.includes('promo') || message.includes('offer')) {
            response = getRandomResponse('discount');
        } else if (message.includes('refund') || message.includes('money back') || message.includes('reimburse')) {
            response = getRandomResponse('refund');
        } else if (message.includes('complaint') || message.includes('issue') || message.includes('problem') || message.includes('unhappy')) {
            response = getRandomResponse('complaint');
        } else if (message.includes('install') || message.includes('setup') || message.includes('configure') || message.includes('set up')) {
            response = getRandomResponse('installation');
        } else if (message.includes('bulk') || message.includes('wholesale') || message.includes('volume') || message.includes('many')) {
            response = getRandomResponse('bulk_order');
        } else if (message.includes('gift') || message.includes('present') || message.includes('wrap') || message.includes('celebration')) {
            response = getRandomResponse('gift');
        } else if (message.includes('feedback') || message.includes('suggest') || message.includes('review') || message.includes('rate')) {
            response = getRandomResponse('feedback');
        } else {
            response = getRandomResponse('default');
        }
        
        addMessage(response, 'bot');
    }, 1000);
}

function getRandomResponse(type) {
    const responses = botResponses[type];
    return responses[Math.floor(Math.random() * responses.length)];
}

// Dashboard functionality
function generateRandomData() {
    return {
        conversations: Math.floor(Math.random() * 1000) + 100,
        responseTime: Math.floor(Math.random() * 30) + 5,
        satisfaction: Math.floor(Math.random() * 30) + 70,
        activeUsers: Math.floor(Math.random() * 500) + 50,
        topics: {
            'Product Info': Math.floor(Math.random() * 100),
            'Technical Support': Math.floor(Math.random() * 100),
            'Orders': Math.floor(Math.random() * 100),
            'Returns': Math.floor(Math.random() * 100),
            'Account Help': Math.floor(Math.random() * 100)
        },
        responseTimes: [
            Math.floor(Math.random() * 20) + 5,
            Math.floor(Math.random() * 20) + 5,
            Math.floor(Math.random() * 20) + 5,
            Math.floor(Math.random() * 20) + 5,
            Math.floor(Math.random() * 20) + 5,
            Math.floor(Math.random() * 20) + 5,
            Math.floor(Math.random() * 20) + 5
        ],
        satisfactionTrend: [
            Math.floor(Math.random() * 20) + 75,
            Math.floor(Math.random() * 20) + 75,
            Math.floor(Math.random() * 20) + 75,
            Math.floor(Math.random() * 20) + 75,
            Math.floor(Math.random() * 20) + 75,
            Math.floor(Math.random() * 20) + 75,
            Math.floor(Math.random() * 20) + 75
        ],
        usersTrend: [
            Math.floor(Math.random() * 200) + 300,
            Math.floor(Math.random() * 200) + 300,
            Math.floor(Math.random() * 200) + 300,
            Math.floor(Math.random() * 200) + 300,
            Math.floor(Math.random() * 200) + 300,
            Math.floor(Math.random() * 200) + 300,
            Math.floor(Math.random() * 200) + 300
        ]
    };
}

function updateDashboard() {
    const data = generateRandomData();
    
    // Update stats
    document.getElementById('totalConversations').textContent = data.conversations;
    document.getElementById('avgResponseTime').textContent = data.responseTime + 's';
    document.getElementById('satisfaction').textContent = data.satisfaction + '%';
    document.getElementById('activeUsers').textContent = data.activeUsers;

    // Topics Chart
    const topicsChart = new Chart(document.getElementById('topicsChart'), {
        type: 'doughnut',
        data: {
            labels: Object.keys(data.topics),
            datasets: [{
                data: Object.values(data.topics),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF'
                ]
            }]
        },
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

    // Response Times Chart
    const responseChart = new Chart(document.getElementById('responseChart'), {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Average Response Time (s)',
                data: data.responseTimes,
                borderColor: '#36A2EB',
                tension: 0.4
            }]
        },
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

    // Satisfaction Trend Chart
    const satisfactionChart = new Chart(document.getElementById('satisfactionChart'), {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Satisfaction Rate (%)',
                data: data.satisfactionTrend,
                borderColor: '#FF6384',
                tension: 0.4
            }]
        },
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

    // Users Chart
    const usersChart = new Chart(document.getElementById('usersChart'), {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Daily Active Users',
                data: data.usersTrend,
                backgroundColor: '#4BC0C0'
            }]
        },
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

// Update dashboard on load and when time range changes
document.addEventListener('DOMContentLoaded', () => {
    updateDashboard();
    
    document.getElementById('timeRange').addEventListener('change', updateDashboard);
});

// Update dashboard every 30 seconds
setInterval(updateDashboard, 30000);

// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });

    // User dropdown functionality
    const userDropdown = document.querySelector('.nav-user');
    const dropdownContent = document.createElement('div');
    dropdownContent.className = 'dropdown-content';
    dropdownContent.innerHTML = `
        <a href="#"><i class="fas fa-user"></i> Profile</a>
        <a href="#"><i class="fas fa-cog"></i> Settings</a>
        <a href="#"><i class="fas fa-bell"></i> Notifications</a>
        <div class="dropdown-divider"></div>
        <a href="#" class="logout"><i class="fas fa-sign-out-alt"></i> Logout</a>
    `;
    userDropdown.appendChild(dropdownContent);

    // Toggle dropdown
    userDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownContent.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        dropdownContent.classList.remove('show');
    });

    // Active link highlighting
    const navLinksArray = document.querySelectorAll('.nav-link');
    navLinksArray.forEach(link => {
        link.addEventListener('click', () => {
            navLinksArray.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});

// Add styles for dropdown
const style = document.createElement('style');
style.textContent = `
    .dropdown-content {
        display: none;
        position: absolute;
        top: 100%;
        right: 0;
        background-color: white;
        min-width: 200px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        border-radius: 8px;
        padding: 0.5rem 0;
        margin-top: 0.5rem;
    }

    .dropdown-content.show {
        display: block;
    }

    .dropdown-content a {
        color: #666;
        padding: 0.75rem 1rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.3s ease;
    }

    .dropdown-content a:hover {
        background-color: #f5f5f5;
        color: #075e54;
    }

    .dropdown-content .dropdown-divider {
        height: 1px;
        background-color: #eee;
        margin: 0.5rem 0;
    }

    .dropdown-content .logout {
        color: #dc3545;
    }

    .dropdown-content .logout:hover {
        background-color: #fff5f5;
        color: #dc3545;
    }

    .nav-user {
        position: relative;
    }
`;
document.head.appendChild(style);