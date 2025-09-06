// Inicializar Telegram Web App
const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// Configurar tema de Telegram
tg.setHeaderColor('#667eea');
tg.setBackgroundColor('#f8f9fa');

// Configure Telegram buttons
function setupTelegramButtons() {
    // Main button to close
    tg.MainButton.setText('Close');
    tg.MainButton.show();
    tg.MainButton.onClick(() => {
        tg.close();
    });

    // Back button
    tg.BackButton.show();
    tg.BackButton.onClick(() => {
        showSection('main-menu');
    });
}

// Show Telegram user information
function showUserInfo() {
    const user = tg.initDataUnsafe?.user;
    if (user) {
        console.log('Telegram user:', user);
        console.log('ID:', user.id);
        console.log('Name:', user.first_name, user.last_name);
        console.log('Username:', user.username);
    }
}

// Send data to Telegram bot
function sendDataToBot(action, data) {
    const payload = {
        action: action,
        data: data,
        timestamp: new Date().toISOString()
    };
    
    console.log('Sending data to bot:', payload);
    tg.sendData(JSON.stringify(payload));
}

// Sample plugs data
const plugsData = [
    {
        id: 1,
        name: "AmsterdamGreen",
        country: "🇳🇱",
        countryName: "Netherlands",
        avatar: "AG",
        methods: [
            { type: "meetup", icon: "fas fa-handshake", label: "Meetup" },
            { type: "shipping", icon: "fas fa-shipping-fast", label: "Shipping" },
            { type: "crypto", icon: "fab fa-bitcoin", label: "Crypto" }
        ],
        votes: 127,
        liked: false,
        description: "Premium Dutch quality, fast shipping to all Europe",
        verified: true,
        reports: 0,
        telegram: "@grlltdc"
    },
    {
        id: 2,
        name: "BerlinBud",
        country: "🇩🇪",
        countryName: "Germany",
        avatar: "BB",
        methods: [
            { type: "meetup", icon: "fas fa-handshake", label: "Meetup" },
            { type: "shipping", icon: "fas fa-shipping-fast", label: "Shipping" }
        ],
        votes: 89,
        liked: false,
        description: "High quality German products, meetup only in Berlin",
        verified: true,
        reports: 1,
        telegram: "@grlltdc"
    },
    {
        id: 3,
        name: "ParisPurple",
        country: "🇫🇷",
        countryName: "France",
        avatar: "PP",
        methods: [
            { type: "shipping", icon: "fas fa-shipping-fast", label: "Shipping" },
            { type: "crypto", icon: "fab fa-bitcoin", label: "Crypto" }
        ],
        votes: 156,
        liked: true,
        description: "French Purple Haze, discrete and secure shipping",
        verified: true,
        reports: 0,
        telegram: "@grlltdc"
    },
    {
        id: 4,
        name: "MadridMint",
        country: "🇪🇸",
        countryName: "Spain",
        avatar: "MM",
        methods: [
            { type: "meetup", icon: "fas fa-handshake", label: "Meetup" },
            { type: "shipping", icon: "fas fa-shipping-fast", label: "Shipping" },
            { type: "crypto", icon: "fab fa-bitcoin", label: "Crypto" }
        ],
        votes: 203,
        liked: false,
        description: "Premium Spanish mint, available throughout the peninsula",
        verified: true,
        reports: 2,
        telegram: "@grlltdc"
    },
    {
        id: 5,
        name: "RomeRed",
        country: "🇮🇹",
        countryName: "Italy",
        avatar: "RR",
        methods: [
            { type: "meetup", icon: "fas fa-handshake", label: "Meetup" },
            { type: "crypto", icon: "fab fa-bitcoin", label: "Crypto" }
        ],
        votes: 78,
        liked: false,
        description: "Italian Red Devil, meetup only in Rome and Milan",
        verified: false,
        reports: 3,
        telegram: "@grlltdc"
    },
    {
        id: 6,
        name: "LondonLemon",
        country: "🇬🇧",
        countryName: "United Kingdom",
        avatar: "LL",
        methods: [
            { type: "shipping", icon: "fas fa-shipping-fast", label: "Shipping" },
            { type: "crypto", icon: "fab fa-bitcoin", label: "Crypto" }
        ],
        votes: 134,
        liked: true,
        description: "British Lemon Haze, fast shipping to all Europe",
        verified: true,
        reports: 1,
        telegram: "@grlltdc"
    },
    {
        id: 7,
        name: "ViennaViolet",
        country: "🇦🇹",
        countryName: "Austria",
        avatar: "VV",
        methods: [
            { type: "meetup", icon: "fas fa-handshake", label: "Meetup" },
            { type: "shipping", icon: "fas fa-shipping-fast", label: "Shipping" }
        ],
        votes: 92,
        liked: false,
        description: "Austrian violet, premium alpine quality",
        verified: true,
        reports: 0,
        telegram: "@grlltdc"
    },
    {
        id: 8,
        name: "PraguePurple",
        country: "🇨🇿",
        countryName: "Czech Republic",
        avatar: "PP",
        methods: [
            { type: "meetup", icon: "fas fa-handshake", label: "Meetup" },
            { type: "crypto", icon: "fab fa-bitcoin", label: "Crypto" }
        ],
        votes: 67,
        liked: false,
        description: "Czech Purple Punch, meetup only in Prague",
        verified: false,
        reports: 4,
        telegram: "@grlltdc"
    },
    {
        id: 9,
        name: "StockholmSilver",
        country: "🇸🇪",
        countryName: "Sweden",
        avatar: "SS",
        methods: [
            { type: "shipping", icon: "fas fa-shipping-fast", label: "Shipping" },
            { type: "crypto", icon: "fab fa-bitcoin", label: "Crypto" }
        ],
        votes: 145,
        liked: true,
        description: "Swedish Silver Haze, discrete shipping to all Scandinavia",
        verified: true,
        reports: 1,
        telegram: "@grlltdc"
    },
    {
        id: 10,
        name: "CopenhagenCrystal",
        country: "🇩🇰",
        countryName: "Denmark",
        avatar: "CC",
        methods: [
            { type: "meetup", icon: "fas fa-handshake", label: "Meetup" },
            { type: "shipping", icon: "fas fa-shipping-fast", label: "Shipping" }
        ],
        votes: 111,
        liked: false,
        description: "Danish Crystal Clear, exceptional Nordic quality",
        verified: true,
        reports: 0,
        telegram: "@grlltdc"
    }
];

