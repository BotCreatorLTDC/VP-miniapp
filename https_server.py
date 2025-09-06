#!/usr/bin/env python3
"""
Servidor HTTPS simple para la Mini App de Telegram
"""

import http.server
import ssl
import socketserver
import os

# Puerto para el servidor HTTPS
PORT = 8443

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Añadir headers CORS para Telegram
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def create_self_signed_cert():
    """Crear certificado SSL autofirmado"""
    try:
        from cryptography import x509
        from cryptography.x509.oid import NameOID
        from cryptography.hazmat.primitives import hashes
        from cryptography.hazmat.primitives.asymmetric import rsa
        from cryptography.hazmat.primitives import serialization
        import datetime
        
        # Generar clave privada
        private_key = rsa.generate_private_key(
            public_exponent=65537,
            key_size=2048,
        )
        
        # Crear certificado
        subject = issuer = x509.Name([
            x509.NameAttribute(NameOID.COUNTRY_NAME, "ES"),
            x509.NameAttribute(NameOID.STATE_OR_PROVINCE_NAME, "Madrid"),
            x509.NameAttribute(NameOID.LOCALITY_NAME, "Madrid"),
            x509.NameAttribute(NameOID.ORGANIZATION_NAME, "VerifyPlugEU"),
            x509.NameAttribute(NameOID.COMMON_NAME, "localhost"),
        ])
        
        cert = x509.CertificateBuilder().subject_name(
            subject
        ).issuer_name(
            issuer
        ).public_key(
            private_key.public_key()
        ).serial_number(
            x509.random_serial_number()
        ).not_valid_before(
            datetime.datetime.utcnow()
        ).not_valid_after(
            datetime.datetime.utcnow() + datetime.timedelta(days=365)
        ).add_extension(
            x509.SubjectAlternativeName([
                x509.DNSName("localhost"),
                x509.IPAddress("127.0.0.1"),
            ]),
            critical=False,
        ).sign(private_key, hashes.SHA256())
        
        # Guardar certificado y clave
        with open("cert.pem", "wb") as f:
            f.write(cert.public_bytes(serialization.Encoding.PEM))
        
        with open("key.pem", "wb") as f:
            f.write(private_key.private_bytes(
                encoding=serialization.Encoding.PEM,
                format=serialization.PrivateFormat.PKCS8,
                encryption_algorithm=serialization.NoEncryption()
            ))
        
        return True
    except ImportError:
        print("❌ cryptography no está instalado. Instalando...")
        os.system("pip install cryptography")
        return create_self_signed_cert()
    except Exception as e:
        print(f"❌ Error creando certificado: {e}")
        return False

def main():
    """Función principal"""
    print("🚀 Iniciando servidor HTTPS para VerifyPlug Mini-App...")
    
    # Crear certificado si no existe
    if not os.path.exists("cert.pem") or not os.path.exists("key.pem"):
        print("📜 Creando certificado SSL autofirmado...")
        if not create_self_signed_cert():
            print("❌ No se pudo crear el certificado SSL")
            return
        print("✅ Certificado SSL creado")
    
    # Crear servidor HTTPS
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"🌐 Servidor HTTPS iniciado en puerto {PORT}")
        print(f"🔗 URL: https://localhost:{PORT}")
        print(f"📱 Para Telegram: https://localhost:{PORT}")
        print("⚠️  Acepta el certificado autofirmado en tu navegador")
        print("🛑 Presiona Ctrl+C para detener")
        
        # Configurar SSL
        context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
        context.load_cert_chain("cert.pem", "key.pem")
        httpd.socket = context.wrap_socket(httpd.socket, server_side=True)
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Servidor detenido")

if __name__ == '__main__':
    main()
