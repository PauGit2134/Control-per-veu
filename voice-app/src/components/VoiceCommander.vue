<script setup>
import { ref, watch } from 'vue';
import { useTheme } from 'vuetify';
import { useSpeechRecognition } from '@/composables/useSpeechRecognition';

// Composable per al reconeixement de veu
const { isListening, transcript, interimTranscript, error, start } = useSpeechRecognition();

// Control del tema de Vuetify (Dark/Light)
const theme = useTheme();

// Refs per a l'estat de la interfície
const uiMessage = ref("Prem el botó per començar...");
const statusColor = ref("primary");

// Refs per a la notificació (Snackbar)
const snackbar = ref(false);
const snackbarText = ref('');

// Funció per reiniciar l'estat visual
const resetUI = () => {
  uiMessage.value = "Prem el botó per començar...";
  statusColor.value = "primary";
};

// Lògica principal que reacciona a les comandes de veu
watch(transcript, (newText) => {
  const command = newText.toLowerCase().trim();
  
  if (command.includes('saluda')) {
    uiMessage.value = "Hola! Benvingut a l'aplicació.";
    statusColor.value = "success";
    alert("Hola!");
  } 
  else if (command.includes('ajuda')) {
    uiMessage.value = "Aquesta és una prova de concepte.";
    statusColor.value = "info";
  }
  // Tasca 1: Comanda "Esborra"
  else if (command.includes('esborra') || command.includes('borrar')) {
    resetUI();
  }
  // Tasca 2: Control del Tema
  else if (command.includes('mode fosc')) {
    theme.global.name.value = 'dark';
    uiMessage.value = "Tema canviat a fosc.";
    statusColor.value = "primary";
  }
  else if (command.includes('mode clar')) {
    theme.global.name.value = 'light';
    uiMessage.value = "Tema canviat a clar.";
    statusColor.value = "primary";
  }
  // Tasca 3: Comanda no reconeguda amb Snackbar
  else {
    uiMessage.value = `Comanda no reconeguda: "${newText}"`;
    statusColor.value = "warning";
    // Mostrem la notificació
    snackbarText.value = `Comanda no reconeguda: "${newText}"`;
    snackbar.value = true;
  }
});
</script>

<template>
  <v-container class="d-flex justify-center align-center fill-height">
    <v-card width="400" :color="statusColor" variant="tonal">
      <v-card-item>
        <v-card-title class="text-h5 text-center">Control per Veu</v-card-title>
      </v-card-item>

      <v-card-text class="text-center py-4">
        <div class="mb-4">
          <v-icon 
            :icon="isListening ? 'mdi-microphone' : 'mdi-microphone-off'" 
            size="64"
            :class="{'text-red animate-pulse': isListening}"
          ></v-icon>
        </div>
        
        <p class="text-h6 font-weight-bold">{{ isListening ? 'Escoltant...' : 'En espera' }}</p>
        
        <p v-if="interimTranscript" class="text-caption text-grey">
            Detectant: {{ interimTranscript }}
        </p>
        
        <p class="mt-2 text-body-1">{{ uiMessage }}</p>
        
        <v-alert v-if="error" type="error" class="mt-3" density="compact">{{ error }}</v-alert>
      </v-card-text>

      <v-card-actions class="justify-center pb-4">
        <v-btn 
          variant="elevated" color="primary" size="large"
          @click="start" :disabled="isListening"
        >
          Escolta
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- Tasca 3: Component Snackbar per a errors -->
    <v-snackbar
      v-model="snackbar"
      :timeout="3000"
      color="red-lighten-1"
      location="bottom"
    >
      {{ snackbarText }}
    </v-snackbar>
  </v-container>
</template>

<style scoped>
.animate-pulse { animation: pulse 1.5s infinite; }
@keyframes pulse {
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
}
</style>