// Show specific section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.menu-section, .content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Load specific content
        if (sectionId === 'verifyplug-app') {
            loadPlugsList();
        } else if (sectionId === 'verifyplug-list') {
            loadTextList();
        } else if (sectionId === 'researcher') {
            loadResearchSection();
        }
    }

    // Configure Telegram buttons according to section
    if (sectionId === 'main-menu') {
        tg.BackButton.hide();
    } else {
        tg.BackButton.show();
    }
}

// Load visual plugs list
function loadPlugsList() {
    const plugsList = document.getElementById('plugs-list');
    if (!plugsList) return;
    
    plugsList.innerHTML = '';
    
    plugsData.forEach(plug => {
        const plugElement = createPlugElement(plug);
        plugsList.appendChild(plugElement);
    });
}

// Create plug element
function createPlugElement(plug) {
    const plugDiv = document.createElement('div');
    plugDiv.className = `plug-item ${plug.verified ? 'verified' : ''}`;
    
    const methodsHtml = plug.methods.map(method => 
        `<div class="method-icon" title="${method.label}">
            <i class="${method.icon}"></i>
        </div>`
    ).join('');

    const verifiedBadge = plug.verified ? '<span class="verified-badge">✓ Verified</span>' : '';
    const reportsText = plug.reports > 0 ? `<span class="reports-count">⚠️ ${plug.reports} reports</span>` : '';
    const likeIcon = plug.liked ? 'fas fa-heart' : 'far fa-heart';
    const likeClass = plug.liked ? 'liked' : '';

    plugDiv.innerHTML = `
        <div class="plug-avatar">${plug.avatar}</div>
        <div class="plug-info">
            <div class="plug-name">${plug.name}</div>
            <div class="plug-country">${plug.country}</div>
            <div class="plug-methods">${methodsHtml}</div>
            <div class="plug-description">${plug.description}</div>
            <div class="plug-stats">
                <div class="votes ${likeClass}" onclick="handleLike(event, ${plug.id})">
                    <i class="${likeIcon}"></i>
                    <span>${plug.votes}</span>
                </div>
                ${reportsText}
                ${verifiedBadge}
            </div>
        </div>
    `;

    // Add click event to redirect to chat
    plugDiv.addEventListener('click', (e) => {
        if (!e.target.closest('.votes')) {
            handlePlugClick(plug);
        }
    });

    return plugDiv;
}

// Handle plug click
function handlePlugClick(plug) {
    console.log('Plug selected:', plug);
    
    // Send data to bot
    sendDataToBot('plug_selected', {
        plug_id: plug.id,
        plug_name: plug.name,
        action: 'view_details'
    });

    // Show plug information and redirect to chat
    const message = `Plug: ${plug.name}\nCountry: ${plug.countryName}\nVotes: ${plug.votes}\nVerified: ${plug.verified ? 'Yes' : 'No'}\n\nRedirecting to ${plug.telegram}...`;
    
    if (confirm(message)) {
        // Open Telegram chat
        window.open(`https://t.me/${plug.telegram.replace('@', '')}`, '_blank');
    }
}

// Handle like/unlike
function handleLike(event, plugId) {
    event.stopPropagation();
    
    const plug = plugsData.find(p => p.id === plugId);
    if (!plug) return;
    
    // Toggle like status
    plug.liked = !plug.liked;
    plug.votes += plug.liked ? 1 : -1;
    
    // Send data to bot
    sendDataToBot('plug_liked', {
        plug_id: plug.id,
        plug_name: plug.name,
        liked: plug.liked,
        new_votes: plug.votes
    });
    
    // Update UI
    const votesElement = event.target.closest('.votes');
    const icon = votesElement.querySelector('i');
    const count = votesElement.querySelector('span');
    
    if (plug.liked) {
        votesElement.classList.add('liked');
        icon.className = 'fas fa-heart';
    } else {
        votesElement.classList.remove('liked');
        icon.className = 'far fa-heart';
    }
    
    count.textContent = plug.votes;
    
    console.log(`Plug ${plug.name} ${plug.liked ? 'liked' : 'unliked'}. New votes: ${plug.votes}`);
}

