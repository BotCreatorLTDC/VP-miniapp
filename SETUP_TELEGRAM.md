# Configuración de VerifyPlug Mini-App en Telegram

## 🚀 Pasos para configurar la Mini App

### 1. Configurar el Bot en BotFather

1. Abre [@BotFather](https://t.me/BotFather) en Telegram
2. Usa el comando `/mybots`
3. Selecciona tu bot
4. Ve a "Bot Settings" → "Mini App"
5. Configura la Mini App:
   - **Title**: VerifyPlug Mini-App
   - **Description**: Sistema de verificación de plugs confiables
   - **URL**: `https://mpg-miniapp-1.onrender.com/verifyplug_miniapp/`
   - **Icon**: Sube un icono (opcional)

### 2. Configurar el Webhook (si es necesario)

Si tu bot usa webhooks, asegúrate de que la URL de la Mini App esté configurada correctamente.

### 3. Probar la Mini App

1. Abre tu bot en Telegram
2. Usa el comando `/start`
3. Toca el botón "🔍 VerifyPlug Mini-App"
4. La Mini App debería abrirse dentro de Telegram

## 🔧 Características de la Mini App

### Funcionalidades Implementadas:
- ✅ **Integración nativa con Telegram**
- ✅ **Botones de Telegram** (MainButton, BackButton)
- ✅ **Comunicación bidireccional** con el bot
- ✅ **Envío de datos** (votos, reportes)
- ✅ **Tema de Telegram** integrado
- ✅ **Datos del usuario** disponibles

### Datos que se envían al bot:
- **Votos**: Cuando un usuario vota por un plug
- **Reportes**: Cuando un usuario reporta un plug
- **Información del usuario**: ID, nombre, etc.

## 📱 Estructura de la Mini App

```
verifyplug_miniapp/
├── index.html              # Página principal con Telegram Web Apps API
├── styles.css              # Estilos optimizados para Telegram
├── app.js                 # Lógica con integración de Telegram
├── telegram-config.json   # Configuración específica de Telegram
└── README.md              # Documentación completa
```

## 🎯 Opciones de la Mini App

1. **VerifyPlug Mini-App** - Lista visual de plugs
2. **VerifyPlug List** - Lista en texto plano
3. **BackUp** - Sistema de respaldo (en desarrollo)
4. **Instagram** - Integración con Instagram (en desarrollo)
5. **Escrow** - Sistema de garantía (en desarrollo)
6. **F.A.Q.** - Preguntas frecuentes (en desarrollo)

## 🔄 Comunicación con el Bot

### Datos enviados desde la Mini App:
```json
{
  "action": "vote",
  "data": {
    "plugId": 1,
    "plugName": "GreenValley",
    "action": "like",
    "votes": 25
  },
  "timestamp": "2025-09-06T11:22:00.000Z",
  "user": {
    "id": 123456789,
    "first_name": "Usuario",
    "username": "usuario123"
  }
}
```

### Respuesta del bot:
- Confirmación de voto registrado
- Confirmación de reporte enviado
- Botón para volver a abrir la Mini App

## 🚨 Solución de Problemas

### La Mini App no se abre:
1. Verifica que la URL esté configurada correctamente en BotFather
2. Asegúrate de que el servidor esté funcionando
3. Verifica que no haya errores en la consola del navegador

### Los datos no se envían al bot:
1. Verifica que el handler `handle_miniapp_data` esté configurado
2. Revisa los logs del bot para errores
3. Asegúrate de que el bot esté funcionando correctamente

### Errores de CORS:
1. La Mini App debe estar servida desde HTTPS
2. Verifica que el dominio esté configurado correctamente
3. Asegúrate de que el bot esté configurado para recibir datos de la Mini App

## 📞 Soporte

Si tienes problemas con la configuración, revisa:
1. Los logs del bot
2. La consola del navegador en la Mini App
3. La configuración en BotFather

---

**¡La Mini App está lista para usar! 🎉**
