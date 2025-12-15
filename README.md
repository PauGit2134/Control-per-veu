# 🎙️ Control de Veu: Aplicació d'Escriptori amb Reconeixement Vocal

Una aplicació d'escriptori multiplataforma que permet controlar la interfície d'usuari mitjançant comandes de veu en català. Desenvolupada com a prova de concepte amb **Electron, Vue 3 i Vuetify**, i integració de la **Web Speech API** per al reconeixement de veu en temps real.

---

## 🛠️ Tecnologies Utilitzades

| Tecnologia       | Versió     | Propòsit                                      |
|-----------------|------------|-----------------------------------------------|
| Electron         | 39.2.6     | Entorn d'escriptori natiu i integració amb el sistema operatiu |
| Vue              | 3.5.21     | Framework frontend reactiu i sistema de components |
| Vuetify          | 3.10.1     | Biblioteca de components Material Design      |
| Vite             | 7.1.5      | Eina de construcció i servidor de desenvolupament |
| Vue Router       | 4.5.1      | Enrutament per a aplicacions SPA             |
| Web Speech API   | Natiu      | Reconeixement de veu (webkitSpeechRecognition) |

---

## 📋 Requisits Previs

- Node.js (versió 18 o superior)  
- npm (normalment inclòs amb Node.js)  
- Micròfon funcionant al sistema  
- Accés a internet (per al processament de veu via Google Speech API)

---

## 🚀 Instal·lació i Execució

### 1️⃣ Clonar el repositori
Obre la terminal i escriu:  
```bash
git clone https://github.com/PauGit2134/Control-per-veu.git
2️⃣ Entrar a la carpeta del projecte
bash
Copia el codi
cd Control-per-veu/voice-app
3️⃣ Instal·lar dependències
bash
Copia el codi
npm install
4️⃣ Executar l'aplicació
Opció A: Mode Desenvolupament (localhost)

bash
Copia el codi
npm run dev
Carrega l'aplicació al navegador amb recàrrega en calent.

Opció B: Mode Electron (aplicació d'escriptori)

bash
Copia el codi
npm run dev:electron
Construeix l'aplicació i la llança com a aplicació d'escriptori.

🎯 Ús Bàsic de l'Aplicació
Interfície Principal
Indicador visual de l'estat del micròfon

Text d'estat: "Escoltant..." o "En espera"

Àrea de transcripció en temps real

Botó Escolta per activar el reconeixement de veu

Comandes de Veu Disponibles
Comanda	Acció	Resposta Visual
"Saluda"	Mostra missatge de benvinguda	Targeta verda ✅
"Ajuda"	Mostra informació d'ajuda	Targeta blava ℹ️
"Mode Fosc"	Activa tema fosc	Interfície fosca 🦉
"Mode Clar"	Activa tema clar	Interfície clara ☀️
"Esborra"	Neteja l'estat	Reinicia a estat inicial 🔄
Altres	Comanda no reconeguda	Avís vermell ❌

Flux d'Ús Típic
Prem el botó Escolta per activar el micròfon

L'indicador del micròfon es posarà vermell i parpellejarà

Pronuncia una comanda suportada

L'aplicació executarà l'acció corresponent

El micròfon es desactivarà automàticament

⚠️ Consideracions Importants
L'aplicació funciona millor en Chrome.

Quan s'executa amb Electron empaquetat, pot haver-hi errors de xarxa (NetworkError) deguts a la dependència de la Web Speech API amb els servidors de Google.

Solució Recomanada: Per proves i desenvolupament, utilitza el mode npm run dev per carregar l'aplicació des del servidor local.

📁 Estructura del Projecte
graphql
Copia el codi
voice-app/
├── electron/           # Procés principal d'Electron
│   └── main.js         # Gestió de finestres i cicle de vida
├── src/                # Aplicació Vue
│   ├── components/     # Components reutilitzables
│   │   └── VoiceCommander.vue
│   ├── composables/    # Lògica reutilitzable
│   │   └── useSpeechRecognition.js
│   └── pages/          # Pàgines (auto-importades)
├── dist/               # Sortida de construcció: frontend
├── dist-electron/      # Sortida de construcció: Electron
└── package.json        # Dependències i scripts
🔧 Scripts Disponibles
Comanda	Descripció
npm run dev	Inicia servidor de desenvolupament
npm run build	Construeix per a producció
npm run lint	Executa ESLint amb correcció automàtica

📄 Llicència
Aquest projecte és una prova de concepte educativa desenvolupada per a l'Activitat 4 del curs de Documentació Professional.

yaml
Copia el codi

---

Si vols, puc fer **una versió final amb colors i emojis extra per seccions**, que quedi molt més atractiu visualment al GitHub, llest per enganxar.  

Vols que ho faci també?