🎙️ Control de Veu: Aplicació d'Escriptori amb Reconeixement Vocal
Una aplicació d'escriptori multiplataforma que permet controlar la interfície d'usuari mitjançant comandes de veu en català. Desenvolupada com a prova de concepte utilitzant Electron, Vue 3 i Vuetify, amb integració de la Web Speech API per al reconeixement de veu en temps real. README.md:1-4

🛠️ Tecnologies Utilitzades
Tecnologia	Versió	Propòsit
Electron	39.2.6	Entorn d'escriptori natiu i integració amb el sistema operatiu
Vue	3.5.21	Framework frontend reactiu i sistema de components
Vuetify	3.10.1	Biblioteca de components Material Design
Vite	7.1.5	Eina de construcció i servidor de desenvolupament
Vue Router	4.5.1	Enrutament per a aplicacions SPA
Web Speech API	Natiu	Reconeixement de veu (webkitSpeechRecognition)
📋 Requisits Previs
Node.js (versió 18 o superior)
npm (normalment inclòs amb Node.js)
Micròfon funcionant al sistema
Accés a internet (per al processament de veu via Google Speech API)
🚀 Instal·lació i Execució
1. Clonar el repositori
git clone https://github.com/PauGit2134/Control-per-veu.git  
cd Control-per-veu/voice-app
2. Instal·lar dependències
npm install
3. Executar l'aplicació
Opció A: Mode Desenvolupament (localhost)
npm run dev
Aquesta opció inicia el servidor de desenvolupament de Vite a localhost:3000 amb recàrrega en calent. package.json:6-8

Opció B: Mode Electron (aplicació d'escriptori)
npm run dev:electron
Primer es construeix l'aplicació per a producció, després s'executa com a aplicació d'escriptori nativa. main.js:14-18

🎯 Ús Bàsic de l'Aplicació
Interfície Principal
L'aplicació presenta una targeta central amb:

Un indicador visual de l'estat del micròfon
Text d'estat que mostra "Escoltant..." o "En espera"
Àrea de transcripció en temps real
Botó "Escolta" per activar el reconeixement de veu
Comandes de Veu Disponibles
L'aplicació reconeix les següents comandes en català: VoiceCommander.vue:74-95

Comanda	Acció	Resposta Visual
"Saluda"	Mostra missatge de benvinguda	Targeta verda ✅
"Ajuda"	Mostra informació d'ajuda	Targeta blava ℹ️
"Mode Fosc"	Activa tema fosc	Interfície fosca 🦉
"Mode Clar"	Activa tema clar	Interfície clara ☀️
"Esborra"	Neteja l'estat	Reinicia a estat inicial 🔄
Altres text	Comanda no reconeguda	Avís vermell amb text detectat ❌
Flux d'Ús Típic
Prem el botó "Escolta" per activar el micròfon
L'indicador del micròfon es posarà vermell i parpellejarà
Pronuncia una de les comandes suportades
Veuràs el text transcrit en temps real
L'aplicació executarà l'acció corresponent
El micròfon es desactivarà automàticament
⚠️ Consideracions Importants
Limitació de l'API de Veu
L'aplicació funciona perfectament en navegador Chrome, però pot experimentar errors de xarxa (NetworkError) quan s'executa com a aplicació Electron empaquetada. Això es deu a que l'API webkitSpeechRecognition depèn dels servidors de Google, que requereixen una clau d'API de Google Cloud per a aplicacions Electron en producció. README.md:56-60

Solució Recomanada
Per al desenvolupament i proves, utilitza el mode npm run dev que carrega l'aplicació des del servidor local, evitant aquesta limitació.

📁 Estructura del Projecte
voice-app/  
├── electron/              # Procés principal d'Electron  
│   └── main.js           # Gestió de finestres i cicle de vida  
├── src/                  # Aplicació Vue  
│   ├── components/       # Components reutilitzables  
│   │   └── VoiceCommander.vue  # Interfície de control per veu  
│   ├── composables/      # Lògica reutilitzable  
│   │   └── useSpeechRecognition.js  # Abstracció de l'API de veu  
│   └── pages/            # Pàgines (auto-importades)  
├── dist/                 # Sortida de construcció: frontend  
├── dist-electron/        # Sortida de construcció: Electron  
└── package.json          # Dependències i scripts  
🔧 Scripts Disponibles
npm run dev - Inicia servidor de desenvolupament
npm run build - Construeix per a producció
npm run lint - Executa ESLint amb correcció automàtica package.json:6-11
📄 Llicència
Aquest projecte és una prova de concepte educativa desenvolupada per a l'Activitat 4 del curs de Documentació Professional.