// Load text list
function loadTextList() {
    const textList = document.getElementById('text-list');
    if (!textList) return;
    
    let html = '<h3>Verified Plugs List</h3>\n\n';
    
    plugsData.forEach(plug => {
        const methods = plug.methods.map(m => m.label).join(', ');
        const verified = plug.verified ? '✓' : '✗';
        const reports = plug.reports > 0 ? ` (${plug.reports} reports)` : '';
        
        html += `<div class="plug-text">
${verified} ${plug.name} ${plug.country} - ${plug.countryName}
   Methods: ${methods}
   Votes: ${plug.votes}${reports}
   Description: ${plug.description}
</div>\n`;
    });

    textList.innerHTML = html;
}

// Show bottom navigation
function showBottomNav(navItem) {
    // Remove active class from all buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to selected button
    event.target.closest('.nav-btn').classList.add('active');

    // Show content according to navigation
    switch(navItem) {
        case 'home':
            showSection('verifyplug-app');
            break;
        case 'researcher':
            showSection('researcher');
            break;
        case 'giveaway':
            alert('Giveaway functionality in development...');
            break;
    }
}

// Load Research section
function loadResearchSection() {
    const researcherSection = document.getElementById('researcher');
    if (!researcherSection) return;

    researcherSection.innerHTML = `
        <div class="section-header">
            <button class="back-btn" onclick="showSection('main-menu')">
                <i class="fas fa-arrow-left"></i> Back
            </button>
            <h2><i class="fas fa-search"></i> Research</h2>
        </div>
        
        <div class="research-container">
            <div class="filters">
                <div class="filter-group">
                    <label>Delivery Method:</label>
                    <select id="delivery-filter" onchange="filterPlugs()">
                        <option value="">All Methods</option>
                        <option value="meetup">Meetup</option>
                        <option value="shipping">Shipping</option>
                        <option value="crypto">Crypto</option>
                    </select>
                </div>
                
                <div class="filter-group">
                    <label>Country:</label>
                    <select id="country-filter" onchange="filterPlugs()">
                        <option value="">All Countries</option>
                        <option value="🇳🇱">Netherlands</option>
                        <option value="🇩🇪">Germany</option>
                        <option value="🇫🇷">France</option>
                        <option value="🇪🇸">Spain</option>
                        <option value="🇮🇹">Italy</option>
                        <option value="🇬🇧">United Kingdom</option>
                        <option value="🇦🇹">Austria</option>
                        <option value="🇨🇿">Czech Republic</option>
                        <option value="🇸🇪">Sweden</option>
                        <option value="🇩🇰">Denmark</option>
                    </select>
                </div>
                
                <button class="clear-filters" onclick="clearFilters()">Clear Filters</button>
            </div>
            
            <div class="research-results">
                <div id="research-plugs-list" class="plugs-list">
                    <!-- Filtered plugs will be loaded here -->
                </div>
            </div>
        </div>
    `;
    
    // Load all plugs initially
    filterPlugs();
}

// Filter plugs
function filterPlugs() {
    const deliveryFilter = document.getElementById('delivery-filter')?.value;
    const countryFilter = document.getElementById('country-filter')?.value;
    
    let filteredPlugs = [...plugsData];
    
    // Filter by delivery method
    if (deliveryFilter) {
        filteredPlugs = filteredPlugs.filter(plug => 
            plug.methods.some(method => method.type === deliveryFilter)
        );
    }
    
    // Filter by country
    if (countryFilter) {
        filteredPlugs = filteredPlugs.filter(plug => plug.country === countryFilter);
    }
    
    // Show results
    const researchList = document.getElementById('research-plugs-list');
    if (!researchList) return;
    
    researchList.innerHTML = '';
    
    if (filteredPlugs.length === 0) {
        researchList.innerHTML = '<div class="no-results">No plugs found matching your criteria.</div>';
        return;
    }
    
    filteredPlugs.forEach(plug => {
        const plugElement = createPlugElement(plug);
        researchList.appendChild(plugElement);
    });
}

// Clear filters
function clearFilters() {
    document.getElementById('delivery-filter').value = '';
    document.getElementById('country-filter').value = '';
    filterPlugs();
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('VerifyPlug Mini-App started');
    
    // Configure Telegram buttons
    setupTelegramButtons();
    
    // Show user information
    showUserInfo();
    
    // Load initial content
    loadPlugsList();
    
    console.log('Mini-App ready to use');
});

// Handle Telegram events
tg.onEvent('mainButtonClicked', () => {
    console.log('Main button clicked');
    tg.close();
});

tg.onEvent('backButtonClicked', () => {
    console.log('Back button clicked');
    showSection('main-menu');
});

// Export functions for global use
window.showSection = showSection;
window.showBottomNav = showBottomNav;