# 🎙️ Control de Veu: Un Experiment amb Electron i Vue

Aquest projecte és una Prova de Concepte (PoC) que explora el control per veu en una aplicació d'escriptori, construïda amb **Electron**, **Vue 3** i **Vuetify**. La idea és simple: controla la interfície i el seu tema visual només amb la teva veu, gràcies a la màgia de la **Web Speech API**.

## ✨ Funcionalitats principals

-   **Reconeixement de Veu Actiu:** Utilitza `webkitSpeechRecognition` per escoltar les teves ordres.
-   **Permisos Sense Fricció:** L'aplicació està configurada per demanar accés al micròfon de manera automàtica.
-   **Feedback en Temps Real:**
    -   Una animació subtil t'indica que el micròfon està funcionant.
    -   Veus el que dius transcrit a la pantalla a l'instant.
    -   Si no s'entén una ordre, una notificació t'avisa amablement.
-   **Canvi de Tema Dinàmic:** Passa del dia a la nit (Mode Clar ☀️ / Mode Fosc 🌙) amb una simple ordre de veu.

## 🎬 Demostració en Acció

Mira com funciona el canvi de tema i la gestió d'errors:

![Demo de l'aplicació](src/assets/demo.gif)
*(Si la imatge no carrega, assegura't que el GIF estigui a `src/assets`)*

## 🗣️ Comandes de Veu Disponibles

Aquestes són les paraules màgiques que l'aplicació entén (en català):

| Comanda       | Acció Esperada                               | Resposta Visual                                  |
| :------------ | :------------------------------------------- | :----------------------------------------------- |
| **"Saluda"**  | Et dona la benvinguda                        | Missatge d'èxit de color verd ✅                   |
| **"Ajuda"**   | Mostra un missatge informatiu                | Notificació de color blau ℹ️                      |
| **"Mode Fosc"** | Activa el tema fosc                          | La interfície es torna fosca com la nit 🦉         |
| **"Mode Clar"** | Activa el tema clar                          | La interfície s'il·lumina com un dia assolellat 쨍 |
| **"Esborra"**  | Neteja la pantalla i reinicia l'estat        | Torna al missatge per defecte 🔄                 |
| *(Altres...)* | Gestiona ordres desconegudes                 | Apareix un avís vermell amb el text detectat ❌    |


## 🛠️ Començar a Utilitzar

Necessites tenir **Node.js** i **NPM** instal·lats al teu sistema.

1.  **Clona el projecte:**
    ```bash
    git clone https://github.com/a24kimgalgal/voice-commander-electron.git
    cd voice-commander-electron
    ```
2.  **Instal·la les dependències (dins de la carpeta `Voice-app`):**
    ```bash
    cd Voice-app
    npm install
    ```
3.  **Executa l'aplicació:**
    ```bash
    npm run dev
    ```


## ⚠️ Avís Important sobre l'API de Veu a Electron

L'aplicació funciona de meravella si l'executes en un navegador com Chrome. No obstant això, quan s'executa com Electron, l'API de veu pot fallar amb un `NetworkError`.

**Per què passa això?** L'API `webkitSpeechRecognition` depèn dels servidors de Google per processar la veu. Per motius de seguretat i costos, Google limita l'accés des d'aplicacions com Electron si no s'inclou una clau d'API de Google Cloud (que és un servei de pagament). El codi de l'aplicació és correcte, però el servei extern ens posa aquesta limitació.
