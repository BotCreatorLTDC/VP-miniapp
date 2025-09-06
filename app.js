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
        countryName: "Países Bajos",
        avatar: "AG",
        methods: [
            { type: "meetup", icon: "fas fa-handshake", label: "Meetup" },
            { type: "shipping", icon: "fas fa-shipping-fast", label: "Shipping" },
            { type: "crypto", icon: "fab fa-bitcoin", label: "Crypto" }
        ],
        votes: 127,
        liked: false,
        description: "Calidad premium holandesa, envíos rápidos a toda Europa",
        verified: true,
        reports: 0
    },
    {
        id: 2,
        name: "BerlinBud",
        country: "🇩🇪",
        countryName: "Alemania",
        avatar: "BB",
        methods: [
            { type: "meetup", icon: "fas fa-handshake", label: "Meetup" },
            { type: "shipping", icon: "fas fa-shipping-fast", label: "Shipping" }
        ],
        votes: 89,
        liked: false,
        description: "Productos alemanes de alta calidad, solo meetup en Berlín",
        verified: true,
        reports: 1
    },
    {
        id: 3,
        name: "ParisPurple",
        country: "🇫🇷",
        countryName: "Francia",
        avatar: "PP",
        methods: [
            { type: "shipping", icon: "fas fa-shipping-fast", label: "Shipping" },
            { type: "crypto", icon: "fab fa-bitcoin", label: "Crypto" }
        ],
        votes: 156,
        liked: true,
        description: "Purple Haze francés, envíos discretos y seguros",
        verified: true,
        reports: 0
    },
    {
        id: 4,
        name: "MadridMint",
        country: "🇪🇸",
        countryName: "España",
        avatar: "MM",
        methods: [
            { type: "meetup", icon: "fas fa-handshake", label: "Meetup" },
            { type: "shipping", icon: "fas fa-shipping-fast", label: "Shipping" },
            { type: "crypto", icon: "fab fa-bitcoin", label: "Crypto" }
        ],
        votes: 203,
        liked: false,
        description: "Menta española premium, disponible en toda la península",
        verified: true,
        reports: 2
    },
    {
        id: 5,
        name: "RomeRed",
        country: "🇮🇹",
        countryName: "Italia",
        avatar: "RR",
        methods: [
            { type: "meetup", icon: "fas fa-handshake", label: "Meetup" },
            { type: "crypto", icon: "fab fa-bitcoin", label: "Crypto" }
        ],
        votes: 78,
        liked: false,
        description: "Red Devil italiano, solo meetup en Roma y Milán",
        verified: false,
        reports: 3
    },
    {
        id: 6,
        name: "LondonLemon",
        country: "🇬🇧",
        countryName: "Reino Unido",
        avatar: "LL",
        methods: [
            { type: "shipping", icon: "fas fa-shipping-fast", label: "Shipping" },
            { type: "crypto", icon: "fab fa-bitcoin", label: "Crypto" }
        ],
        votes: 134,
        liked: true,
        description: "Lemon Haze británico, envíos rápidos a toda Europa",
        verified: true,
        reports: 1
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
        description: "Violeta austriaca, calidad alpina premium",
        verified: true,
        reports: 0
    },
    {
        id: 8,
        name: "PraguePurple",
        country: "🇨🇿",
        countryName: "República Checa",
        avatar: "PP",
        methods: [
            { type: "meetup", icon: "fas fa-handshake", label: "Meetup" },
            { type: "crypto", icon: "fab fa-bitcoin", label: "Crypto" }
        ],
        votes: 67,
        liked: false,
        description: "Purple Punch checo, solo meetup en Praga",
        verified: false,
        reports: 4
    },
    {
        id: 9,
        name: "StockholmSilver",
        country: "🇸🇪",
        countryName: "Suecia",
        avatar: "SS",
        methods: [
            { type: "shipping", icon: "fas fa-shipping-fast", label: "Shipping" },
            { type: "crypto", icon: "fab fa-bitcoin", label: "Crypto" }
        ],
        votes: 145,
        liked: true,
        description: "Silver Haze sueco, envíos discretos a toda Escandinavia",
        verified: true,
        reports: 1
    },
    {
        id: 10,
        name: "CopenhagenCrystal",
        country: "🇩🇰",
        countryName: "Dinamarca",
        avatar: "CC",
        methods: [
            { type: "meetup", icon: "fas fa-handshake", label: "Meetup" },
            { type: "shipping", icon: "fas fa-shipping-fast", label: "Shipping" }
        ],
        votes: 111,
        liked: false,
        description: "Crystal Clear danés, calidad nórdica excepcional",
        verified: true,
        reports: 0
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

    const verifiedBadge = plug.verified ? '<span class="verified-badge">✓ Verificado</span>' : '';
    const reportsText = plug.reports > 0 ? `<span class="reports-count">⚠️ ${plug.reports} reportes</span>` : '';

    plugDiv.innerHTML = `
        <div class="plug-avatar">${plug.avatar}</div>
        <div class="plug-info">
            <div class="plug-name">${plug.name}</div>
            <div class="plug-country">${plug.country}</div>
            <div class="plug-methods">${methodsHtml}</div>
            <div class="plug-description">${plug.description}</div>
            <div class="plug-stats">
                <div class="votes">
                    <i class="fas fa-heart"></i>
                    <span>${plug.votes}</span>
                </div>
                ${reportsText}
                ${verifiedBadge}
            </div>
        </div>
    `;

    // Agregar evento de click
    plugDiv.addEventListener('click', () => {
        handlePlugClick(plug);
    });

    return plugDiv;
}

// Manejar click en plug
function handlePlugClick(plug) {
    console.log('Plug seleccionado:', plug);
    
    // Enviar datos al bot
    sendDataToBot('plug_selected', {
        plug_id: plug.id,
        plug_name: plug.name,
        action: 'view_details'
    });

    // Mostrar información del plug
    alert(`Plug: ${plug.name}\nPaís: ${plug.countryName}\nVotos: ${plug.votes}\nVerificado: ${plug.verified ? 'Sí' : 'No'}`);
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
            alert('Funcionalidad de búsqueda en desarrollo...');
            break;
        case 'giveaway':
            alert('Funcionalidad de giveaway en desarrollo...');
            break;
    }
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