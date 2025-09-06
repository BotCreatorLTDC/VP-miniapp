// Inicializar Telegram Web App
const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// Configurar tema de Telegram
tg.setHeaderColor('#667eea');
tg.setBackgroundColor('#f8f9fa');

// Configurar botones de Telegram
function setupTelegramButtons() {
    // Botón principal para cerrar
    tg.MainButton.setText('Cerrar');
    tg.MainButton.show();
    tg.MainButton.onClick(() => {
        tg.close();
    });

    // Botón de retroceso
    tg.BackButton.show();
    tg.BackButton.onClick(() => {
        showSection('main-menu');
    });
}

// Mostrar información del usuario de Telegram
function showUserInfo() {
    const user = tg.initDataUnsafe?.user;
    if (user) {
        console.log('Usuario de Telegram:', user);
        console.log('ID:', user.id);
        console.log('Nombre:', user.first_name, user.last_name);
        console.log('Username:', user.username);
    }
}

// Enviar datos al bot de Telegram
function sendDataToBot(action, data) {
    const payload = {
        action: action,
        data: data,
        timestamp: new Date().toISOString()
    };
    
    console.log('Enviando datos al bot:', payload);
    tg.sendData(JSON.stringify(payload));
}

// Datos de ejemplo de plugs
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

// Mostrar sección específica
function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.menu-section, .content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Cargar contenido específico
        if (sectionId === 'verifyplug-app') {
            loadPlugsList();
        } else if (sectionId === 'verifyplug-list') {
            loadTextList();
        } else if (sectionId === 'researcher') {
            loadResearchSection();
        }
    }

    // Configurar botones de Telegram según la sección
        if (sectionId === 'main-menu') {
            tg.BackButton.hide();
        } else {
            tg.BackButton.show();
        }
    }

// Cargar lista visual de plugs
function loadPlugsList() {
    const plugsList = document.getElementById('plugs-list');
    if (!plugsList) return;
    
    plugsList.innerHTML = '';
    
    plugsData.forEach(plug => {
        const plugElement = createPlugElement(plug);
        plugsList.appendChild(plugElement);
    });
}

// Crear elemento de plug
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

    // Agregar evento de click para redirigir al chat
    plugDiv.addEventListener('click', (e) => {
        if (!e.target.closest('.votes')) {
            handlePlugClick(plug);
        }
    });

    return plugDiv;
}

// Manejar click en plug
function handlePlugClick(plug) {
    console.log('Plug selected:', plug);
    
    // Enviar datos al bot
    sendDataToBot('plug_selected', {
        plug_id: plug.id,
        plug_name: plug.name,
        action: 'view_details'
    });

    // Mostrar información del plug y redirigir al chat
    const message = `Plug: ${plug.name}\nCountry: ${plug.countryName}\nVotes: ${plug.votes}\nVerified: ${plug.verified ? 'Yes' : 'No'}\n\nRedirecting to ${plug.telegram}...`;
    
    if (confirm(message)) {
        // Abrir el chat de Telegram
        window.open(`https://t.me/${plug.telegram.replace('@', '')}`, '_blank');
    }
}

// Manejar like/unlike
function handleLike(event, plugId) {
    event.stopPropagation();
    
    const plug = plugsData.find(p => p.id === plugId);
    if (!plug) return;
    
    // Toggle like status
    plug.liked = !plug.liked;
    plug.votes += plug.liked ? 1 : -1;
    
    // Enviar datos al bot
    sendDataToBot('plug_liked', {
        plug_id: plug.id,
        plug_name: plug.name,
        liked: plug.liked,
        new_votes: plug.votes
    });
    
    // Actualizar la UI
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

// Cargar lista de texto
function loadTextList() {
    const textList = document.getElementById('text-list');
    if (!textList) return;
    
    let html = '<h3>Lista de Plugs Verificados</h3>\n\n';
    
    plugsData.forEach(plug => {
        const methods = plug.methods.map(m => m.label).join(', ');
        const verified = plug.verified ? '✓' : '✗';
        const reports = plug.reports > 0 ? ` (${plug.reports} reportes)` : '';
        
        html += `<div class="plug-text">
${verified} ${plug.name} ${plug.country} - ${plug.countryName}
   Métodos: ${methods}
   Votos: ${plug.votes}${reports}
   Descripción: ${plug.description}
</div>\n`;
    });

    textList.innerHTML = html;
}

// Mostrar navegación inferior
function showBottomNav(navItem) {
    // Remover clase active de todos los botones
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Agregar clase active al botón seleccionado
    event.target.closest('.nav-btn').classList.add('active');

    // Mostrar contenido según la navegación
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

// Cargar sección de Research
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
                    <!-- Los plugs filtrados se cargarán aquí -->
                </div>
            </div>
        </div>
    `;
    
    // Cargar todos los plugs inicialmente
    filterPlugs();
}

// Filtrar plugs
function filterPlugs() {
    const deliveryFilter = document.getElementById('delivery-filter')?.value;
    const countryFilter = document.getElementById('country-filter')?.value;
    
    let filteredPlugs = [...plugsData];
    
    // Filtrar por método de entrega
    if (deliveryFilter) {
        filteredPlugs = filteredPlugs.filter(plug => 
            plug.methods.some(method => method.type === deliveryFilter)
        );
    }
    
    // Filtrar por país
    if (countryFilter) {
        filteredPlugs = filteredPlugs.filter(plug => plug.country === countryFilter);
    }
    
    // Mostrar resultados
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

// Limpiar filtros
function clearFilters() {
    document.getElementById('delivery-filter').value = '';
    document.getElementById('country-filter').value = '';
    filterPlugs();
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    console.log('VerifyPlug Mini-App iniciada');
    
    // Configurar botones de Telegram
    setupTelegramButtons();
    
    // Mostrar información del usuario
    showUserInfo();
    
    // Cargar contenido inicial
    loadPlugsList();
    
    console.log('Mini-App lista para usar');
});

// Manejar eventos de Telegram
tg.onEvent('mainButtonClicked', () => {
    console.log('Botón principal clickeado');
    tg.close();
});

tg.onEvent('backButtonClicked', () => {
    console.log('Botón de retroceso clickeado');
        showSection('main-menu');
});

// Exportar funciones para uso global
window.showSection = showSection;
window.showBottomNav = showBottomNav;