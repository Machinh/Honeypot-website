from flask import Flask, request
import sqlite3
import geoip2.database

app = Flask(__name__)
DATABASE = 'honeypot.db'
GEOIP_DATABASE = 'GeoLite2-City.mmdb'

def create_table():
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS honeypot
                      (id INTEGER PRIMARY KEY AUTOINCREMENT,
                       ip TEXT,
                       user_agent TEXT,
                       browser TEXT,
                       os TEXT,
                       city TEXT,
                       country TEXT)''')
    conn.commit()
    conn.close()

def save_data(ip, user_agent, browser, os, city, country):
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute("INSERT INTO honeypot (ip, user_agent, browser, os, city, country) VALUES (?, ?, ?, ?, ?, ?)",
                   (ip, user_agent, browser, os, city, country))
    conn.commit()
    conn.close()

def get_user_agent_info(user_agent):
    # Obter informações do navegador e sistema operacional a partir do User-Agent
    # Implemente a lógica aqui para extrair as informações relevantes do User-Agent
    browser = 'Exemplo de Navegador'
    os = 'Exemplo de Sistema Operacional'
    return browser, os

def get_location_info(ip):
    reader = geoip2.database.Reader(GEOIP_DATABASE)
    try:
        response = reader.city(ip)
        city = response.city.name
        country = response.country.name
    except geoip2.errors.AddressNotFoundError:
        city = 'Desconhecida'
        country = 'Desconhecido'
    reader.close()
    return city, country

@app.route('/', methods=['GET', 'POST'])
def honeypot():
    ip = request.remote_addr
    user_agent = request.headers.get('User-Agent')

    browser, os = get_user_agent_info(user_agent)

    city, country = get_location_info(ip)

    save_data(ip, user_agent, browser, os, city, country)

    return "Página de Honeypot"  # Página exibida para os usuários

if __name__ == '__main__':
    create_table()
    app.run()
